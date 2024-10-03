import React from "react";

interface SectionHeaderProps {
  header: string;
  color: string;
}

export default function SectionHeader({ header, color }: SectionHeaderProps) {
  return (
    <h3 className={`text-2xl font-bold text-${color}`}>
      {header}
    </h3>
  );
}