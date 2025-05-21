import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor, ut commodo diam libero vitae erat.",
      name: "Ali Ahmed",
      position: "Homeowner, Muscat",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor, ut commodo diam libero vitae erat.",
      name: "Name Surname",
      position: "Position, Company name",
    },
    {
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor, ut commodo diam libero vitae erat.",
      name: "Name Surname",
      position: "Position, Company name",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Customer testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-400"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-6">{testimonial.text}</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Customer"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

