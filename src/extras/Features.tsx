import React from "react";
import "aos/dist/aos.css";
import KeyFeature from "../internal/KeyFeature";
import SectionHeader from "../internal/SectionHeader";

// Define prop types for Features component
interface Feature {
  title: string;
}

interface FeaturesProps {
  featuresList: Feature[];
  bulletColor: string;
  defaultColor: string;
  sectionHeader: string;
  sectionHeaderColor: string;
  animate?: boolean;
}

export default function Features({ featuresList, bulletColor, defaultColor, sectionHeader, sectionHeaderColor, animate }: FeaturesProps) {
  return (
    <section
      data-aos={animate && "fade-up"}
      className="mt-24"
    >
      <div className="kontainer text-center">
        <div className="row text-md sm:text-xl text-white flex flex-col items-center gap-8">
          <SectionHeader header={sectionHeader} color={sectionHeaderColor} />
          <div className="w-full flex justify-center sm:justify-between items-center flex-wrap">
            {featuresList.map((feature, index) => (
              <KeyFeature
                key={index}
                title={feature.title}
                textColor={defaultColor}
                bulletColor={bulletColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}