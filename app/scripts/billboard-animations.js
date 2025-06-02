document.addEventListener("DOMContentLoaded", () => {
  // Spotlight effect
  const spotlights = document.querySelectorAll(".spotlight")

  spotlights.forEach((spotlight) => {
    const spotlightEffect = spotlight.querySelector(".spotlight-effect")

    if (spotlightEffect) {
      spotlight.addEventListener("mousemove", (e) => {
        const rect = spotlight.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100

        spotlightEffect.style.setProperty("--x", `${x}%`)
        spotlightEffect.style.setProperty("--y", `${y}%`)
      })
    }
  })

  // Parallax effect
  const parallaxElements = document.querySelectorAll(".parallax-element")

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight

    parallaxElements.forEach((element) => {
      const speed = element.getAttribute("data-speed") || 0.1
      const moveX = (x - 0.5) * 20 * speed
      const moveY = (y - 0.5) * 20 * speed

      element.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    })
  })

  // Reveal on scroll
  const revealElements = document.querySelectorAll(".reveal")

  function checkReveal() {
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", checkReveal)
  checkReveal() // Check on load

  // Billboard carousel
  const carouselSlides = document.querySelectorAll(".carousel-slide")

  if (carouselSlides.length > 0) {
    const carouselDots = document.querySelectorAll(".carousel-dot")
    const carouselPrev = document.querySelector(".carousel-prev")
    const carouselNext = document.querySelector(".carousel-next")
    let currentSlide = 0

    function showSlide(index) {
      // Hide all slides
      carouselSlides.forEach((slide) => {
        slide.classList.remove("active")
      })

      // Update dots if they exist
      if (carouselDots.length > 0) {
        carouselDots.forEach((dot) => {
          dot.classList.remove("active")
        })
        carouselDots[index].classList.add("active")
      }

      // Show the current slide
      carouselSlides[index].classList.add("active")
      currentSlide = index
    }

    // Set up dot navigation
    if (carouselDots.length > 0) {
      carouselDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          showSlide(index)
        })
      })
    }

    // Set up prev/next buttons
    if (carouselPrev) {
      carouselPrev.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length
        showSlide(currentSlide)
      })
    }

    if (carouselNext) {
      carouselNext.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % carouselSlides.length
        showSlide(currentSlide)
      })
    }

    // Auto rotate
    setInterval(() => {
      currentSlide = (currentSlide + 1) % carouselSlides.length
      showSlide(currentSlide)
    }, 5000)
  }

  // Flip cards on hover for mobile compatibility
  const billboardCards = document.querySelectorAll(".billboard-card")

  billboardCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Check if it's already flipped
      const inner = card.querySelector(".billboard-card-inner")
      const isFlipped = inner.style.transform === "rotateY(180deg)"

      // Toggle the flip
      inner.style.transform = isFlipped ? "rotateY(0deg)" : "rotateY(180deg)"
    })
  })
})
