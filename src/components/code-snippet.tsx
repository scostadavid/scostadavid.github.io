import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import { FiCopy, FiCheck } from "react-icons/fi"; // Ícones de exemplo (lucide-react ou outros)

const CodeSnippet = ({ code, language }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reseta o estado após 2 segundos
  };

  return (
    <div className="relative bg-gray-900 text-white rounded-lg overflow-hidden">
      <div className="absolute top-2 right-2">
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition"
            aria-label="Copy code"
          >
            {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
          </button>
        </CopyToClipboard>
      </div>
      <pre className={`language-${language} p-4`}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
