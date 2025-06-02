"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

interface Video {
  id: string
  title: string
  description: string
  src: string
  poster?: string
}

interface VideoCarouselProps {
  videos: Video[]
  className?: string
}

export default function VideoCarousel({ videos, className }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length)
  }, [videos])

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  // Play/pause the active video
  const togglePlay = () => {
    const video = videoRefs.current[activeIndex]
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Toggle mute state
  const toggleMute = () => {
    const video = videoRefs.current[activeIndex]
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  // Navigate to the next video
  const nextVideo = () => {
    // Pause current video
    const currentVideo = videoRefs.current[activeIndex]
    if (currentVideo) {
      currentVideo.pause()
      currentVideo.currentTime = 0
    }

    setIsPlaying(false)
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))
  }

  // Navigate to the previous video
  const prevVideo = () => {
    // Pause current video
    const currentVideo = videoRefs.current[activeIndex]
    if (currentVideo) {
      currentVideo.pause()
      currentVideo.currentTime = 0
    }

    setIsPlaying(false)
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))
  }

  return (
    <div className={cn("relative w-full", className)}>
      {/* Video Container */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              poster={video.poster}
              className="w-full h-full object-cover"
              onEnded={handleVideoEnd}
              muted={isMuted}
              playsInline
            />

            {/* Video Overlay - only visible when not playing */}
            <div
              className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying && index === activeIndex ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              onClick={index === activeIndex ? togglePlay : undefined}
            >
              {index === activeIndex && (
                <Button
                  variant="outline"
                  size="icon"
                  className="w-16 h-16 rounded-full bg-white/20 border-white text-white hover:bg-white/30 hover:text-white"
                >
                  <Play className="h-8 w-8" />
                </Button>
              )}
            </div>
          </div>
        ))}

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/80 to-transparent">
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
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
          onClick={prevVideo}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
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
            onClick={() => {
              // Pause current video
              const currentVideo = videoRefs.current[activeIndex]
              if (currentVideo) {
                currentVideo.pause()
                currentVideo.currentTime = 0
              }

              setIsPlaying(false)
              setActiveIndex(index)
            }}
          >
            <video src={video.src} className="w-full h-full object-cover" muted playsInline preload="metadata" />
            <div className={`absolute inset-0 bg-black/20 ${index === activeIndex ? "bg-transparent" : ""}`}></div>
          </button>
        ))}
      </div>
    </div>
  )
}
