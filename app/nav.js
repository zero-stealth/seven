"use client"

import Link from "next/link";
import Image from "next/image";
import { useRef } from 'react';
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import styles from "./styles/nav.module.css";

const date = () => {
    const [currentDateTime, setCurrentDateTime] = useState(null);

    useEffect(() => setCurrentDateTime(Date().toLocaleString(), []));

    return currentDateTime;
};

const path = () => {
    const pathname = usePathname();
    console.log(pathname);
    return pathname;

}

console.log(path)


export default function Nav() {
    const link = useRef(null);

    useEffect(() => {
        console.log(link);

        switch (path) {
            case '/':
                navItem.classList.add("active");
                console.log(path)
                break;
            case 'live-games':
                navItem.classList.add("active");
                break;
            case '/games':
                navItem.classList.add("active");
                break;
            case '/promotion':
                navItem.classList.add("active");
                break;
            default:
                break;
        }
    })

    const [isAuthenticated, Authenticate] = useState(false);

    return (
        <div className={styles.mainNav}>
            {

            }
            <div className={styles.upperNav}>
                <div className={styles.limiter}>
                    <Image
                        src="/assets/logo.png"
                        alt="logo"
                        height={50}
                        width={50}
                        className={styles.logo}
                        priority
                    />
                    <div className={styles.BtnContainer}>
                        <div className={styles.BtnWrapper}>
                            <button className={styles.loginBtn}>login</button>
                            <button className={styles.loginBtn}>join</button>
                        </div>
                        <div className={styles.info}>
                            <span>{date()}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.lowerNav}>
                <div className={styles.limiter}>
                    <div className={styles.links} ref={link}>
                        <Link href="/" className={styles.linkWrapper}>
                            <Image src="/icons/home.svg" alt="home logo" width={24} height={24} className={styles.upperIcon} priority />
                            home
                        </Link>
                    </div>
                    <div className={styles.links} ref={link}>
                        <Link href="/live-games" className={styles.linkWrapper}>
                            <Image src="/icons/card.svg" alt="live logo" width={24} height={24} className={styles.upperIcon} priority />
                            live games
                        </Link>
                    </div>
                    <div className={styles.links} ref={link}>
                        <Link href="/games" className={styles.linkWrapper}>
                            <Image src="/icons/games.svg" alt="game logo" width={24} height={24} className={styles.upperIcon} priority />
                            games
                        </Link>
                    </div>
                    <div className={styles.links} ref={link}>
                        <Link href="/promotion" className={styles.linkWrapper}>
                            <Image src="/icons/promotion.svg" alt="home" width={24} height={24} className={styles.upperIcon} priority />
                            Promotions
                        </Link>
                    </div>
                    <div className={styles.language}>
                        <select className={styles.languageContainer}>
                            <option value="english">English</option>
                            <option value="">...</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
    );
}
