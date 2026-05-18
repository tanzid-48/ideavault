"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight, Lightbulb, Rocket, TrendingUp } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slidesData = [
  {
    id: 1,
    icon: <Lightbulb className="h-9 w-9 text-amber-400" />,
    iconBg: "bg-amber-400/15 border-amber-400/30",
    tag: "💡 Idea",
    title: "Every Revolution Starts With a Single Idea",
    subtitle:
      "IdeaVault is your personal space to capture raw thoughts before they fade — structure them, timestamp them, and keep them safe until the world is ready.",
    ctaText: "Explore Ideas",
    ctaLink: "/ideas",
    bgImage:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1470&auto=format&fit=crop",
    overlay:
      "bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-amber-950/40",
    accent: "#f59e0b",
  },
  {
    id: 2,
    icon: <TrendingUp className="h-9 w-9 text-emerald-400" />,
    iconBg: "bg-emerald-400/15 border-emerald-400/30",
    tag: "🔬 Innovation",
    title: "Turn Concepts Into Breakthroughs That Matter",
    subtitle:
      "Collaborate with a curated community of thinkers and doers. Refine your innovations, gather expert feedback, and evolve your concept into a real-world solution.",
    ctaText: "Explore Ideas",
    ctaLink: "/ideas",
    bgImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1469&auto=format&fit=crop",
    overlay:
      "bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-emerald-950/40",
    accent: "#10b981",
  },
  {
    id: 3,
    icon: <Rocket className="h-9 w-9 text-indigo-400" />,
    iconBg: "bg-indigo-400/15 border-indigo-400/30",
    tag: "🚀 Startup",
    title: "Build, Launch & Scale Your Dream Startup",
    subtitle:
      "Connect with visionary co-founders, access proven frameworks, and pitch to the right investors. Your next unicorn begins right here on IdeaVault.",
    ctaText: "Explore Ideas",
    ctaLink: "/ideas",
    bgImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop",
    overlay:
      "bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-indigo-950/40",
    accent: "#6366f1",
  },
];

const Banner = () => {
  return (
    <div className="w-full overflow-hidden bg-slate-950 -mt-px">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="w-full"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full min-h-120 md:min-h-135 bg-cover bg-center relative flex flex-col justify-center items-start px-8 sm:px-14 md:px-20 py-16"
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            >
              <div className={`absolute inset-0 ${slide.overlay} z-0`} />
              <div className="relative z-10 flex flex-col items-start max-w-2xl">
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-5 tracking-wide"
                  style={{
                    color: slide.accent,
                    borderColor: slide.accent + "50",
                    background: slide.accent + "15",
                  }}
                >
                  {slide.tag}
                </span>
                <div
                  className={`p-3 rounded-2xl border backdrop-blur-sm mb-5 ${slide.iconBg}`}
                >
                  {slide.icon}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] font-black tracking-tight text-white leading-[1.12] mb-4">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base text-gray-300 font-normal max-w-xl leading-relaxed mb-8">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.ctaLink}
                  className="group inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl transition-all active:scale-95 shadow-lg text-sm"
                  style={{
                    background: slide.accent,
                    boxShadow: `0 6px 24px ${slide.accent}45`,
                  }}
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 24px !important;
          left: 0 !important;
          padding-left: 80px !important;
          text-align: left !important;
        }
        @media (max-width: 768px) {
          .swiper-pagination {
            padding-left: 32px !important;
          }
        }
        .swiper-pagination-bullet-active {
          width: 24px !important;
          border-radius: 4px !important;
          background: #ffffff !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.4 !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Banner;