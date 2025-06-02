import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Mail, Phone } from "lucide-react"
import { notFound } from "next/navigation"

// Product data
const products = {
  "round-panel": {
    name: "LED Big Round Panel R580",
    brand: "SHEENLY",
    description: "Energy-efficient round panel light with sleek design for modern spaces.",
    longDescription:
      "The LED Big Round Panel R580 is a high-quality lighting solution designed for modern commercial and residential spaces. With its sleek, minimalist design and energy-efficient performance, it provides excellent illumination while reducing energy costs.",
    features: [
      "Diameter: 580mm",
      "Power: 48W",
      "Color Temperature: 3000K/4000K/6000K",
      "Luminous Flux: 4800lm",
      "CRI: >80",
      "Beam Angle: 120°",
      "Lifespan: 50,000 hours",
      "IP Rating: IP20",
    ],
    applications: [
      "Office spaces",
      "Commercial buildings",
      "Hotels",
      "Retail stores",
      "Educational facilities",
      "Healthcare facilities",
    ],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28325%29-xBt1bsbkrfU87vf0ykEiWzgic0vVAu.png",
    datasheet: "/datasheets/led-big-round-panel-r580.pdf",
  },
  "highbay-lotus": {
    name: "LED Highbay - Lotus",
    brand: "SHEENLY",
    description: "High-performance industrial lighting solution for warehouses and large spaces.",
    longDescription:
      "The LED Highbay - Lotus is a powerful lighting solution designed specifically for industrial applications. With its high lumen output and durable construction, it's perfect for warehouses, factories, and other large spaces requiring bright, reliable illumination.",
    features: [
      "Power: 100W/150W/200W",
      "Color Temperature: 4000K/5000K/6000K",
      "Luminous Flux: up to 26000lm",
      "CRI: >80",
      "Beam Angle: 60°/90°/120°",
      "Lifespan: 50,000 hours",
      "IP Rating: IP65",
      "Operating Temperature: -30°C to +50°C",
    ],
    applications: [
      "Warehouses",
      "Manufacturing facilities",
      "Distribution centers",
      "Sports halls",
      "Exhibition centers",
      "Large retail spaces",
    ],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28325%29-xBt1bsbkrfU87vf0ykEiWzgic0vVAu.png",
    datasheet: "/datasheets/led-highbay-lotus.pdf",
  },
  "panel-600": {
    name: "LED Panel Light 600×600",
    brand: "SHEENLY",
    description: "Standard-sized LED panel for office and commercial ceiling installations.",
    longDescription:
      "The LED Panel Light 600×600 is a versatile lighting solution designed to fit standard ceiling grids. With its uniform light distribution and slim profile, it provides excellent illumination for office spaces and commercial environments while offering significant energy savings.",
    features: [
      "Dimensions: 595×595×10mm",
      "Power: 36W/40W/45W",
      "Color Temperature: 3000K/4000K/6000K",
      "Luminous Flux: up to 4500lm",
      "CRI: >80",
      "Beam Angle: 120°",
      "Lifespan: 50,000 hours",
      "IP Rating: IP20",
      "Flicker-free design",
    ],
    applications: [
      "Office buildings",
      "Schools and universities",
      "Hospitals",
      "Retail environments",
      "Conference rooms",
      "Public buildings",
    ],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28325%29-xBt1bsbkrfU87vf0ykEiWzgic0vVAu.png",
    datasheet: "/datasheets/led-panel-light-600x600.pdf",
  },
  "space-lily": {
    name: "LED Space Lighting - Lily",
    brand: "SHEENLY",
    description: "Elegant space lighting solution with modern design for accent lighting.",
    longDescription:
      "The LED Space Lighting - Lily combines aesthetic appeal with functional lighting. Its elegant design makes it perfect for accent lighting in upscale environments, while its energy-efficient LED technology ensures low operating costs and minimal maintenance.",
    features: [
      "Power: 15W/25W/35W",
      "Color Temperature: 2700K/3000K/4000K",
      "Luminous Flux: up to 3500lm",
      "CRI: >90",
      "Beam Angle: Adjustable",
      "Lifespan: 50,000 hours",
      "IP Rating: IP20",
      "Dimmable options available",
    ],
    applications: [
      "Hotels and restaurants",
      "Luxury retail",
      "Art galleries",
      "Residential spaces",
      "Reception areas",
      "Executive offices",
    ],
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28325%29-xBt1bsbkrfU87vf0ykEiWzgic0vVAu.png",
    datasheet: "/datasheets/led-space-lighting-lily.pdf",
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const product = products[slug as keyof typeof products]

  if (!product) {
    notFound()
  }

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
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="relative h-[400px] w-full">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
                {product.brand && (
                  <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-3 text-sm font-bold">
                    {product.brand}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-700 mb-6 text-lg">{product.longDescription}</p>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-red-600 mr-2 mt-1">•</div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Applications</h2>
                <ul className="space-y-2">
                  {product.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <div className="text-red-600 mr-2 mt-1">•</div>
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700">
                  <Link href={product.datasheet}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Datasheet
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Request Information
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Specifications</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <tbody>
                {product.features.map((feature, index) => {
                  const [key, value] = feature.includes(":") ? feature.split(":") : [feature, ""]
                  return (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-3 px-4 border-b border-gray-200 font-medium">{key}</td>
                      <td className="py-3 px-4 border-b border-gray-200">{value}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(products)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedProduct]) => (
                <div
                  key={key}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover-scale"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={relatedProduct.imageUrl || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-700 mb-4">{relatedProduct.description}</p>
                    <Link
                      href={`/services/led-lighting/products/${key}`}
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

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Contact our team of lighting experts to discuss your specific requirements and discover how our LED lighting
            solutions can benefit your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+38923131113">
                <Phone className="mr-2 h-4 w-4" />
                +389 2 3131113
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
