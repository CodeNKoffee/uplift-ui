import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import CommandPrompt from "./code-blocks/CommandPrompt";

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
        <div className="row text-md sm:text-xl text-white flex flex-col items-center gap-8">
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
          <p
            data-aos={animate && "fade-up"}
            className=" text-md text-white font-regular mt-4 py-2 px-4 rounded-full"
          >
            Focus more on <span className="text-packship-purple-lite font-bold">coding</span> and less on <span className="text-packship-purple-lite font-bold">managing package releases</span>. <span className="text-packship-purple-lite font-bold">Packship</span> makes <span className="text-packship-purple-lite font-bold">shipping npm packages</span> easier and faster.
          </p>
          {terminalCommand && <CommandPrompt data-aos={animate && "fade-up"} command={terminalCommand} />}
          <span className="text-sm text-white">Early bird special: <span className="text-green-400 font-bold">91% off</span></span>
          <button 
            type="button" 
            data-aos={animate && "fade-up"}
          >
            <Link
              href="#start-packshipping"
              className="bg-packship-purple hover:bg-purple-700 rounded-full text-lg lg:text-2xl text-framify-grey px-8 py-4 font-bold mt-24 transition ease-in-out"
            >
              {ctaButton.text}
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}