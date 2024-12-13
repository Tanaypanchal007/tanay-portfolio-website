import "./globals.css";

export const metadata = {
  title: "Tanay Panchal",
  description: "Tanay Panchal - Software Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
