import React from 'react'
import styled from '@emotion/styled'
import principal from '../images/principal.png'

import Header from '../components/Header.jsx'
import Game from './game.jsx'


const Content = styled.div`
    display: flex;
    background-color:#f9a825;
    width: auto;
    height: 85vh;
    align-items: center;
    `

const Title = styled.h1`
    position:absolute;
    margin-left: 780px;
    margin-bottom:200px;
    color:#a30f0f;
    font-size:30px;
    justify-content: center;
    `

const Textconteiner = styled.div`
    display:flex;
    flex-direction: column;
    width: 273px;
    height: 150px;
    margin-left:160px;
    justify-content: space-around;
    
    `

const Text = styled.input`
    width: 250px;
    height: 40px;
    display: flex;
    border: none;
    background-color: #eaebee;
    
    border-radius: 20px;
    font-family:Arial;
    font-size:18px;
    padding-left: 20px;

    &:focus{
        background-color:white;
        color:black;
    }
    `

const BtnStart = styled.button`
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

    margin-top:200px;
    margin-left:-240px;

    &:hover{
        background: #0563af;
        color:white; 
        opacity: 1
    }
   
`

const Home = () => {
  const [w, setW] = React.useState('')
  const [h, setH] = React.useState('')
  const [page, setPage] = React.useState(true)
   
  if (page === true) {
    return (
      <>
        <Header />
        <Content>
          <Title>Configura el tamaño ...</Title>
          <img src={principal} alt="" />
          <Textconteiner>
            <Text
              placeholder="Ingresa alto deseado ..."
              type="number"
              value={h}
              onChange={(event) => { return setH((event.target.value)) }}
            />

            <Text
              placeholder="Ingresa ancho deseado ..."
              type="number"
              value={w}
              onChange={(event) => { return setW((event.target.value)) }}
            />
          </Textconteiner>
          <BtnStart onClick={() => {
            if (w === '' || h === '') {
              alert('Llene ambos campos')
            }
            setPage(false)
            return null
          }}
          >
            Start
          </BtnStart>
        </Content>
      </>
    )
  }

  if (page === false) {
    return (
      <Game w={w} h={h} />
    )
  }
  return null
}


export default Home
