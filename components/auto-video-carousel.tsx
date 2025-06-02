"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Video {
  id: string
  title: string
  description: string
  src: string
  poster?: string
}

interface AutoVideoCarouselProps {
  videos: Video[]
  className?: string
  autoRotateInterval?: number // in milliseconds
  autoPlay?: boolean
}

export default function AutoVideoCarousel({
  videos,
  className,
  autoRotateInterval = 15000, // Default to 15 seconds
  autoPlay = true,
}: AutoVideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(true)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState<boolean[]>(Array(videos.length).fill(false))
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const playPromiseRef = useRef<Promise<void> | null>(null)
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length)
    setVideoLoaded(Array(videos.length).fill(false))
  }, [videos])

  // Auto-rotate videos
  useEffect(() => {
    if (!isAutoRotating) return

    // Clear any existing timer
    if (autoRotateTimerRef.current) {
      clearTimeout(autoRotateTimerRef.current)
    }

    // Set up new timer
    autoRotateTimerRef.current = setTimeout(() => {
      nextVideo()
    }, autoRotateInterval)

    // Cleanup on unmount
    return () => {
      if (autoRotateTimerRef.current) {
        clearTimeout(autoRotateTimerRef.current)
      }
    }
  }, [activeIndex, isAutoRotating, autoRotateInterval])

  // Safely play video
  const safelyPlayVideo = async (video: HTMLVideoElement) => {
    if (!video) return

    try {
      // Reset video
      video.currentTime = 0
      video.muted = isMuted

      // Play the video and store the promise
      playPromiseRef.current = video.play()
      await playPromiseRef.current

      // Reset the promise reference after successful play
      playPromiseRef.current = null
    } catch (error) {
      console.error("Error playing video:", error)
      setIsPlaying(false)
      playPromiseRef.current = null
    }
  }

  // Safely pause video
  const safelyPauseVideo = async (video: HTMLVideoElement) => {
    if (!video) return

    try {
      // If there's a pending play promise, wait for it to resolve before pausing
      if (playPromiseRef.current) {
        await playPromiseRef.current
      }
      video.pause()
      video.currentTime = 0
    } catch (error) {
      console.error("Error pausing video:", error)
    }
  }

  // Handle video playback when active index changes
  useEffect(() => {
    const handleVideoChange = async () => {
      // Pause all videos first
      for (let i = 0; i < videoRefs.current.length; i++) {
        const videoRef = videoRefs.current[i]
        if (videoRef && i !== activeIndex) {
          await safelyPauseVideo(videoRef)
        }
      }

      // Then play the active video if needed
      const activeVideo = videoRefs.current[activeIndex]
      if (activeVideo && isPlaying) {
        await safelyPlayVideo(activeVideo)
      }
    }

    handleVideoChange()

    // Cleanup function
    return () => {
      // Make sure to handle any pending play promises on unmount
      if (playPromiseRef.current) {
        playPromiseRef.current.catch(() => {
          // Ignore any errors during cleanup
        })
      }
    }
  }, [activeIndex, isPlaying, isMuted])

  // Handle video end
  const handleVideoEnd = () => {
    if (isAutoRotating) {
      nextVideo()
    } else {
      setIsPlaying(false)
    }
  }

  // Play/pause the active video
  const togglePlay = async () => {
    const newIsPlaying = !isPlaying
    setIsPlaying(newIsPlaying)
    setIsAutoRotating(newIsPlaying) // Pause auto-rotation when video is paused

    const video = videoRefs.current[activeIndex]
    if (!video) return

    if (newIsPlaying) {
      await safelyPlayVideo(video)
    } else {
      await safelyPauseVideo(video)
    }
  }

  // Toggle mute state
  const toggleMute = () => {
    const newIsMuted = !isMuted
    setIsMuted(newIsMuted)

    const video = videoRefs.current[activeIndex]
    if (video) {
      video.muted = newIsMuted
    }
  }

  // Navigate to the next video
  const nextVideo = async () => {
    // Reset auto-rotate timer
    if (autoRotateTimerRef.current) {
      clearTimeout(autoRotateTimerRef.current)
    }

    // Pause current video before changing index
    const currentVideo = videoRefs.current[activeIndex]
    if (currentVideo) {
      await safelyPauseVideo(currentVideo)
    }

    // Change to next video
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  // Navigate to the previous video
  const prevVideo = async () => {
    // Reset auto-rotate timer
    if (autoRotateTimerRef.current) {
      clearTimeout(autoRotateTimerRef.current)
    }

    // Pause current video before changing index
    const currentVideo = videoRefs.current[activeIndex]
    if (currentVideo) {
      await safelyPauseVideo(currentVideo)
    }

    // Change to previous video
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  // Handle user interaction with the carousel
  const handleUserInteraction = () => {
    // Reset the auto-rotate timer when user interacts
    if (autoRotateTimerRef.current) {
      clearTimeout(autoRotateTimerRef.current)
    }

    if (isPlaying && isAutoRotating) {
      autoRotateTimerRef.current = setTimeout(() => {
        nextVideo()
      }, autoRotateInterval)
    }
  }

  // Handle video load status
  const handleVideoLoadedData = (index: number) => {
    const newLoadedStatus = [...videoLoaded]
    newLoadedStatus[index] = true
    setVideoLoaded(newLoadedStatus)
  }

  // Handle selecting a specific video
  const selectVideo = async (index: number) => {
    // Pause current video
    const currentVideo = videoRefs.current[activeIndex]
    if (currentVideo) {
      await safelyPauseVideo(currentVideo)
    }

    setActiveIndex(index)
    setIsPlaying(true)
  }

  return (
    <div
      className={cn("relative w-full", className)}
      onClick={handleUserInteraction}
      onMouseEnter={() => setIsAutoRotating(false)}
      onMouseLeave={() => isPlaying && setIsAutoRotating(true)}
    >
      {/* Video Container */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
        {/* Fallback image if videos don't load */}
        <div className="absolute inset-0 z-0">
          <Image
            src={videos[activeIndex].poster || "/placeholder-yld66.png"}
            alt={videos[activeIndex].title}
            fill
            className="object-cover"
          />
        </div>

        {/* Videos - Only render the active video */}
        <div className="absolute inset-0 z-10">
          <video
            ref={(el) => (videoRefs.current[activeIndex] = el)}
            className="w-full h-full object-cover"
            onEnded={handleVideoEnd}
            muted={isMuted}
            playsInline
            loop={false}
            poster={videos[activeIndex].poster || "/placeholder-yld66.png"}
            controls={false}
            onLoadedData={() => handleVideoLoadedData(activeIndex)}
            key={`video-${videos[activeIndex].id}`} // Key helps React identify when to recreate the element
          >
            <source src={videos[activeIndex].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Overlay - only visible when not playing or when there's an error */}
        <div
          className={`absolute inset-0 z-20 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying && videoLoaded[activeIndex] ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={togglePlay}
        >
          <Button
            variant="outline"
            size="icon"
            className="w-16 h-16 rounded-full bg-white/20 border-white text-white hover:bg-white/30 hover:text-white"
          >
            <Play className="h-8 w-8" />
          </Button>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
            </div>
            <div className="text-white text-sm font-medium">
              {activeIndex + 1} / {videos.length}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
          onClick={prevVideo}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
          onClick={nextVideo}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Video Info */}
      <div className="mt-4 bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-2">{videos[activeIndex].title}</h3>
        <p className="text-gray-600">{videos[activeIndex].description}</p>
      </div>

      {/* Video Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {videos.map((video, index) => (
          <button
            key={video.id}
            className={`relative aspect-video rounded-md overflow-hidden ${
              index === activeIndex ? "ring-2 ring-red-600" : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => selectVideo(index)}
          >
            <Image
              src={video.poster || "/placeholder-yld66.png"}
              alt={`Thumbnail for ${video.title}`}
              fill
              className="object-cover"
            />
            <div className={`absolute inset-0 bg-black/20 ${index === activeIndex ? "bg-transparent" : ""}`}></div>
          </button>
        ))}
      </div>
    </div>
  )
}
