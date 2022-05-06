import React from 'react'
import styled from '@emotion/styled'

import Fin from '../images/fin.png'

const End = styled.div`
    height:30px;
    width:40px;
    align-items: center;
    margin-top:09px;
`

const Jerry = () => {
  return (
    <End>
      <img
        src={Fin}
        width="40"
        height="30"
        alt=""
      />
    </End>
  )
}
export default Jerry
