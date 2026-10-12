"use client";

import { useEffect, useRef, useState } from "react";

const principles = [
  {
    number: "A",
    title: "Small team, senior thinking",
    description:
      "We are a two-person software team that stays close to the work. You get direct access to the people designing, building, and shipping your product.",
    code: `const team = {
  people: 2,
  layers: 0,
  pointOfContact: 'the builders'
}`,
  },
  {
    number: "B",
    title: "Built around your goals",
    description:
      "Every engagement starts with the outcome in mind. We turn a clear idea into a practical product plan, then make thoughtful trade-offs together.",
    code: `const project = await aura.start({
  goal: 'make an idea real',
  approach: 'clear, collaborative',
  scope: 'focused'
})`,
  },
  {
    number: "C",
    title: "Craft that lasts",
    description:
      "We care about the details users feel and the foundations developers depend on: calm interfaces, clean code, and software ready for what comes next.",
    code: `await product.ship({
  experience: 'considered',
  codebase: 'maintainable',
  nextChapter: 'ready'
})

// Built with care`,
  },
];

export function HowItWorksSection() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePrinciple((prev) => (prev + 1) % principles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className="relative overflow-hidden bg-foreground py-24 text-background lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              currentColor 40px,
              currentColor 41px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-350 px-6 lg:px-12">
        <div className="mb-16 max-w-3xl lg:mb-24">
          <span className="mb-6 inline-flex items-center gap-3 font-mono text-sm text-background/50">
            <span className="h-px w-8 bg-background/30" />
            About Aura
          </span>
          <h2
            className={`text-4xl tracking-tight transition-all duration-700 lg:text-6xl ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Two friends.
            <br />
            <span className="text-background/50">One thoughtful way to build.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-background/60">
            Aura Software Innovations is a freelance software team for people
            with ambitious ideas and a preference for doing things properly.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col">
            {principles.map((principle, index) => (
              <button
                key={principle.number}
                type="button"
                onClick={() => setActivePrinciple(index)}
                aria-pressed={activePrinciple === index}
                className={`group w-full border-b border-background/10 py-7 text-left transition-all duration-500 first:border-t ${
                  activePrinciple === index
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-75"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className="pt-1 font-mono text-sm text-background/35">
                    {principle.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl transition-transform duration-300 group-hover:translate-x-1 lg:text-3xl">
                      {principle.title}
                    </h3>
                    <p className="max-w-lg leading-relaxed text-background/60">
                      {principle.description}
                    </p>
                    {activePrinciple === index && (
                      <div className="mt-5 h-px overflow-hidden bg-background/20">
                        <div
                          className="h-full w-0 bg-background"
                          style={{ animation: "progress 5s linear forwards" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="self-start lg:sticky lg:top-32">
            <div className="overflow-hidden border border-background/10 bg-background/[0.02]">
              <div className="flex items-center justify-between border-b border-background/10 px-6 py-4">
                <div className="flex gap-2" aria-hidden="true">
                  <div className="size-3 rounded-full bg-background/20" />
                  <div className="size-3 rounded-full bg-background/20" />
                  <div className="size-3 rounded-full bg-background/20" />
                </div>
                <span className="font-mono text-xs text-background/40">
                  aura.ts
                </span>
              </div>

              <div className="min-h-70 p-6 font-mono text-xs sm:p-8 sm:text-sm">
                <pre className="text-background/70">
                  {principles[activePrinciple].code
                    .split("\n")
                    .map((line, lineIndex) => (
                      <div
                        key={`${activePrinciple}-${lineIndex}`}
                        className="code-line-reveal leading-loose"
                        style={{ animationDelay: `${lineIndex * 80}ms` }}
                      >
                        <span className="inline-block w-8 select-none text-background/20">
                          {lineIndex + 1}
                        </span>
                        <span className="inline-flex">
                          {line.split("").map((char, charIndex) => (
                            <span
                              key={`${activePrinciple}-${lineIndex}-${charIndex}`}
                              className="code-char-reveal"
                              style={{
                                animationDelay: `${lineIndex * 80 + charIndex * 15}ms`,
                              }}
                            >
                              {char === " " ? "\u00A0" : char}
                            </span>
                          ))}
                        </span>
                      </div>
                    ))}
                </pre>
              </div>

              <div className="flex items-center gap-3 border-t border-background/10 px-6 py-4">
                <span className="size-2 animate-pulse rounded-full bg-green-400" />
                <span className="font-mono text-xs text-background/40">
                  Building with intention
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        .code-line-reveal {
          opacity: 0;
          transform: translateX(-8px);
          animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes lineReveal {
          to { opacity: 1; transform: translateX(0); }
        }

        .code-char-reveal {
          opacity: 0;
          filter: blur(8px);
          animation: charReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes charReveal {
          to { opacity: 1; filter: blur(0); }
        }
      `}</style>
    </section>
  );
}
