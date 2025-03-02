import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';



export const metadata: Metadata = {
  title: "EREN AKBAŞ's Portfolio",
  description: 'Eren Akbaş - Full Stack Developer',
  icons: { icon: "https://raw.githubusercontent.com/erenakbas57/Portfolio/refs/heads/master/public/assets/images/logo.png"},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-gradient-to-br from-orange-50/50 to-yellow-100/50 dark:from-orange-950/50 dark:to-yellow-900/50">
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffa50040,transparent)]" />
              <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]" />
              <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-orange-500/30 dark:bg-orange-400/20 rounded-full blur-xl"
                    style={{
                      width: Math.random() * 100 + 50 + 'px',
                      height: Math.random() * 100 + 50 + 'px',
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                      animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                      animationDelay: `-${Math.random() * 10}s`,
                    }}
                  />
                ))}
              </div>
            </div>
            <Navigation />
            <main className="relative z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}