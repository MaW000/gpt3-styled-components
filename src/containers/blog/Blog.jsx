import React from 'react'
import styled from 'styled-components'
import Article from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
const Blog = () => {
  return (
    <Container className='section__padding' id='blog'>
      <div className='heading'>
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className='box'>
        <div className='groupA'>
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='groupB'>
          <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </Container >
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  .heading {
    width: 100%;
    text-align: left;

    margin-bottom: 5rem;

    h1 {
      font-size: 62px;
      line-height: 75px;
      font-family: var(--font-family);
      font-weight: 800;
    }
  }

  .box {
    display: flex;
    flex-direction: row;

    .groupA {
      flex: 0.75 1;
      margin-right: 2rem;
    }

    .groupB {
      flex: 1 1;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    }
  }
`

export default Blog