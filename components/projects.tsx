"use client";
import Image from "next/image";
import { useState } from "react";
import { CardWrapper } from "./ui/card-wrapper";
import { Button } from "./ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  images: string[]; // ubah jadi array
  demoLink: string;
  githubLink: string;
}

function ProjectCard({ title, description, images, demoLink, githubLink }: ProjectProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <CardWrapper className="overflow-hidden group">
      <div className="relative h-48 mb-4">
        <Image src={images[currentIndex]} alt={title} fill className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full hover:bg-black/70">
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full hover:bg-black/70">
              <ChevronRight size={20} className="text-white" />
            </button>
          </>
        )}
      </div>
      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex gap-4">
        {demoLink && (
          <Button variant="outline" size="sm" asChild className="text-primary border-primary hover:bg-primary hover:text-white">
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink size={16} />
            </a>
          </Button>
        )}

        {/* <Button variant="outline" size="sm" asChild className="text-primary border-primary hover:bg-primary hover:text-white">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} /> Code
          </a>
        </Button> */}
      </div>
    </CardWrapper>
  );
}

// Example Projects
export function Projects() {
  const projects = [
    {
      title: "Heiwa Program",
      description:
        "Website Portal Berita untuk Program Studi Jepang, Fakultas Bahasa Jepang, Universitas Widyatama. Website ini menyediakan konten dalam dua bahasa, yaitu Jepang dan Bahasa Indonesia. Dilengkapi dengan CMS yang dikembangkan khusus untuk admin, memungkinkan pengelolaan berita yang mudah dan efisien.",
      images: ["/heiwa/Heiwa1.png", "/heiwa/Heiwa2.png", "/heiwa/Heiwa3.png", "/heiwa/Heiwa4.png"],
      demoLink: "https://heiwaprogram.widyatama.ac.id/",
      githubLink: "#",
    },
    {
      title: "Arsip Lab Teknik Elektro",
      description:
        "Sistem manajemen arsip untuk Laboratorium Teknik Elektro. Website ini dirancang untuk memudahkan pengarsipan, pencarian, dan pengelolaan dokumen praktikum. Dilengkapi dengan fitur unggah file, filter data, dan antarmuka admin yang intuitif untuk efisiensi operasional.",
      images: ["/arsiplab/arsiplab1.jpg", "/arsiplab/arsiplab2.jpg", "/arsiplab/arsiplab3.jpg", "/arsiplab/arsiplab4.jpg"],
      demoLink: "",
      githubLink: "#",
    },
  ];

  return (
    <section className="py-16" id="works">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Explore my latest web development projects. Each project shows clean UI, responsiveness, and functionality.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
