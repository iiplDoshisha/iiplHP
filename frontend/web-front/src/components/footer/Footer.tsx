"use client"; 
import React from 'react';
import Link from 'next/link';


const styles = {
    
    //md:~~  768pxで適応
    //lg:~~  1024px
    footer:`
        bg-transparent
    `,
    footer_ul:`
        flex 
        justify-center
        top-9
        
    `,
    footer_li:`
        
        border-t border-gray-400 
    `,
    menu_link:`
        block px-1 py-1 my-1
        hover:bg-gray-300 rounded-full
        md:mb-3
        md:mt-5
        md:mr-3
        lg:text-[12px]
        text-center
        text-[10px]
        
    `,
    credit:`
        text-center
        text-[8px]
    `


}


const Footer = () => {

  return (
    <footer className={styles.footer}>
        <ul className={styles.footer_ul}>
                <li className={styles.footer_li}>
                    <Link  href="/components/Introduction/Main" as="/introduction" legacyBehavior>
                        <a className={styles.menu_link}>研究分野</a>
                    </Link>
                </li>
                <li className={styles.footer_li}>
                    <Link  href="/components/Menber/Main" as="/member" legacyBehavior >
                        <a className={styles.menu_link}>メンバー</a>
                    </Link>
                </li>
                <li className={styles.footer_li}>
                    <Link  href="/components/Achievement/Main" as="/achievement" legacyBehavior >
                        <a className={styles.menu_link}>研究業績</a>
                    </Link>
                </li>
                <li className={styles.footer_li}>
                    <Link  href="/components/ForStudents/Main" as="/forStudents" legacyBehavior >
                        <a className={styles.menu_link}>学生の方へ</a>
                    </Link>
                </li>
                <li className={styles.footer_li}>
                    <Link  href="/components/Blog/Main" as="/blog" legacyBehavior >
                        <a className={styles.menu_link}>ブログ</a>
                    </Link>
                </li>
                <li className={styles.footer_li}>
                    <Link  href="/components/Others/Main" as="/others" legacyBehavior >
                        <a className={styles.menu_link}>その他</a>
                    </Link>
                </li>
                <li className={styles.footer_li}>
                    <Link  href="/components/Access/Main" as="/access" legacyBehavior >
                        <a className={styles.menu_link}>アクセス</a>
                    </Link>
                </li>
            </ul>
            <h4 className={styles.credit}>@知識情報処理研究室</h4>
    </footer>


  )
}
export default Footer



