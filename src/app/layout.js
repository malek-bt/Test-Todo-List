import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";



export const metadata = {
  title: "Todo App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
