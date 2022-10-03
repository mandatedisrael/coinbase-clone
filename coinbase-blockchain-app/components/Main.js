import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio.js'

const Main = () => {
  return (
  <wrapper>
    <Portfolio />
  </wrapper>
  )
}

export default Main

const wrapper = styled.div`
display: flex;
max-height: cacl(100vh - 64px);
overflow: scroll;

& div {
    border-radius: 0.4rem;
}
`