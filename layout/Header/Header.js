import React from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        {pathName === '/' ? <Image src="/images/logo.png" alt="logo" width={155} height={67}/> :
          <Link href="/"><Image src="/images/logo.png" alt="logo" width={155} height={67}/></Link>}
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
