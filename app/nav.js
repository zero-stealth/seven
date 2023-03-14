"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react'
import NavCss from "./styles/nav.module.css";


const date = () => {
    const [currentDateTime, setCurrentDateTime] = useState(null);

    useEffect(() => setCurrentDateTime(Date().toLocaleString(), []));

    return currentDateTime;
};

export default function Nav() {
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
                        <span>{date()}</span>
                    </div>
                </div>
            </div>
            <div className={NavCss.lowerNav}>
                
            </div>
        </div>
    );
}
