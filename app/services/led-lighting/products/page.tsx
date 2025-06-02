import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: "round-panel",
    name: "LED Big Round Panel R580",
    brand: "SHEENLY",
    description: "Energy-efficient round panel light with sleek design for modern spaces.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28325%29-xBt1bsbkrfU87vf0ykEiWzgic0vVAu.png",
    featured: false,
  },
  {
    id: "highbay-lotus",
    name: "LED Highbay - Lotus",
    brand: "SHEENLY",
    description: "High-performance industrial lighting solution for warehouses and large spaces.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28325%29-xBt1bsbkrfU87vf0ykEiWzgic0vVAu.png",
    featured: false,
  },
  {
    id: "panel-600",
    name: "LED Panel Light 600×600",
    brand: "SHEENLY",
    description: "Standard-sized LED panel for office and commercial ceiling installations.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28325%29-xBt1bsbkrfU87vf0ykEiWzgic0vVAu.png",
    featured: true,
  },
  {
    id: "space-lily",
    name: "LED Space Lighting - Lily",
    brand: "SHEENLY",
    description: "Elegant space lighting solution with modern design for accent lighting.",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28325%29-xBt1bsbkrfU87vf0ykEiWzgic0vVAu.png",
    featured: false,
  },
]

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services/led-lighting" className="hover:text-red-600">
              LED Lighting
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Products</span>
          </div>
        </div>
      </div>

      {/* Products Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">LED Lighting Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality LED lighting solutions for various applications
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover-scale"
              >
                <div className="relative h-64 w-full">
                  {product.brand && (
                    <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-3 text-sm font-bold z-10">
                      {product.brand}
                    </div>
                  )}
                  {product.featured && (
                    <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-3 text-sm font-bold z-10">
                      FEATURED
                    </div>
                  )}
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <Link
                    href={`/services/led-lighting/products/${product.id}`}
                    className="text-red-600 font-medium inline-flex items-center hover:underline"
                  >
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Lighting Solution?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Our team of experts can help you design and implement a custom lighting solution tailored to your specific
            requirements.
          </p>
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link href="/contact">
              Contact Our Lighting Experts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
