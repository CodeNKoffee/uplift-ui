declare module 'Navigation' {
  const Navigation: React.ComponentType<any>;
  export default Navigation;
}

declare module 'Hero' {
  const Hero: React.ComponentType<any>;
  export default Hero;
}

declare module 'Features' {
  const Features: React.ComponentType<any>;
  export default Features;
}

declare module 'CommandPrompt' {
  const CommandPrompt: React.ComponentType<any>;
  export default CommandPrompt;
}

declare module 'CopyCodeSnippet' {
  const CopyCodeSnippet: React.ComponentType<any>;
  export default CopyCodeSnippet;
}

declare module 'Footer' {
  const Footer: React.ComponentType<any>;
  export default Footer;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}