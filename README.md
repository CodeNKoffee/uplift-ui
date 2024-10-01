# UpliftUI

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CodeNKoffee)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/h4temsoliman)
[![Twitter Badge](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/h4temsoliman)
[![Website Badge](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://hatemsoliman.dev)

## Introduction

**Uplift UI** is a React component library offering customizable elements for landing pages, such as Hero sections, Features, and Footers. It empowers developers to build responsive, modern designs effortlessly, while maintaining flexibility and brand uniqueness.

## Supported React.js

This package supports React.js `18.2.0` and above.

## Installation

To install upliftui, simply run:

```bash
npm install upliftui
```

Or with Yarn:

```bash
yarn add upliftui
```

## Usage

### Navigation

To use the `Navigation` component from UpliftUI, first import it into your React project:

```tsx
import { Navigation } from 'upliftui';
```

Then, you can use it in your component like so:

```tsx
const App = () => {
  const navLinks = [
    { name: "Home", href: "/", isSpecial: false },
    { name: "About", href: "/about", isSpecial: false },
    { name: "Services", href: "/services", isSpecial: true, specialColor: "blue-500" },
    { name: "Contact", href: "/contact", isSpecial: false },
  ];

  const logo = {
    src: "/path/to/logo.png",
    alt: "Logo Alt Text",
  };

  return (
    <div>
      <Navigation
        navLinks={navLinks}
        logo={logo}
        logoSize="w-20 h-20" // Optional: Adjust logo size
        defaultColor="text-gray-800"
        hoverColor="text-blue-500"
      />
      {/* Other components */}
    </div>
  );
};
```

---

### Footer

To use the `Footer` component from UpliftUI, first import it into your React project:

```tsx
import { Footer } from 'upliftui';
```

Then, you can use it in your component like so:

```tsx
import React from 'react';
import { Footer } from 'upliftui';

const App = () => {
  const footerLinks = [
    {
      title: "Docs",
      links: [
        { 
          name: "Develop", 
          href: "/docs", 
        },
      ],
    },
    {
      title: "Community",
      links: [
        { 
          name: "Feedback", 
          href: "mailto:packshipcli@gmail.com", 
        },
        { 
          name: "LinkedIn", 
          href: "https://linkedin.com/in/h4temsoliman", 
        },
        { 
          name: "GitHub", 
          href: "https://github.com/codenkoffee", 
        },
        { 
          name: "X", 
          href: "https://x.com/h4temsoliman", 
        },
        { 
          name: "Portfolio", 
          href: "https://hatemsoliman.dev", 
        },
      ],
    },
    {
      title: "More",
      links: [
        { 
          name: "Purchase", 
          href: "#start-packshipping",
        },
        { 
          name: "Contact", 
          href: "mailto:packshipcli@gmail.com",
        },
        { 
          name: "Fund Me", 
          href: "https://paypal.me/h4temsoliman?country.x=EG&locale.x=en_US",
        },
      ],
    },
  ];

  return (
    <div>
      <Footer
        footerLinks={footerLinks}
        brandName="Uplift UI"
        defaultColor="text-blue-500"
        footerLogo="/path/to/logo.png"
      />
    </div>
  );
};

export default App;
```

This example demonstrates how to integrate the `Footer` component from UpliftUI into your application, providing a customizable footer for your website.

## Features

- Light and dark themes
- Versatile and customizable components
- Support for different types of content

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute to the UpliftUI project.

## License

This project is licensed under the GPL-3.0 license.
