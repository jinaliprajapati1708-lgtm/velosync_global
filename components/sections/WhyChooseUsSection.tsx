import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";
import {
  ShieldIcon,
  SparkleIcon,
  UsersIcon,
  LayersIcon,
  TargetIcon,
  ZapIcon,
} from "../ui/Icons";

const features = [
  {
    icon: <TargetIcon size={24} />,
    title: "Australian Lead Focus",
    description:
      "Engineered to capture and convert high-value leads across Australian markets with localized strategies.",
  },
  {
    icon: <UsersIcon size={24} />,
    title: "Dedicated Cross-Functional Team",
    description:
      "Direct access to senior developers, UI designers, QA specialists, and dedicated project managers.",
  },
  {
    icon: <ZapIcon size={24} />,
    title: "Agile Rapid Delivery",
    description:
      "Iterative 2-week sprint delivery cycles with total transparency and continuous deployment updates.",
  },
  {
    icon: <SparkleIcon size={24} />,
    title: "AI & Business Automation",
    description:
      "Cutting-edge AI automation models to streamline manual business processes and cut operational costs.",
  },
  {
    icon: <ShieldIcon size={24} />,
    title: "Strict Security & NDA",
    description:
      "100% data protection, enterprise confidentiality agreements, and secure cloud infrastructure.",
  },
  {
    icon: <LayersIcon size={24} />,
    title: "End-to-End SLA Support",
    description:
      "From technical consultation to post-launch maintenance, bug fixes, and continuous feature scaling.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="section-padding relative"
      style={{ background: "var(--background-color)" }}
      aria-labelledby="why-choose-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="The Soniez Infotech Engineering Advantage"
              description="We combine deep technical capabilities, strategic business insights, and modern UX standards to deliver high-performing software that transforms business operations."
              align="left"
              maxWidth="none"
              className="mb-8"
            />

            <div className="p-8 rounded-3xl border bg-gradient-to-br from-[#0B1B3D] via-[#1E3A8A] to-[#0F172A] text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-4">
                  CLIENT GUARANTEE
                </span>
                <h4 className="text-xl font-bold mb-2">
                  High-Impact Digital Partner
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Every project at Soniez Infotech is backed by strict quality assurance, transparent communication, and dedicated ongoing support.
                </p>
                <div className="flex items-center gap-6 pt-4 border-t border-slate-700/60 text-xs">
                  <div>
                    <span className="block text-2xl font-extrabold text-cyan-400">
                      100%
                    </span>
                    <span className="text-slate-400">On-Time Sprint Record</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold text-cyan-400">
                      24/7
                    </span>
                    <span className="text-slate-400">Expert Technical Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                number={String(index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
