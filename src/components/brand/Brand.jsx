import React from 'react'
import { google, shopify, slack, atlassian, dropbox } from './imports'
import styled from 'styled-components'
function Brand() {
  return (
    <Container className='section__padding'>
      <div>
        <img src={google} alt='google'/>
      </div>
      <div>
        <img src={slack} alt='slack'/>
      </div>
      <div>
        <img src={atlassian} alt='atlassian'/>
      </div>
      <div>
        <img src={dropbox} alt='dropbox' />
      </div>
      <div>
        <img src={shopify} alt='shopify' />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  div {
    flex: 1;
    max-width: 150px;
    min-width: 120px;
    margin: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Brand