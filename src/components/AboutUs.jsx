import React from "react";
import {
  Sparkles,
  GraduationCap,
  HeartHandshake,
  Target,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Discover",
    text: "Find every Technical, Cultural, Sports and Workshop event happening on campus — all in one place.",
  },
  {
    icon: GraduationCap,
    title: "Learn",
    text: "Workshops, masterclasses and hands-on sessions curated to help students grow beyond the classroom.",
  },
  {
    icon: HeartHandshake,
    title: "Connect",
    text: "Meet students who share your passion. Build friendships, teams, and lasting communities.",
  },
  {
    icon: Target,
    title: "Achieve",
    text: "Track your registrations, attendance and certificates — all in your personal dashboard.",
  },
];

const AboutUs = () => {
  return (
    <div className="mx-auto max-w-5xl py-2" data-testid="about-page">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm md:p-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-[#ede9fe] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#6b4de0]">
            About College Events
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1e1b4b] md:text-4xl">
            Your campus, beautifully organized.
          </h2>

          <p className="mt-3 text-base leading-relaxed text-gray-600">
            College Events is a friendly hub where students can discover,
            register for, and track every event on campus — from hackathons and
            cultural nights to workshops and sports tournaments.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-[#f5f3ff] p-5"
              data-testid={"about-feature-" + title.toLowerCase()}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <Icon
                  className="h-5 w-5 text-[#7c5cff]"
                  strokeWidth={2.2}
                />
              </div>

              <h3 className="mt-3 text-lg font-bold text-[#1e1b4b]">
                {title}
              </h3>

              <p className="mt-1 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;