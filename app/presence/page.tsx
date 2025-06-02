import Image from "next/image"

export default function PresencePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full bg-red-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-32 w-64 md:h-48 md:w-96">
            <Image src="/logo.png" alt="Impuls International" fill className="object-contain" priority />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20">
          <div className="container mx-auto h-full px-4 flex flex-col justify-center md:px-6">
            <div className="max-w-3xl mt-32 md:mt-48">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Global Presence</h1>
              <p className="text-xl text-white/80">Delivering excellence across continents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Where We Operate</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With operations spanning multiple continents, we deliver consistent quality and service worldwide.
            </p>
          </div>

          <div className="relative h-[500px] w-full rounded-lg overflow-hidden mb-12">
            <Image src="/world-map.jpg" alt="Global presence map" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-red-600">North America</h3>
              <ul className="space-y-2 text-gray-700">
                <li>United States (Headquarters)</li>
                <li>Canada</li>
                <li>Mexico</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-red-600">Europe</h3>
              <ul className="space-y-2 text-gray-700">
                <li>United Kingdom</li>
                <li>Germany</li>
                <li>France</li>
                <li>Italy</li>
                <li>Spain</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-red-600">Asia Pacific</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Japan</li>
                <li>Singapore</li>
                <li>Australia</li>
                <li>India</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-red-600">Middle East</h3>
              <ul className="space-y-2 text-gray-700">
                <li>United Arab Emirates</li>
                <li>Saudi Arabia</li>
                <li>Qatar</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-red-600">Africa</h3>
              <ul className="space-y-2 text-gray-700">
                <li>South Africa</li>
                <li>Kenya</li>
                <li>Nigeria</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-red-600">South America</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Brazil</li>
                <li>Colombia</li>
                <li>Chile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Regional Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our services are tailored to meet the specific needs and requirements of each region we operate in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-red-600 p-8">
              <Image src="/logo.png" alt="North America operations" fill className="object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">North America</h3>
              <p className="text-gray-700 mb-4">
                Our North American operations serve a diverse range of industries, from logistics and supply chain
                management to technical implementation and strategic consulting. With our headquarters in the United
                States, we provide comprehensive solutions to clients across the continent.
              </p>
              <p className="text-gray-700">
                Key capabilities in this region include advanced logistics services, rapid response solutions for
                emergency situations, and specialized technical support for complex operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Europe</h3>
              <p className="text-gray-700 mb-4">
                Our European presence spans multiple countries, with offices in key locations such as London, Berlin,
                and Paris. We serve clients across various sectors, including manufacturing, healthcare, and government
                agencies.
              </p>
              <p className="text-gray-700">
                In Europe, we specialize in providing integrated services that comply with the region's stringent
                regulatory requirements while delivering exceptional value and efficiency.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-red-600 p-8 order-1 md:order-2">
              <Image src="/logo.png" alt="Europe operations" fill className="object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-red-600 p-8">
              <Image src="/logo.png" alt="Asia Pacific operations" fill className="object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Asia Pacific</h3>
              <p className="text-gray-700 mb-4">
                Our Asia Pacific operations cater to the region's dynamic and rapidly growing markets. With offices in
                key locations such as Singapore, Tokyo, and Sydney, we provide tailored solutions to meet the unique
                challenges and opportunities in this diverse region.
              </p>
              <p className="text-gray-700">
                Our capabilities in Asia Pacific include specialized logistics services, technical implementation for
                infrastructure projects, and strategic consulting for businesses expanding in the region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
