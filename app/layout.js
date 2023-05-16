import "./globals.css";
export const metadata = {
  title: "Brief Me",
  description: "World's Best Multilingual Article Summarizer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="main-content">{children}</div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
