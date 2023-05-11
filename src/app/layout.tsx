import "@/styles/globals.css";

export const metadata = {
  title: {
    template: "%s | App Router - Starter",
    default: "...",
    absolute: "App Router - Starter",
  },
  description: "A fullstack startingpoint for Next.js using the App Router",
  colorScheme: "dark",
  icons: {
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="inset-0 flex h-full min-h-screen w-full flex-col items-center justify-center bg-black text-gray-300">
          <div className="flex w-10/12 flex-col text-center">
            <h1 className="border-b-2 border-red-600 pb-6 text-4xl font-extrabold">
              App Router - Starter
            </h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
