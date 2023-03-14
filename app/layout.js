
"use client"

import "./styles/globals.css";
import Image from "next/image";
// import { useEffect, useState } from 'react'
import NavCss from "./styles/nav.module.css";
import FooterCss from "./styles/footer.module.css";


export const metadata = {
  title: "7777.in",
  description: "color game webapp",
};

const date = () => {
const [currentDateTime, setCurrentDateTime] = useState(null);

useEffect(() => setCurrentDateTime(Date().toLocaleString(), []));

  return currentDateTime;
};


function Nav() {
  return (
    <div className={NavCss.main}>
      <div className={NavCss.upperNav}>
        <Image
          src="/logo.png"
          alt="logo"
          height={100}
          width={100}
          className={NavCss.logo}
        />
        <div className={NavCss.BtnContainer}>
          <div className={NavCss.BtnWrapper}>
            <button className={NavCss.loginBtn}>login</button>
            <button className={NavCss.loginBtn}>join</button>
          </div>
          <div className={NavCss.info}>
            {/* <div>{date()}</div> */}
          </div>
        </div>
      </div>
      <div className={NavCss.lowerNav}></div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h1>ola</h1>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
