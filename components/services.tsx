import type React from "react";
import { Code, MonitorSmartphone, Server } from "lucide-react";
import { CardWrapper } from "./ui/card-wrapper";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceProps) {
  return (
    <CardWrapper className="hover:border-primary/40 transition-colors">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </CardWrapper>
  );
}

export function Services() {
  return (
    <section className="py-16" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Kami membangun solusi digital yang responsif, efisien, dan scalable untuk kebutuhan bisnis modern.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard icon={<Code size={24} />} title="Web Application Development" description="Kami mengembangkan website dan aplikasi web yang responsif, cepat, dan menggunakan clean code untuk memudahkan maintenance dan scaling." />
        <ServiceCard icon={<MonitorSmartphone size={24} />} title="Frontend & UI Design" description="Mendesain antarmuka modern yang user-friendly, mobile-first, dan fokus pada pengalaman pengguna yang mulus di semua perangkat." />
        <ServiceCard icon={<Server size={24} />} title="Backend & API Development" description="Membangun arsitektur backend yang aman, terstruktur, dan scalable, lengkap dengan RESTful API untuk integrasi sistem yang solid." />
      </div>
    </section>
  );
}
