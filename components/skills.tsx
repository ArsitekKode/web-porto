interface TechStackProps {
  name: string;
  iconUrl: string;
}

function TechStackItem({ name, iconUrl }: TechStackProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-card border border-muted rounded-xl text-white">
      <img src={iconUrl} alt={name} className="w-10 h-10" />
      <span className="text-sm text-center">{name}</span>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="py-16" id="techstack">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Teknologi yang kami gunakan untuk membangun solusi digital yang scalable dan modern.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <TechStackItem name="React.js" iconUrl="https://cdn.simpleicons.org/react/61DAFB" />
        <TechStackItem name="Next.js" iconUrl="https://cdn.simpleicons.org/nextdotjs/FFFFFF" />
        <TechStackItem name="Node.js" iconUrl="https://cdn.simpleicons.org/nodedotjs/339933" />
        <TechStackItem name="Express.js" iconUrl="https://cdn.simpleicons.org/express/FFFFFF" />
        <TechStackItem name="Tailwind CSS" iconUrl="https://cdn.simpleicons.org/tailwindcss/06B6D4" />
        <TechStackItem name="PostgreSQL" iconUrl="https://cdn.simpleicons.org/postgresql/4169E1" />
        <TechStackItem name="MySQL" iconUrl="https://cdn.simpleicons.org/mysql/4479A1" />
        <TechStackItem name="Laravel" iconUrl="https://cdn.simpleicons.org/laravel/FF2D20" />
        <TechStackItem name="Bootstrap" iconUrl="https://cdn.simpleicons.org/bootstrap/7952B3" />
        <TechStackItem name="Vite" iconUrl="https://cdn.simpleicons.org/vite/646CFF" />
        <TechStackItem name="TypeScript" iconUrl="https://cdn.simpleicons.org/typescript/3178C6" />
        <TechStackItem name="JavaScript" iconUrl="https://cdn.simpleicons.org/javascript/F7DF1E" />
      </div>
    </section>
  );
}
