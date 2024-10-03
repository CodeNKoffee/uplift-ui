import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface SectionHeaderProps {
  header: string;
  color: string;
}

export default function SectionHeader({ header, color }: SectionHeaderProps) {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200,
      easing: 'ease-out',
    });
  }, []);

  return (
    <h3 
      data-aos="fade-up"
      className={`text-2xl font-bold text-${color}`}
    >
      {header}
    </h3>
  );
}