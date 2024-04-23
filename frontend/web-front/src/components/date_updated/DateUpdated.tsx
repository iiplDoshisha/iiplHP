"use client"; 
import React from 'react';

const styles = {
    
    //md:~~  768pxで適応
    //lg:~~  1024px

    date_updated:`
      text-base
      ml-64
      my-44
    `
}


const DateUpdated = () => {
  return (
    <div>
      <h2 className={styles.date_updated}>最終更新日:20XX年X月Y日</h2>
    </div>
  )
}
export default DateUpdated
