import React from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  const router = useRouter();
  const pathName = router.pathname;
  console.log(pathName, 'pathName')
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        {pathName === '/' ? <Image src="/images/logo.png" alt="logo" width={155} height={67}/> :
          <Link href="/">
            <a><Image src="/images/logo.png" alt="logo" width={155} height={67}/></a>
          </Link>}
      </div>
      <ul className={styles.menu}>
        <li className={pathName === '/' && 'active'}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathName === '/contacts' && 'active'}>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
