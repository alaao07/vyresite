export const metadata = {
  title: 'Vyre - Your AI Assistant',
  description: 'Your AI assistant and friend for daily tasks and automation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --g-50: #f0fbf6;
            --g-200: #d8f3e6;
            --g-500: #66c08a;
            --g-700: #2d8a55;
            --neon: #9fff8f;
            --bg-primary: #0a0f0a;
            --bg-secondary: #0f1a0f;
            --card-bg: rgba(20, 30, 20, 0.8);
            --text-primary: #e8f5e8;
            --text-secondary: #a8c4a8;
          }
          [data-theme="light"] {
            --bg-primary: #ffffff;
            --bg-secondary: #f8f9fa;
            --card-bg: #ffffff;
            --text-primary: #1a1a1a;
            --text-secondary: #666666;
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
            color: var(--text-primary);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
          }
          body.compact { --spacing: 0.75rem; }
          body:not(.compact) { --spacing: 1rem; }
          .neon-text {
            background: linear-gradient(135deg, var(--neon) 0%, var(--g-500) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 0 12px rgba(159, 255, 143, 0.5));
          }
          .card {
            background: var(--card-bg);
            border: 1px solid var(--g-200);
            border-radius: 2rem;
            padding: calc(var(--spacing, 1rem) * 2);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
            transition: all 0.3s;
            backdrop-filter: blur(10px);
          }
          .card:hover {
            transform: translateY(-2px) scale(1.01);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2), 0 0 30px rgba(102, 192, 138, 0.15);
          }
          .btn {
            display: inline-block;
            padding: 1rem 2.5rem;
            font-size: 1rem;
            font-weight: 600;
            text-decoration: none;
            border-radius: 2rem;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
            font-family: inherit;
          }
          .btn-primary {
            background: var(--neon);
            color: var(--bg-primary);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          }
          .btn-primary:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2), 0 0 30px rgba(159, 255, 143, 0.4);
          }
          .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border: 2px solid var(--g-500);
          }
          .btn-secondary:hover {
            background: rgba(102, 192, 138, 0.1);
            border-color: var(--neon);
            transform: translateY(-2px);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes neonPulse {
            0%, 100% { filter: drop-shadow(0 0 8px rgba(159, 255, 143, 0.4)); }
            50% { filter: drop-shadow(0 0 20px rgba(159, 255, 143, 0.8)); }
          }
          .fade-in { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
          .fade-delay { animation: fadeIn 0.8s ease-out 0.3s forwards; opacity: 0; }
          .neon-pulse { animation: neonPulse 3s ease-in-out infinite; }
          button:focus-visible, a:focus-visible {
            outline: 3px solid var(--g-500);
            outline-offset: 3px;
          }
        `}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
