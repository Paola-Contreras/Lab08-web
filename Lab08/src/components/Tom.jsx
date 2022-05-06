
import React from 'react'
import styled from '@emotion/styled'

import Character from '../images/run2.gif'

const Player = styled.div`
    margin-top:7px;
    height:30px;
    with:50px;
    transform:scaleX(-1);
    transition:transform 250ms;
    }
    `

const Tom = () => {
  return (
    <Player>
      <img
        src={Character}
        width="40"
        height="30"
        alt=""
      />
    </Player>
  )
}

export default Tom
