import React, { useCallback, useEffect } from "react";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copy from 'copy-to-clipboard';
import AOS from "aos";
import "aos/dist/aos.css";

export interface CopyCodeSnippetProps {
  code: string;
  language: string;
  buttonText?: string;
  buttonColor: string;
  buttonTextColor: string;
  animate?: boolean;
}

export default function CopyCodeSnippet({ code, language, buttonText = "Copy Code", buttonColor, buttonTextColor, animate }: CopyCodeSnippetProps) {
  
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      offset: 200,
      easing: 'ease-out',
    });
  }, []);

  const copyCodeToClipboard = useCallback(() => {
    copy(code);
  }, [code]);

  return (
    <div
      data-aos={animate && "fade-up"}
      className="bg-[#1E1E1E] p-2 rounded-lg w-full flex flex-col sm:flex-row justify-between gap-4"
    >
      <SyntaxHighlighter language={language} style={vs2015}>
        {code}
      </SyntaxHighlighter>
      <button 
        className={`${buttonColor} ${buttonTextColor} px-4 py-2 font-bold text-sm rounded-full hover:bg-purple-700 transition`} 
        onClick={copyCodeToClipboard}
      >
        {buttonText}
      </button>
    </div>
  );
}