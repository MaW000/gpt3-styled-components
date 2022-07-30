import React from 'react'
import styled from 'styled-components'

export default function cta() {
  return (
    <Container>
      <div className='content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className='btn'>
        <button type='button'>Get Started</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 2rem;
  margin: 4rem;
  border-radius: 1rem;
  background: var(--gradient-bar);

  .content {
    p {
        font-family: var(--font-family);
        font-size: 12px;
        line-height: 30px;
        font-weight: 500;
    }
    h3 {
        font-family: var(--font-family);
        font-size: 24px;
        line-height: 45px;
        font-weight: 800;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 2rem;

    button {
        background: #000;
        color: #fff;
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
        padding: 0.5rem 1rem;
        border-radius: 2rem;

        border: none;
        outline: none;
        cursor: pointer;
        min-width: 150px;
    }
  }
    @media screen and (max-width: 650px) {
        
        flex-direction: column;

        .btn {
            margin: 2rem 0 0;
        }
    }

    @media screen and (max-width: 550px) {
        flex-direction: column;
        margin: 4rem 2rem;
        .content h3 {
            font-size: 18px;
            line-height: 32px;
        }

        .btn button {
            font-size: 14px;
            line-height: 28px;
        }
    }
`
