import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const HeaderDiv = styled.div`


`

const Header = () => {
  return (
    <div className='sp'>
    <header >
        <nav >
            <ul >
                <li> {/*legacyBehaviorを付けることで，<a>が使える */}
                  <Link legacyBehavior href="/components/Introduction/Main" as="/introduction" >
                    <a className='menu-link' >研究分野</a>
                  </Link>
                </li>
                <li> 
                  <Link legacyBehavior href="/components/Menber/Main" as="/member" >
                    <a className='menu-link' >メンバー</a>
                  </Link>
                </li>
                <li> 
                  <Link legacyBehavior href="/components/Achievement/Main" as="/achievement" >
                    <a className='menu-link' >研究業績</a>
                  </Link>
                </li>
                <li> 
                  <Link legacyBehavior href="/components/ForStudents/Main" as="/forStudents" >
                    <a className='menu-link' >学生の方へ</a>
                  </Link>
                </li>
                <li> 
                  <Link legacyBehavior href="/components/Blog/Main" as="/blog" >
                    <a className='menu-link' >ブログ</a>
                  </Link>
                </li>
                <li> 
                  <Link legacyBehavior href="/components/Others/Main" as="/others" >
                    <a className='menu-link' >その他</a>
                  </Link>
                </li>
                <li> 
                  <Link legacyBehavior href="/components/Access/Main" as="/access" >
                    <a className='menu-link' >アクセス</a>
                  </Link>
                </li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

export default Header