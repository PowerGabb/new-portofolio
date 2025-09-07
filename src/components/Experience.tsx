import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      position: "Senior Full Stack Developer",
      company: "PT PELITA TEKNOLOGI GLOBAL TBK",
      location: "Jakarta, Indonesia",
      period: "2022 - Sekarang",
      description: [
        "Memimpin tim pengembangan aplikasi web menggunakan React, Node.js, dan MongoDB",
        "Mengoptimalkan performa aplikasi hingga 40% lebih cepat",
        "Mentoring junior developer dan code review",
        "Implementasi CI/CD pipeline dan DevOps practices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
    },
    {
      id: 2,
      position: "CEO & Co-founder",
      company: "PT PERSONA GLOBAL SOFTWARE",
      location: "Bogor, Indonesia",
      period: "2024 - Sekarang",
      description: [
        "Menganalisa kebutuhan bisnis dan mengembangkan solusi teknologi yang sesuai",
        "Mengelola tim pengembangan dan pengawasan kualitas",
        "Membuat solusi teknologi yang inovatif dan efisien",
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Stripe"]
    },
    {
      id: 3,
      position: "Frontend Developer",
      company: "PT INFIMEDIA SOLUSI PRATAMA",
      location: "On Site",
      period: "2022 - 2023",
      description: [
        "Membangun Company Profile Website",
        "Mengembangkan Web Dengen Laravel",
        "Optimasi SEO dan performance website",
        "Testing dan debugging cross-browser compatibility"
      ],
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "Stripe"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pengalaman <span className="text-blue-600">Kerja</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perjalanan karir saya dalam dunia teknologi dan pengembangan software
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center z-10">
                <FaBriefcase className="w-4 h-4 text-white" />
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <FaBriefcase className="w-4 h-4 text-blue-500" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="w-4 h-4 text-purple-500" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="w-4 h-4 text-green-500" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white text-blue-600 text-sm font-medium rounded-full border border-blue-200 hover:bg-blue-50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-gray-600">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
            <div className="text-gray-600">Project Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600">Klien Puas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}