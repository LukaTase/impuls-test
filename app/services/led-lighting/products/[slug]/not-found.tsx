import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function ProductNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        We couldn't find the product you're looking for. It may have been removed or the URL might be incorrect.
      </p>
      <Button asChild className="bg-red-600 hover:bg-red-700">
        <Link href="/services/led-lighting">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to LED Lighting Products
        </Link>
      </Button>
    </div>
  )
}
