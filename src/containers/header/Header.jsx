import React from 'react'
import styled from 'styled-components'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <Container className='section__padding' id='home'>
      <div className='header-content'>
        <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='input'>
          <input type='email' placeholder='email'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='people'>
          <img src={people}/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='header-img'>
        <img src={ai} alt='ai'/>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  .header-img{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .header-content{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 5rem;
    h1{
      font-family: var(--font-family);
      font-weight: 800;
      font-size: 62px;
      line-height: 75px;
      letter-spacing: -.004em;
    }
    p{
      font-family: var(--font-family);
      font-size: 20px;
      line-height: 27px;
      color: var(--color-text);
      margin-top: 1.5rem;
    }
    .people{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 2rem;

      img{
        width: 181.79px;
        height: 38px;
      }
      p{
        margin: 0 0 0 1rem;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 12px;
        line-height: 38px;
        color: #ffffff;
        text-align: center;
      }
    }
    .input {
      width: 100%;
      margin: 2rem 0 1rem;

      display: flex;
      
      input{
        flex: 2;
        width: 100%;
        min-height: 50px;
        background: var(--color-footer);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        font-family: var(--font-family);
        font-size: 20px;
        line-height: 27px;
        color: #3D6184;
        border: 2px solid var(--color-footer);
        padding: 0 1rem;
        outline: none;
        color: #fff;
      }

      button {
        background: #FF4820;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        flex: 0.6;
        width: 100%;
        min-height: 50px;
        font-family: var(--font-family);
        font-weight: bold;
        font-size: 20px;
        line-height: 27px;
        color: #ffffff;
        cursor: pointer;
        outline: none;
        padding: 0 1rem;
        border: none;
      }
    }
  }
  @media screen and (max-width: 1050px) {
      display: flex;
      flex-direction: column;
      .header-content {
        margin: 0 0 3rem;
      }
    }
    @media screen and (max-width: 650px) {
      h1{
        font-size: 48px;
        line-height: 60px;
      }
      p{
        font-size: 16px;
        line-height: 24px;
      }
      .people {
        flex-direction: column;
        p{margin: 0}
      }
      .input {
        input,button {
        font-size: 16px;
        line-height: 24px;
        }
      }
    }
    @media screen and (max-width: 490px) {
      h1 {
        font-size: 36px;
        line-height: 48px;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
    }
`


export default Header