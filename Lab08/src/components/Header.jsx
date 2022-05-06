import React from 'react'
import styled from '@emotion/styled'


const MainHeader = styled.header`
	height: 30%;
	width: auto;
	color: white;
    padding:10px;
	background-color: #f9a825;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: Impact;
	font-size:50px;
    text-decoration:underline;
	color: #a30f0f;
`


const Header = () => {
  return (
    <MainHeader> Tom & Jerry Maze</MainHeader>

  )
}
export default Header
