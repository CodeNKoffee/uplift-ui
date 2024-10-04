import React, { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const CommandPrompt = lazy(() => import("./code-blocks/CommandPrompt"));

interface Highlight {
  text: string;
  color?: string;
}

interface HeaderOneProps {
  text: string;
  color: string;
}

interface CTAButtonProps {
  text: string;
  link: string;
  backgroundColor: string;
  textColor: string;
}

interface HeroProps {
  headerOne?: HeaderOneProps;
  headerTwo: Highlight[];
  ctaButton: CTAButtonProps;
  defaultColor: string;
  terminalCommand?: string;
  animate?: boolean;
}

export default function Hero({ headerOne, headerTwo, ctaButton, defaultColor, terminalCommand, animate }: HeroProps) {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200,
      easing: 'ease-out',
    });
  }, []);

  const renderHighlightedText = (highlight: Highlight) => (
    <span style={{ color: highlight.color || defaultColor }}>{highlight.text}</span>
  );

  return (
    <section className="mt-24">
      <div className="kontainer text-center">
        <div className="row text-md sm:text-xl flex flex-col items-center gap-8">
          {headerOne && (
            <h1 
              data-aos={animate && "fade-up"}
              className={`text-2xl text-${headerOne.color} font-bold`}
            >
              {headerOne.text}
            </h1>
          )}
          <h2 
            data-aos={animate && "fade-up"}
            className={`text-6xl font-black sm:text-8xl leading-relaxed ${defaultColor}`}
          >
            {headerTwo.map((highlight, index) => (
              <React.Fragment key={index}>
                {renderHighlightedText(highlight)}
              </React.Fragment>
            ))}
          </h2>
          {terminalCommand && (
            <Suspense fallback={<div>Loading...</div>}>
              <CommandPrompt command={terminalCommand} />
            </Suspense>
          )}
          <button 
            type="button" 
            data-aos={animate && "fade-up"}
          >
            <Link
              href={ctaButton.link}
              className={`${ctaButton.backgroundColor} ${ctaButton.textColor} rounded-full text-lg lg:text-2xl px-8 py-4 font-bold mt-24 transition ease-in-out`}
            >
              {ctaButton.text}
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}