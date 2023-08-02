import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "N W : Digital Marketing Agency",
  description: "Digital Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
