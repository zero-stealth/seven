

import "./styles/globals.css";
import Nav from "./nav";
import Footer from "./footer"


export const metadata = {
  title: "7777.in",
  description: "color game webapp",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-x">
        <Nav />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
