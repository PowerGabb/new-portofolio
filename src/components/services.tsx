import { FaCode, FaPalette, FaGraduationCap, FaMobile, FaServer, FaSearch } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Pembuatan Website",
      description: "Website responsif dan modern dengan teknologi terbaru seperti React, Next.js, dan Tailwind CSS.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Aplikasi Mobile",
      description: "Aplikasi mobile cross-platform menggunakan React Native atau Flutter untuk iOS dan Android.",
      features: ["Cross Platform", "Native Performance", "Push Notifications", "Offline Support"]
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Desain antarmuka yang menarik dan user-friendly dengan fokus pada pengalaman pengguna.",
      features: ["User Research", "Wireframing", "Prototyping", "Design System"]
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: "Backend Development",
      description: "Pengembangan API dan sistem backend yang scalable menggunakan Node.js, Python, atau PHP.",
      features: ["RESTful API", "Database Design", "Authentication", "Cloud Deployment"]
    },
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "SEO & Marketing",
      description: "Optimasi website untuk mesin pencari dan strategi digital marketing untuk meningkatkan visibility.",
      features: ["On-Page SEO", "Technical SEO", "Content Strategy", "Analytics Setup"]
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Joki Tugas IT",
      description: "Bantuan mengerjakan tugas kuliah atau project IT dengan kualitas terbaik dan tepat waktu.",
      features: ["Programming Tasks", "Database Projects", "Web Development", "Documentation"]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Layanan <span className="text-blue-400">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solusi teknologi lengkap untuk kebutuhan digital Anda. Dari konsep hingga implementasi, 
            kami siap membantu mewujudkan visi Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Tidak menemukan layanan yang Anda cari? Mari diskusikan kebutuhan Anda!
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
}