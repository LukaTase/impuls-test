import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Check, Download, Star } from "lucide-react"
import VideoCarousel from "@/components/video-carousel"

export default function OliptekShowcasePage() {
  // Video data
  const videos = [
    {
      id: "oliptek-video1",
      title: "Oliptek LED Panel Installation",
      description:
        "Step-by-step guide to installing Oliptek LED panel lights in commercial spaces. This video demonstrates the ease of installation and the clean, modern look of Oliptek panels.",
      src: "/vid1.mp4",
      poster: "/placeholder-yld66.png",
    },
    {
      id: "oliptek-video2",
      title: "Oliptek LED Lighting Solutions",
      description:
        "Showcase of various Oliptek LED lighting products in action, demonstrating their brightness, color quality, and versatility in different environments.",
      src: "/vid2.mp4",
      poster: "/placeholder-yld66.png",
    },
    {
      id: "oliptek-video3",
      title: "Oliptek Commercial Project",
      description:
        "A complete commercial lighting project using Oliptek LED products, showing before and after transformation and the impact of quality lighting.",
      src: "/vid3.mp4",
      poster: "/placeholder-yld66.png",
    },
    {
      id: "led-showcase",
      title: "Premium LED Lighting Effects",
      description:
        "Demonstration of lighting effects and quality possible with Oliptek and other premium LED lighting solutions we offer.",
      src: "/vid4.mp4",
      poster: "/placeholder-yld66.png",
    },
  ]

  // Product data
  const products = [
    {
      id: "op-panel-60",
      name: "Oliptek LED Panel 60x60",
      image: "/placeholder-2zzvb.png",
      features: [
        "36W power consumption",
        "3600lm light output",
        "4000K color temperature",
        "Flicker-free design",
        "Recessed mounting",
      ],
      price: "€49.90",
    },
    {
      id: "op-panel-120",
      name: "Oliptek LED Panel 120x30",
      image: "/placeholder-vpf0o.png",
      features: [
        "40W power consumption",
        "4000lm light output",
        "3000K/4000K/6000K options",
        "Slim profile design",
        "Surface or suspended mounting",
      ],
      price: "€59.90",
    },
    {
      id: "op-downlight",
      name: "Oliptek LED Downlight",
      image: "/placeholder-ny62f.png",
      features: [
        "12W/18W/24W options",
        "90° beam angle",
        "IP44 rated",
        "Dimmable options available",
        "Cut-out: Ø70-205mm",
      ],
      price: "€19.90",
    },
    {
      id: "op-highbay",
      name: "Oliptek LED High Bay",
      image: "/placeholder-261be.png",
      features: [
        "100W/150W/200W options",
        "13000-26000lm output",
        "IP65 rated",
        "120° beam angle",
        "50,000 hours lifespan",
      ],
      price: "€129.90",
    },
  ]

  // Projects data
  const projects = [
    {
      title: "Office Complex Renovation",
      location: "Skopje Business Center",
      description:
        "Complete lighting upgrade with Oliptek LED panels and downlights, reducing energy consumption by 65%.",
      image: "/placeholder-7b6qu.png",
    },
    {
      title: "Retail Store Lighting",
      location: "Fashion Outlet Mall",
      description:
        "Custom lighting design using Oliptek track lights and panels to enhance product displays and create ambiance.",
      image: "/placeholder.svg?height=400&width=600&query=retail store lighting",
    },
    {
      title: "Industrial Warehouse",
      location: "Logistics Center",
      description:
        "High bay LED installation providing improved visibility and significant energy savings in a large distribution facility.",
      image: "/placeholder.svg?height=400&width=600&query=warehouse LED lighting",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&query=modern LED lighting showroom"
            alt="Oliptek LED Lighting"
            fill
            className="object-cover"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center md:px-6 text-center">
          <div className="max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl inline-block mb-6">
              <Image src="/placeholder-v6nd5.png" alt="Oliptek Logo" width={180} height={60} className="h-12 w-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Official Dealer of <span className="text-red-500">Oliptek</span> LED Lighting
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Premium LED lighting solutions for commercial, industrial, and residential applications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg">
                <a href="#products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                <a href="#videos">
                  Watch Videos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Oliptek Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-red-600">Oliptek</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Oliptek is a leading manufacturer of high-quality LED lighting solutions, specializing in
                energy-efficient products for commercial and industrial applications. With a focus on innovation and
                sustainability, Oliptek has established itself as a trusted brand in the lighting industry.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As an official dealer of Oliptek products, Impuls provides authentic, warranty-backed lighting solutions
                with full technical support and installation services. Our partnership ensures you receive the best
                products at competitive prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <a
                    href="https://www.oliptek.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Visit Oliptek Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  <Link href="/contact" className="flex items-center">
                    Request Catalog
                    <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200&query=LED lighting manufacturing facility"
                alt="Oliptek Manufacturing"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                  <span className="text-white font-medium">ISO 9001 Certified Manufacturer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="videos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Oliptek Products <span className="text-red-600">In Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch demonstration videos of Oliptek LED lighting solutions in various applications
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <VideoCarousel videos={videos} />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-red-600">Oliptek Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our selection of premium Oliptek LED lighting solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-64 relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-red-600">{product.price}</span>
                    <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
                      <Link href={`/services/led-lighting/products/${product.id}`}>Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/services/led-lighting/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Oliptek <span className="text-red-500">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our Oliptek lighting solutions have transformed spaces for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
                  <div className="mb-2">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">{project.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <Button
                    asChild
                    className="w-fit bg-white text-red-600 hover:bg-gray-100 transition-transform duration-300 group-hover:translate-x-2"
                  >
                    <Link href="/projects">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our Clients <span className="text-red-600">Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have upgraded to Oliptek LED lighting solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The Oliptek LED panels we installed in our office have made a tremendous difference. The light quality
                is excellent, and we've seen a significant reduction in our energy bills."
              </p>
              <div>
                <h4 className="font-bold text-gray-900">Alkaloid AD</h4>
                <p className="text-gray-600 text-sm">Office Lighting Upgrade</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "We installed Oliptek high bay lights in our warehouse, and the improvement in visibility and working
                conditions has been remarkable. The energy savings are just a bonus!"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">FENI Industries</h4>
                <p className="text-gray-600 text-sm">Industrial Lighting Solution</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The Oliptek downlights we installed in our retail store have enhanced our product displays and created
                a welcoming atmosphere for our customers. Highly recommended!"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">TINEX</h4>
                <p className="text-gray-600 text-sm">Retail Lighting Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Upgrade Your Lighting?</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Contact our team today to discuss your Oliptek LED lighting needs and discover how we can help you save
            energy and transform your space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              <Link href="/services/led-lighting">
                Back to LED Lighting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
