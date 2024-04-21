"use client"; 
import React from 'react';

const styles = {
    
    //md:~~  768px以上で適応
    //lg:~~  1024px

    title:`
        text-title-gray                       /*タイトルのフォント色 tailwind.config.ts参照*/
        font-title                            /*フォントの指定 tailwind.config.ts参照*/
        lg:text-[150px]                       /*1024px以上で150px*/
        md:text-[100px]                       /*768px以上で100px*/
        text-[50px]                           /*768px以下で50px*/
        text-center
        lg:leading-[600px]
        md:leading-[350px]
        leading-[170px]
        
    `,
}

interface TitleProps {
    text: string;
  }


const Title: React.FC<TitleProps> = (props) => {

    
  return (
    <h1 className={styles.title}>
        {props.text}
    </h1>
  )
}
export default Title
