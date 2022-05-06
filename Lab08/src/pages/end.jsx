import React from 'react'
import styled from '@emotion/styled'
import Win from '../images/win1.png'
import Header from '../components/Header.jsx'
import Home from './home.jsx'


const Content = styled.div`
    display: flex;
    background-color:#f9a825;
    width: auto;
    height: 85vh;
    align-items: center;
    `
const Imgf = styled.div`
    margin:auto;
    align-items: center;
    margin-left:-10px;
    
`
const Title = styled.h2`
    position:absolute;
    margin-left: 820px;
    margin-bottom:80px;
    color:#a30f0f;
    font-size:25px;
    font-family:'Trebuchet MS', sans-serif;
    justify-content: center;
    `
const Fin = styled.h2`
    position:absolute;
    margin-left: 880px;
    margin-bottom:175px;
    color:#a30f0f;
    font-size:35px;
    font-family:'Trebuchet MS', sans-serif;
    justify-content: center;
    `
const Bend = styled.button`
    background-color: blue;
    cursor: pointer;
    padding: 7px;
    border: none;
    border-radius: 25px;

    opacity: 0.6;
    transition: 0.3s; 
    
    height: 40px;
    width: 200px;
    color: white;
    font-size: 18px;

    margin-top:100px;
    margin-right:180px;

    &:hover{
        background: #0563af;
        color:white; 
        opacity: 1
    }
   
`


const End = () => {
  const [page, setPage] = React.useState(true)
  if (page === true) {
    return (
      <>
        <Header />
        <Content>
          <Imgf>
            <img
              src={Win}
              width="800"
              height="600"
              alt=""
            />
                    
          </Imgf>
          <Fin>¡Has ganado!</Fin>
          <Title> ¿Quieres jugar de nuevo? </Title>
          <Bend onClick={() => {
            setPage(false)
          }}
          >
            Regresar

          </Bend>
        </Content>
      </>
    )
  }
  if (page === false) {
    return (
      <Home />
    )
  }
  return false
}
export default End
