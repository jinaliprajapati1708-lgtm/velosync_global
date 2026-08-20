import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { RocketIcon, EyeIcon, TargetIcon, CheckCircleIcon } from "@/components/ui/Icons";

export default function CompanyMissionSection() {
  const pillars = [
    {
      title: "Our Mission",
      description:
        "To liberate businesses from manual administrative bottlenecks by building high-performing custom software, intelligent CRMs, and automated workflow ecosystems.",
      icon: <RocketIcon size={28} />,
      accentColor: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-500",
    },
    {
      title: "Our Vision",
      description:
        "To become a globally recognized IT solutions leader and trusted digital transformation partner for Australian SMEs and international organizations.",
      icon: <EyeIcon size={28} />,
      accentColor: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-500",
    },
    {
      title: "Our Core Focus",
      description:
        "Solving high-value operational challenges through domain-specific software engineering, strict data privacy compliance, and continuous ROI delivery.",
      icon: <TargetIcon size={28} />,
      accentColor: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-500",
    },
  ];

  return (
    <section className="section-padding bg-slate-50 dark:bg-[#060e24]/70 relative">
      <div className="container">
        <SectionHeading
          badge="Mission & Strategic Vision"
          title="Driven by Innovation, Dedicated to Business Growth"
          subtitle="At Soniez Infotech, we don't just write code—we re-engineer business operations to achieve unprecedented speed, accuracy, and profitability."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accentColor} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                <CheckCircleIcon size={16} />
                <span>Soniez Infotech Pillar</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
