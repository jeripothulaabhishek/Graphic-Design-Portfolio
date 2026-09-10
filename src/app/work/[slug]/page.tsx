import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Folder } from "lucide-react";
import { PORTFOLIO_CATEGORIES, ProjectItem } from "@/data/projects";
import Navbar from "@/components/navigation/Navbar";
import ContactFooter from "@/components/portfolio/ContactFooter";

export async function generateStaticParams() {
  const allProjects: { slug: string }[] = [];
  PORTFOLIO_CATEGORIES.forEach((cat) => {
    cat.projects.forEach((proj) => {
      if (proj.slug) {
        allProjects.push({ slug: proj.slug });
      }
    });
  });
  return allProjects;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  let targetProject: ProjectItem | undefined;
  let allProjectsList: ProjectItem[] = [];

  PORTFOLIO_CATEGORIES.forEach((cat) => {
    cat.projects.forEach((p) => {
      allProjectsList.push(p);
      if (p.slug === slug || p.id === slug) {
        targetProject = p;
      }
    });
  });

  if (!targetProject) {
    notFound();
  }

  const project = targetProject;

  // Find next project
  const currentIndex = allProjectsList.findIndex((p) => p.slug === slug || p.id === slug);
  const nextProject = allProjectsList[(currentIndex + 1) % allProjectsList.length];

  return (
    <main className="min-h-screen bg-[#F7F7F3] text-[#111111]">
      <Navbar />

      {/* TOP HERO CONTAINER */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-[#E5E5E0]">
        
        {/* Back Link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono-meta text-xs font-bold text-[#707070] hover:text-[#111111] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO PORTFOLIO</span>
        </Link>

        {/* Category & Title */}
        <div className="flex flex-col items-start max-w-4xl mb-8">
          <span className="font-mono-meta text-xs font-bold text-[#FFB800] uppercase tracking-widest px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-4">
            {project.category} • {project.year}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[#111111] leading-none mb-6">
            {project.title}
          </h1>
          <p className="text-[#707070] text-lg sm:text-xl leading-relaxed">
            {project.subtitle || project.description}
          </p>
        </div>

        {/* LARGE PROJECT HERO IMAGE */}
        <div className="relative h-[360px] sm:h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden bg-[#111111] border border-[#E5E5E0] shadow-studio">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

      </section>

      {/* BODY CONTENT GRID: STICKY SIDEBAR + EDITORIAL NARRATIVE */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: STICKY METADATA SIDEBAR */}
          <div className="lg:col-span-4 sticky top-28 bg-white border border-[#E5E5E0] rounded-3xl p-8 shadow-card flex flex-col gap-6">
            <h3 className="font-mono-meta text-xs font-bold text-[#111111] uppercase tracking-widest border-b border-[#E5E5E0] pb-4">
              PROJECT METADATA
            </h3>

            <div>
              <span className="font-mono-meta text-[11px] text-[#707070] uppercase block">CLIENT</span>
              <span className="font-display text-base font-bold text-[#111111]">{project.client || "Creative Project"}</span>
            </div>

            <div>
              <span className="font-mono-meta text-[11px] text-[#707070] uppercase block">ROLE</span>
              <span className="font-display text-base font-bold text-[#111111]">{project.role}</span>
            </div>

            <div>
              <span className="font-mono-meta text-[11px] text-[#707070] uppercase block">YEAR</span>
              <span className="font-display text-base font-bold text-[#111111]">{project.year}</span>
            </div>

            <div>
              <span className="font-mono-meta text-[11px] text-[#707070] uppercase block mb-2">DELIVERABLES</span>
              <div className="flex flex-wrap gap-1.5">
                {project.deliverables.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-[#F7F7F3] border border-[#E5E5E0] text-xs font-mono-meta text-[#111111]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-[#FFB800] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors text-center py-3.5 rounded-xl font-display font-bold text-xs flex items-center justify-center gap-2"
              >
                <span>VIEW LIVE ON BEHANCE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* RIGHT: NARRATIVE & HIGH-RES GALLERY */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* OVERVIEW */}
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-8 shadow-xs">
              <span className="font-mono-meta text-xs font-bold text-[#FFB800] uppercase tracking-wider block mb-2">
                01 / OVERVIEW
              </span>
              <h2 className="font-display text-2xl font-bold text-[#111111] mb-4">
                THE OBJECTIVE & VISION
              </h2>
              <p className="text-[#707070] text-base leading-relaxed">
                {project.content?.overview || project.description}
              </p>
            </div>

            {/* CHALLENGE & SOLUTION */}
            {project.content && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-[#E5E5E0] rounded-3xl p-8 shadow-xs">
                  <span className="font-mono-meta text-xs font-bold text-[#FF6B35] uppercase tracking-wider block mb-2">
                    02 / THE CHALLENGE
                  </span>
                  <p className="text-[#707070] text-sm leading-relaxed">
                    {project.content.challenge}
                  </p>
                </div>

                <div className="bg-white border border-[#E5E5E0] rounded-3xl p-8 shadow-xs">
                  <span className="font-mono-meta text-xs font-bold text-[#19C8D8] uppercase tracking-wider block mb-2">
                    03 / THE SOLUTION
                  </span>
                  <p className="text-[#707070] text-sm leading-relaxed">
                    {project.content.solution}
                  </p>
                </div>
              </div>
            )}

            {/* HIGH-RES GALLERY IMAGES */}
            {project.content?.gallery && project.content.gallery.length > 0 && (
              <div className="flex flex-col gap-8">
                <span className="font-mono-meta text-xs font-bold text-[#111111] uppercase tracking-widest">
                  PROJECT GALLERY & MOCKUPS
                </span>
                {project.content.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative h-[380px] sm:h-[500px] w-full rounded-3xl overflow-hidden bg-[#111111] border border-[#E5E5E0] shadow-card"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${project.title} gallery image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* NEXT PROJECT TRIGGER */}
            <div className="pt-12 border-t border-[#E5E5E0]">
              <span className="font-mono-meta text-xs text-[#707070] uppercase block mb-3">
                UP NEXT
              </span>
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex items-center justify-between bg-white border border-[#E5E5E0] hover:border-[#111111] rounded-3xl p-8 shadow-card transition-all duration-300"
              >
                <div>
                  <span className="font-mono-meta text-xs text-[#FFB800] uppercase font-bold">
                    {nextProject.category}
                  </span>
                  <h3 className="font-display text-3xl font-extrabold text-[#111111] group-hover:text-[#FFB800] transition-colors">
                    {nextProject.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#111111] text-white group-hover:bg-[#FFB800] group-hover:text-[#111111] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <ContactFooter />
    </main>
  );
}
