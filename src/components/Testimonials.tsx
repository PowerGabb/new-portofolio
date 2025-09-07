import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Rangga adalah developer yang sangat profesional dan detail. Dia berhasil mengembangkan aplikasi web kami dengan kualitas yang luar biasa. Komunikasi yang baik dan selalu tepat waktu dalam delivery.",
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager, InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Kerjasama dengan Rangga sangat menyenangkan. Dia tidak hanya coding, tapi juga memberikan saran teknis yang valuable untuk project kami. Hasil akhirnya melebihi ekspektasi!",
      project: "Mobile App Development"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      position: "Marketing Director, CreativeAgency",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Website yang dibuat Rangga sangat user-friendly dan loading-nya cepat. SEO optimization yang dilakukan juga membuat traffic website kami meningkat 200%. Highly recommended!",
      project: "Company Website"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Founder, StartupHub",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Rangga membantu kami dari konsep hingga deployment. Skill full-stack-nya sangat membantu karena kami tidak perlu hire developer terpisah untuk frontend dan backend.",
      project: "SaaS Platform"
    },
    {
      id: 5,
      name: "Amanda Wilson",
      position: "CTO, FinTech Solutions",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Security dan performance adalah prioritas utama untuk aplikasi fintech kami. Rangga berhasil deliver aplikasi yang secure dan scalable. Maintenance support-nya juga excellent.",
      project: "Financial Dashboard"
    },
    {
      id: 6,
      name: "James Thompson",
      position: "Operations Manager, LogisticsPro",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Sistem inventory management yang dibuat Rangga sangat membantu operasional kami. Real-time tracking dan reporting features-nya sangat powerful dan mudah digunakan.",
      project: "Inventory Management System"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apa Kata <span className="text-blue-600">Klien</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimoni dari klien-klien yang telah mempercayakan project mereka kepada saya
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <FaQuoteLeft className="w-8 h-8 text-blue-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Project */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-600"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Project Completion</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
              <div className="text-gray-600">Average Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Siap untuk menjadi klien berikutnya yang puas?
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Mulai Project Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}