export const metadata = {
  title: "Anikys African Restaurant",
  description: "African restaurant in Dubai, UAE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#FFFFFC" }}>{children}</body>
    </html>
  );
}
