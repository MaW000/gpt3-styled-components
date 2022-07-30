import React from 'react'
import styled from 'styled-components'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <Container className='section__padding'>
      <div className='heading'>
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className='btn'>
        <p>Request Early Access</p>
      </div>

      <div className='links'>
        <div className='links_logo'>
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className="links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='copyright'>
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--color-footer);

  .heading {
    width: 100%;
    text-align: center;

    margin-bottom: 3rem;

    h1 {
      font-family: var(--font-family);
      font-weight: 800;
      font-size: 64px;
      line-height: 75px;
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    border: 1px solid #fff;
    text-align: center;

    margin-bottom: 10rem;
    cursor: pointer;

    p {
      font-size: 18px;
      font-family: var(--font-family);
      line-height: 21px;
      color: #fff;
      word-spacing: 2px;
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;
    text-align: left;

    div {
      width: 250px;
      margin: 1rem;
    }
  }

  .links_logo {
    display: flex;
    flex-direction: column;

    img {
      width: 118px;
      height: 30px;

      margin-bottom: 1rem;
    }

    p {
      font-family: var(--font-family);
      font-size: 12px;
      line-height: 15px;
      color: #fff;
    }
  }

  .links_div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    h4 {
      font-size: 14px;
      line-height: 17px;
      font-family: var(--font-family);
      color: #fff;

      margin-bottom: 0.9rem;
    }

    p {
      font-size: 12px;
      line-height: 15px;
      font-family: var(--font-family);
      color: #fff;
      
      margin: 0.5rem 0;
      cursor: pointer;
    }
  }

  .copyright {
    margin-top: 2rem;
    text-align: center;
    width: 100%;

    p {
      font-size: 12px;
      font-family: var(--font-family);
      line-height: 15px;
      color: #fff;
    }
  }

  @media screen and (max-width: 850px) {
    .heading h1 {
        font-size: 44px;
        line-height: 50px;
    }
}

@media screen and (max-width: 550px) {
    .heading h1 {
        font-size: 34px;
        line-height: 42px;
    }

    .links div {
        margin: 1rem 0;
    }

    .btn p {
        font-size: 14px;
        line-height: 20px;
    }
}

@media screen and (max-width: 400px) {
    .heading h1 {
        font-size: 27px;
        line-height: 38px;
    }
}
`

export default Footer