import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs, FaDatabase, FaMobile } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiFlutter, SiReact } from "react-icons/si";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Audit Management System Banking",
      description: "Platform manajemen audit banking modern dengan fitur lengkap seperti monitoring transaksi, analisis risiko, dan reporting.",
      image: "/portofolio/audit.png",
      category: "web",
      technologies: [<FaReact />, <SiNextdotjs />, <SiTailwindcss />, <SiMongodb />],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "AMS BATCH PROGRAM",
      description: "Aplikasi manajemen batch untuk proses audit banking dengan fitur scheduling, monitoring, dan reporting.",
      image: "/portofolio/ams-batch.png",
      category: "web",
      technologies: [<SiFlutter />, <FaNodeJs />, <SiExpress />, <FaDatabase />],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Building Management System",
      description: "Sistem manajemen bangunan dengan fitur manajemen proyek, inventaris, dan laporan keuangan.",
      image: "/portofolio/bms.png",
      category: "web",
      technologies: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiTailwindcss />],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "New Trade System Library Component",
      description: "Library component untuk New Trade System dengan fitur CRUD, validation, dan utility functions, Input, Button Dll.",
      image: "/portofolio/nts-lib.png",
      category: "web",
      technologies: [<SiNextdotjs />, <FaReact />, <SiTailwindcss />, <FaDatabase />],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Konectgo Web App",
      description: "Aplikasi web untuk Pemblian Kartu Perdana, Esim, Paket Data Antar Negara",
      image: "/portofolio/konectgo.png",
      category: "web",
      technologies: [<FaReact />, <FaMobile />, <FaNodeJs />, <SiMongodb />],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Konectgo Mobile App",
      description: "Aplikasi mobile untuk Pemblian Kartu Perdana, Esim, Paket Data Antar Negara",
      image: "/portofolio/konectgo-mobile.png",
      category: "mobile",
      technologies: [<SiReact />],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Konectgo Design",
      description: "Aplikasi mobile untuk Pemblian Kartu Perdana, Esim, Paket Data Antar Negara",
      image: "/portofolio/konectgo-mobile.png",
      category: "design",
      technologies: [<SiReact />],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },{
      id: 7,
      title: "Bookly AI Web",
      description: "Web Tempat Dimana User Dapat Bertanya Terkait Isi Buku Dan Di Bacakan Oleh AI Perhalaman",
      image: "/portofolio/bookly-ai.png",
      category: "web",
      technologies: [<SiReact />],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 8,
      title: "Bookly AI Mobile",
      description: "Aplikasi mobile tempat user dapat bertanya terkait isi buku dan di bacakan oleh AI perhalaman",
      image: "/portofolio/bookly-ai.png",
      category: "mobile",
      technologies: [<SiReact />],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 9,
      title: "Manajemen Perpustakaan",
      description: "Aplikasi Web tempat user dapat mengelola perpustakaan, seperti menambah, mengedit, dan menghapus buku, member, dan transaksi.",
      image: "/portofolio/library.png",
      category: "web",
      technologies: [<SiReact />],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 10,
      title: "Lost And Found Indonesia",
      description: "Aplikasi Mobile tempat user dapat melaporkan barang hilang dan mencari barang yang hilang.",
      image: "/portofolio/lost-and-found.jpg",
      category: "mobile",
      technologies: [<SiReact />],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
        {
      id: 11,
      title: "Joblink Disabilitas",
      description: "Aplikasi Mobile tempat user dapat melaporkan barang hilang dan mencari barang yang hilang.",
      image: "/portofolio/joblink.png",
      category: "web",
      technologies: [<SiReact />],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }

  ];

  const filters = [
    { key: "all", label: "Semua Project" },
    { key: "web", label: "Web Development" },
    { key: "mobile", label: "Mobile App" },
    { key: "design", label: "UI/UX Design" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio <span className="text-purple-600">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Berikut adalah beberapa project terbaik yang telah saya kerjakan. 
            Setiap project dibuat dengan dedikasi tinggi dan teknologi terdepan.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/70 text-gray-700 hover:bg-white/90 hover:text-gray-900 border border-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <img src={`${project.image}`} alt="" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex items-center space-x-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="text-blue-400 text-xl">
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-semibold"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-semibold"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-lg">
            Tertarik dengan project saya? Mari diskusikan project Anda selanjutnya!
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Mulai Project Baru
          </button>
        </div>
      </div>
    </section>
  );
}