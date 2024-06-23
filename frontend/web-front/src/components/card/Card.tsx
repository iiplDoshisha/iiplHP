"use client"; 
import React from 'react';

const styles = {
    
    //md:~~  768px以上で適応
    //lg:~~  1024px
    card:`
        lg:w-96
        lg:h-52
        h-24
        w-48
        rounded 
        overflow-hdden
        shadow-lg
        relative
        border border-gray-500
    `,

    name:`
        text-center
        lg:text-xl
        text-[10px]
        absolute
        bottom-0
        left-0
        right-0
`,
}

interface TitleProps {
    name: string;
  }


const Card: React.FC<TitleProps> = (props) => {

    
  return (
    <div className={styles.card}>
        <div className={styles.name}>
            {props.name}
        </div>
    </div>

  )
}
export default Card
