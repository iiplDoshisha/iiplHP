import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-around;
    top: 0;
    position: fixed;
    width: 100%;
    height: 5.5rem;
    overflow: hidden;
    z-index: 10;
    background-color: #AEC1F8;
`
const Header = () => {
  return (
    <HeaderDiv>
        <nav>
            <ul>
                <li>
                    <Link href="/components/Introduction/Main" as="/introduction">
                        <a className="menu-link">研究分野</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </HeaderDiv>
  )
}
export default Header