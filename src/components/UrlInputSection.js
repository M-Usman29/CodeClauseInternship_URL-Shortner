import React, { useState } from 'react';

export default function UrlInputSection() {
  const [inputUrl, setInputUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleUrlChange = (event) => {
    setInputUrl(event.target.value);
  };

  const handleShortenClick = () => {
    // Here, you can implement the logic to shorten the URL
    // For demonstration purposes, let's just set a placeholder shortened URL
    const placeholderShortenedUrl = 'https://short.ly/abcd123';
    setShortenedUrl(placeholderShortenedUrl);
  };

  const handleCopyClick = () => {
    // Copy the shortened URL to clipboard
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center mb-4">
        <h4 className="h2 mb-0">Paste URL Here:</h4>
      </div>
      <input
        type="text"
        value={inputUrl}
        onChange={handleUrlChange}
        placeholder="Enter URL"
        className="form-control form-control-lg mb-3"
        style={{ maxWidth: '500px' }}
      />
      <button onClick={handleShortenClick} className="btn btn-primary btn-lg">
        Shorten URL
      </button>

      {shortenedUrl && (
        <div className="mt-4 text-center">
          <h4 className="h2 mb-3">Shortened URL:</h4>
          <input
            type="text"
            value={shortenedUrl}
            readOnly
            className="form-control form-control-lg mb-2"
          />
          <button
            onClick={handleCopyClick}
            className="btn btn-success btn-lg"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
    </div>
  );
}