import React from 'react'
import styled from '@emotion/styled'

import Tom from '../components/Tom.jsx'
import Path from '../components/Path.jsx'
import Jerry from '../components/Jerry.jsx'
import Wall1 from '../components/Wall.jsx'
import Header from '../components/Header.jsx'
import End from './end.jsx'

const Content = styled.div`
    display: flex;
    background-color:#f9a825;
    width: auto;
    height: 90vh;
    align-items: center;
    `

const handleLink = (w, h) => {
  const url = 'https://maze.juanelcaballo.club/?type=json'
  const nurl = url.concat('&w=', w)
  const n2url = nurl.concat('&h=', h)
  return (
    n2url)
}


const Game = ({ w, h }) => {
  const FH = ((parseInt(h, 11) * 2) + 1)
  const FW = ((parseInt(w, 10) * 3) + 1)
    
  const [datas, setDatas] = React.useState([])
  const [page, setPage] = React.useState(true)

  const Conteiner = styled.div`
        margin: auto;
        text-align: center;
        justify-items: center;
        display: grid  ;
        grid-template-columns: repeat(${FW}, 50px);
        grid-template-rows: repeat(${FH}, 40px);
        `

  const Move = ('keyup', (event) => {
    const change = [...datas]
    const y = change.findIndex((yy) => { return yy.indexOf('p') > -1 })
    const x = change[y].findIndex((xx) => { return xx === 'p' })
           
    switch (event.key) {
      case 'ArrowLeft':
        if (change[y][x - 1] === ' ') {
          change[y][x] = ' '
          change[y][x - 1] = 'p'
        } else if (change[y][x - 1] === 'g') {
          setPage(false)
        }
        setDatas(change)
        return change

      case 'ArrowRight':
        if (change[y][x + 1] === ' ') {
          change[y][x] = ' '
          change[y][x + 1] = 'p'
        } else if (change[y][x + 1] === 'g') {
          setPage(false)
        }
        setDatas(change)
        return change
          
      case 'ArrowUp':
        if (change[y - 1][x] === ' ') {
          change[y][x] = ' '
          change[y - 1][x] = 'p'
        } else if (change[y - 1][x] === 'g') {
          setPage(false)
        }
        setDatas(change)
        return change
                
      case 'ArrowDown':
        if (change[y + 1][x] === ' ') {
          change[y][x] = ' '
          change[y + 1][x] = 'p'
        } else if (change[y + 1][x] === 'g') {
          setPage(false)
        }
        setDatas(change)
        return change

      default:
        alert('Only Arrow Keys Are Allowed!')
    } return false
  }
  )

  React.useEffect(() => {
    const url = handleLink(w, h)
    fetch(url)
      .then((response) => { return response.json() })
      .then((data) => { return setDatas(data) })
  }, [])

  window.onkeydown = Move
  if (page === true) {
    return (
      <>
        <Header />
        <Content>
          <Conteiner>
            {datas && datas.map((data1) => {
              return (
                data1.map((data2) => {
                  if ((data2 === '-') || (data2 === '|') || (data2 === '+')) {
                    return (
                      <Wall1 key={data2.id} value={data2} />
                    )
                  }
                  if (data2 === 'g') {
                    return (
                      <Jerry key={data2.id} />
                    )
                  }
                  if (data2 === 'p') {
                    return (
                      <Tom key={data2.id} />
                    )
                  }
                  if (data2 === ' ') {
                    return (
                      <Path key={data2.id} value={data2} />
                    )
                  } return false
                })
              )
            })}
          </Conteiner>
        </Content>
      </>
    )
  }
  if (page === false) {
    return (
      <End />
    )
  }
  return false
}

export default Game
