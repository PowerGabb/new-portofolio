import { FaCode, FaDesktop, FaGraduationCap, FaClock } from "react-icons/fa";

export default function AboutMe() {
  const highlights = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "3+ Tahun Pengalaman",
      description: "Berpengalaman dalam pengembangan web dan aplikasi"
    },
    {
      icon: <FaDesktop className="w-6 h-6" />,
      title: "50+ Project Selesai",
      description: "Telah menyelesaikan berbagai project untuk klien"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Selalu Update",
      description: "Mengikuti perkembangan teknologi terbaru"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Fast Response",
      description: "Respon cepat dan komunikasi yang baik"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Tentang <span className="text-blue-600">Saya</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Halo! Saya Rangga, seorang <span className="text-blue-600 font-semibold">Full Stack Developer</span> dan 
                <span className="text-purple-600 font-semibold"> UI/UX Designer</span> yang passionate dalam menciptakan 
                solusi digital yang inovatif dan user-friendly.
              </p>
              
              <p className="text-lg leading-relaxed">
                Dengan pengalaman lebih dari 3 tahun di industri teknologi, saya telah membantu berbagai 
                klien mulai dari startup hingga perusahaan besar untuk mewujudkan visi digital mereka.
              </p>
              
              <p className="text-lg leading-relaxed">
                Saya percaya bahwa teknologi yang baik adalah yang dapat memecahkan masalah nyata dan 
                memberikan value kepada pengguna. Mari berkolaborasi untuk mewujudkan ide Anda!
              </p>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:border-blue-300"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-gray-900 font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}