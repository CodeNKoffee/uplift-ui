import React, { lazy, Suspense } from "react";

const Navigation = lazy(() => import("./esstentials/Navigation"));
const Hero = lazy(() => import("./Hero"));
const Features = lazy(() => import("./extras/Features"));
const CommandPrompt = lazy(() => import("./code-blocks/CommandPrompt"));
const CopyCodeSnippet = lazy(() => import("./code-blocks/CopyCodeSnippet"));
const Footer = lazy(() => import("./esstentials/Footer"));

export {
  Navigation,
  Hero,
  Features,
  CommandPrompt,
  CopyCodeSnippet,
  Footer,
};