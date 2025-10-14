export const metadata = {
  title: 'Vyre - AI Assistant',
  description: 'Your AI assistant for Discord'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          * { margin: 0; padding: 0; box-sizing: border-box; }
          :root {
            --neon: #9fff8f;
            --green: #66c08a;
            --dark: #0a0f0a;
            --card: rgba(20, 30, 20, 0.8);
            --text: #e8f5e8;
            --text2: #a8c4a8;
          }
          body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0a0f0a 0%, #0f1a0f 100%);
            color: var(--text);
            line-height: 1.6;
          }
          body.light {
            background: #fff;
            color: #1a1a1a;
            --card: #fff;
            --text: #1a1a1a;
            --text2: #666;
          }
          body.compact { --space: 0.75rem; }
          body:not(.compact) { --space: 1rem; }
          .card {
            background: var(--card);
            border: 1px solid rgba(102, 192, 138, 0.2);
            border-radius: 2rem;
            padding: calc(var(--space, 1rem) * 2);
            box-shadow: 0 4px 16px rgba(0,0,0,0.15);
            backdrop-filter: blur(10px);
            transition: all 0.3s;
          }
          .card:hover { transform: translateY(-2px); box-shadow: 0 10px 40px rgba(0,0,0,0.2); }
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
            color: var(--dark);
            box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          }
          .btn-primary:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 10px 40px rgba(0,0,0,0.2), 0 0 30px rgba(159,255,143,0.4);
          }
          .btn-secondary {
            background: transparent;
            color: var(--text);
            border: 2px solid var(--green);
          }
          .btn-secondary:hover {
            background: rgba(102,192,138,0.1);
            transform: translateY(-2px);
          }
          .neon {
            background: linear-gradient(135deg, var(--neon) 0%, var(--green) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 0 12px rgba(159,255,143,0.5));
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0%, 100% { filter: drop-shadow(0 0 8px rgba(159,255,143,0.4)); }
            50% { filter: drop-shadow(0 0 20px rgba(159,255,143,0.8)); }
          }
          .fade { animation: fadeIn 0.8s ease-out; }
          .pulse { animation: pulse 3s infinite; }
        `}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
