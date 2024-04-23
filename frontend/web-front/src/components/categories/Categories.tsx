"use client"; 
import React from 'react';

const styles = {
    
    //md:~~  768px以上で適応
    //lg:~~  1024px

    categories:`
        text-title-gray                       /*タイトルのフォント色 tailwind.config.ts参照*/
        font-title                            /*フォントの指定 tailwind.config.ts参照*/
        lg:text-[70px]                       /*1024px以上でpx*/
        md:text-[40px]                       /*768px以上でpx*/
        text-[30px]                           /*768px以下でpx*/
        font-semibold
        text-center
        mt-9
        underline decoration-3
    `,
    supplement:`
        lg:text-[30px]                       /*1024px以上でpx*/
        md:text-[20px]                       /*768px以上でpx*/
        text-[15px]                           /*768px以下でpx*/
        text-center
        mb-16
    `
}

interface TitleProps {
    text1: string;
    text2: string;
  }


const Categories: React.FC<TitleProps> = (props) => {

    
  return (
    <div>
        <h2 className={styles.categories}>
            {props.text1}
        </h2>
        <h3 className={styles.supplement}>
            {props.text2}
        </h3>
    </div>

  )
}
export default Categories
