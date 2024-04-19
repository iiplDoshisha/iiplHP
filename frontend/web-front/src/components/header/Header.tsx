"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const styles = {
    
    //md:~~  768pxで適応
    //lg:~~  1024px

    header:`
        h-32 mx-auto color:#595959
    `,
    header_div:`
        flex justify-between items-center
        
    `,
    header_img:`
        
    `,
    humbarger:`
        h-6 w-6 fill-current mr-5
        md:hidden
    `,
    header_nav:`
        -mt-8
        md:block lg:-mt-16          //画面サイズによってメニューの高さ調節
    `,
    header_ul:`
        md:flex 
        md:justify-end
        top-9
    `,
    header_li:`
        border-b border-stone-700 md:border-none
    `,
    menu_link:`
        block px-1 py-1 my-1 lg:px-8 lg:py-2 lg:my-4
        hover:bg-amber-300 rounded-full
        md:mb-3
        md:mt-5
        md:mr-3
        lg:text-base
        text-xs
    `,

}


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    
  return (
    <header className={styles.header}>
        <div className={styles.header_div}>
            <Link href="/app/header" as="/home" legacyBehavior>
                <a>
                    <Image  src="/HP_logo.png" alt="HP_logo"  width={550} height={120} className="object-contain"/>
                </a>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
                <svg className={styles.humbarger} viewBox="0 0 24 24">
                    {isOpen ? (
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                    ) : (
                        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                    )}
                </svg>                       
            </button>
        </div>

        <nav className={`${isOpen ? 'block' : 'hidden'} ${styles.header_nav} `}>
            <ul className={styles.header_ul}>
                <li className={styles.header_li}>
                    <Link  href="/components/Introduction/Main" as="/introduction" legacyBehavior>
                        <a className={styles.menu_link}>研究分野</a>
                    </Link>
                </li>
                <li className={styles.header_li}>
                    <Link  href="/components/Menber/Main" as="/member" legacyBehavior >
                        <a className={styles.menu_link}>メンバー</a>
                    </Link>
                </li>
                <li className={styles.header_li}>
                    <Link  href="/components/Achievement/Main" as="/achievement" legacyBehavior >
                        <a className={styles.menu_link}>研究業績</a>
                    </Link>
                </li>
                <li className={styles.header_li}>
                    <Link  href="/components/ForStudents/Main" as="/forStudents" legacyBehavior >
                        <a className={styles.menu_link}>学生の方へ</a>
                    </Link>
                </li>
                <li className={styles.header_li}>
                    <Link  href="/components/Blog/Main" as="/blog" legacyBehavior >
                        <a className={styles.menu_link}>ブログ</a>
                    </Link>
                </li>
                <li className={styles.header_li}>
                    <Link  href="/components/Others/Main" as="/others" legacyBehavior >
                        <a className={styles.menu_link}>その他</a>
                    </Link>
                </li>
                <li className={styles.header_li}>
                    <Link  href="/components/Access/Main" as="/access" legacyBehavior >
                        <a className={styles.menu_link}>アクセス</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>


  )
}
export default Header
