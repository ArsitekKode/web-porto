"use client";

import { Button } from "@/components/ui/button";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/skills";
import { Phone, Mail, MapPin } from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Selamat datang di
            <span className="block mt-2">
              <span style={{ color: "#F2F2F2" }}>Arsitek </span>
              <span style={{ color: "#74AEB1" }}>Kode</span>
            </span>
          </h1>
          <p className="text-gray-400 mb-8">Kami membangun solusi digital yang efisien, modern, dan sesuai kebutuhan bisnis Anda — mulai dari website, aplikasi, hingga sistem informasi.</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-black transition-all duration-300">
              <a href="https://wa.me/6282169702020?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda%20di%20Arsitek%20Kode" target="_blank" rel="noopener noreferrer">
                Hubungi Kami
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <Projects />
        <TechStack />
        {/* <Testimonials /> */}

        {/* Contact Section */}
        <section className="py-16" id="contact">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Let's Get In Touch</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Punya ide proyek atau ingin berkolaborasi? Kami siap membantu membangun solusi digital terbaik untuk Anda.</p>
            </div>
            <div className="flex justify-center mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-black transition-all duration-300 w-full md:w-auto px-16">
                <a href="https://wa.me/6282169702020?text=Halo%20saya%20tertarik%20dengan%20jasa%20Anda%20di%20Arsitek%20Kode" target="_blank" rel="noopener noreferrer">
                  Let's Get in Touch
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 justify-center">
              {/* Info Kontak */}
              <div className="flex items-center gap-4 mb-6 lg:mb-0">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">+62 821-6970-2020</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 lg:mb-0">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">arsitek.kode@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 lg:mb-0">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-400">Jl. Cibatu VI no. 38 Antapani, Kota Bandung, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span style={{ color: "#F2F2F2" }}>Arsitek</span> <span style={{ color: "#74AEB1" }}>Kode</span>
              </h3>
              <p className="text-gray-400">Software House berbasis di Indonesia yang fokus pada pengembangan website dan aplikasi dengan performa tinggi dan tampilan profesional.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Blog</li>
                <li>Kontak</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile App Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li>arsitek.kode@gmail.com</li>
                <li>+62 821-6970-2020</li>
                <li> Jl. Cibatu VI no. 38 Antapani, Kota Bandung, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Arsitek Kode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
