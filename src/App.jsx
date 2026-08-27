import { useState } from 'react';
import './app.css';

export default function App() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copyFeedback, setCopyFeedback] = useState(false);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleShorten = () => {
    const trimmedUrl = url.trim();

    if (!trimmedUrl) return;

    if (!isValidUrl(trimmedUrl) && !trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
      setError(true);
      return;
    }

    setError(false);
    setLoading(true);

    // Simula delay do servidor
    setTimeout(() => {
      setResult({
        shortened: 'lynx.sh/xK92',
        original: trimmedUrl,
      });
      setLoading(false);
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`lynx.sh/${result.shortened.split('/')[1]}`);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  const handleReset = () => {
    setResult(null);
    setUrl('');
    setError(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleShorten();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 md:px-12 bg-background dark:bg-background text-on-background antialiased selection:bg-primary-container selection:text-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container rounded-full opacity-[0.03] blur-[120px] pointer-events-none z-0"></div>

      <main className="w-full max-w-[640px] z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-container text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>link</span>
          <span className="font-headline-lg text-headline-lg font-bold tracking-tight">Lynx</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="font-display-lg text-display-lg font-bold text-on-surface">Encurte seus links.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[480px] mx-auto">
            Simples, rápido e direto ao ponto.
          </p>
        </div>

        {/* Main Interaction Area */}
        <div className="w-full space-y-6">
          {!result ? (
            <>
              {/* Input */}
              <div className={`glass-card rounded-xl p-2 transition-all duration-300 hover:border-[#333333] input-focus-ring flex flex-col sm:flex-row gap-2 relative ${error ? 'border-error' : ''}`}>
                <div className="flex-1 flex items-center px-4 gap-3 bg-[#121212] rounded-lg">
                  <span className="material-symbols-outlined text-on-surface-variant">link</span>
                  <input
                    autoComplete="off"
                    className="w-full bg-transparent border-none text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant focus:ring-0 p-0 h-12"
                    placeholder="Cole seu longo link aqui..."
                    spellCheck="false"
                    type="url"
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                      if (error) setError(false);
                    }}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <button
                  onClick={handleShorten}
                  disabled={loading}
                  className="bg-primary-container text-background font-label-md text-label-md font-bold px-8 py-3 rounded-lg hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 whitespace-nowrap sm:h-12 h-14 w-full sm:w-auto disabled:opacity-70"
                >
                  {loading ? (
                    <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                  ) : (
                    <>
                      <span>Encurtar link</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 text-error font-label-sm text-label-sm px-4">
                  <span className="material-symbols-outlined text-[16px]">error</span>
                  <span>Por favor, insira uma URL válida. (ex: https://exemplo.com)</span>
                </div>
              )}
            </>
          ) : (
            /* Result Card */
            <div className="glass-card rounded-xl p-6 transition-all duration-300 opacity-100 translate-y-0 flex flex-col gap-4 relative overflow-hidden animate-in">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
              
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase tracking-wider">
                    Seu link encurtado
                  </p>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary-container hover:underline decoration-primary-container/30 underline-offset-4 transition-all"
                  >
                    {result.shortened}
                  </a>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-2 truncate max-w-[280px] sm:max-w-[400px] opacity-70">
                    Origem: {result.original}
                  </p>
                </div>
                <button aria-label="QR Code" className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant text-on-surface hover:border-on-surface transition-colors flex items-center justify-center">
                  <span className="material-symbols-outlined">qr_code_2</span>
                </button>
              </div>

              <div className="mt-2 pt-4 border-t border-outline-variant/30 flex justify-end gap-3">
                <button
                  onClick={handleReset}
                  className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors px-4 py-2"
                >
                  Encurtar outro
                </button>
                <button
                  onClick={handleCopy}
                  className={`bg-surface-container-high border text-on-surface font-label-md text-label-md px-6 py-2 rounded-lg hover:border-primary-container hover:text-primary-container transition-colors flex items-center gap-2 ${
                    copyFeedback ? 'border-primary-container text-primary-container success-flash' : 'border-outline-variant'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {copyFeedback ? 'check' : 'content_copy'}
                  </span>
                  <span>{copyFeedback ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full py-12 border-t border-[#262626] bg-background dark:bg-background z-10 flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-4 md:px-12 opacity-80 hover:opacity-100 transition-opacity">
        <div className="font-label-sm text-label-sm text-on-secondary-container mb-4 md:mb-0">
          © 2024 Lynx Shortener. Precision in every pixel.
        </div>
        <nav className="flex gap-6">
          <a className="font-label-sm text-label-sm text-on-secondary-container hover:text-on-surface transition-colors" href="#">Terms</a>
          <a className="font-label-sm text-label-sm text-on-secondary-container hover:text-on-surface transition-colors" href="#">Privacy</a>
          <a className="font-label-sm text-label-sm text-on-secondary-container hover:text-on-surface transition-colors" href="#">Status</a>
        </nav>
      </footer>
    </div>
  );
}