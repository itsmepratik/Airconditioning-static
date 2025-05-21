export default function ComfortSection() {
  const images = [
    {
      className: "col-span-1 md:col-span-2 row-span-2 h-[300px] md:h-[500px]",
      alt: "Air conditioning service",
    },
    {
      className: "h-[230px]",
      alt: "AC installation",
    },
    {
      className: "h-[230px]",
      alt: "AC maintenance",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-500">Services</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">Your Comfort is Our Priority</h2>
          <p className="text-gray-600 mt-2">Expert Air Conditioning Services Across Oman</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.className} bg-gray-100 rounded-xl overflow-hidden relative shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <path d="M3 15h18"></path>
                  <path d="M3 9h18"></path>
                  <path d="M9 3v18"></path>
                  <path d="M15 3v18"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

