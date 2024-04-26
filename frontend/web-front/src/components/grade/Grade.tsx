"use client"; 
import React from 'react';

const styles = {
    
    //md:~~  768px以上で適応
    //lg:~~  1024px

    title:`
        lg:text-[40px]                       /*1024px以上でpx*/
        md:text-[20px]                       /*768px以上でpx*/
        text-[18px]                           /*768px以下でpx*/
        text-center
        underline decoration-2
    `,
}

interface GradeProps {
    text: string;
  }


const Grade: React.FC<GradeProps> = (props) => {
    const key = props.text;


    if ( key === 'D3') {
        return (
            <h1 className={styles.title}>
                博士後期課程(D3)
            </h1>
        );
    }
    else if (key === 'D2') {
        return (
            <h1 className={styles.title}>
                博士後期課程(D2)
            </h1>
        );
    }
    else if (key === 'D1') {
        return (
            <h1 className={styles.title}>
                博士後期課程(D1)
            </h1>
        );
    }
    else if (key === 'M2') {
        return (
            <h1 className={styles.title}>
                修士課程(M2)
            </h1>
        );
    }
    else if (key === 'M1') {
        return (
            <h1 className={styles.title}>
                修士課程(M1)
            </h1>
        );
    }
    else  {
        return (
            <h1 className={styles.title}>
                学部生(B4)
            </h1>
        );
    }

}
export default Grade
