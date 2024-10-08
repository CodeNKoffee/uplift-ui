import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

// Define prop types for KeyFeature component
interface KeyFeatureProps {
  title: string;
  textColor: string;
  bulletColor: string;
}

export default function KeyFeature({ title, textColor, bulletColor }: KeyFeatureProps) {
  return (
    <div className="font-regular flex justify-between items-center gap-2">
      <FontAwesomeIcon icon={faCheck} color={bulletColor} className={`text-${textColor}`} />
      <span className={`text-${textColor} text-lg`}>{title}</span>
    </div>
  );
}