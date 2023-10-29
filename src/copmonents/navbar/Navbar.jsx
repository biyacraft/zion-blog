import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import { excludeDefaultMomentLocales } from '../../../next.config';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToogle from '../themeToggle/themeToggle';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="faceb00k" width={24} height={24} />
                <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                <Image src="/youtube.png" alt="y0utube" width={24} height={24} />
            </div>
            <div className={styles.logo}>ABII</div>
            <div className={styles.links}>
                <ThemeToogle/>
                <Link href="#">Homepage</Link>
                <Link href="#">Contact</Link>
                <Link href="#">About</Link>
                <AuthLinks/>
            </div>
        </div>
    )
}

export default Navbar