import React from 'react'
import styled from 'styled-components'

function Article({imgUrl, date, text}) {
  return (
    <Container>
      <div className="image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
      </div>
        <p>Read Full Article</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background: var(--color-footer);

  .image {
    width: 100%;
    height: 100%;
    background: var(--color-bg);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem 1.5rem;
    height: 100%;

    p {
      font-family: var(--font-family);
      font-size: 11.65px;
      font-weight: 700;
      line-height: 35px;
      
      color: #fff;

      :last-child {
        cursor: pointer;
      }
    }

    h3 {
      font-family: var(--font-family);
      font-size: 25.11px;
      font-weight: 800;
      line-height: 30.30px;

      color: #fff;
      margin-bottom: 5rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width:550px) {
    .content h3 {
      font-size: 18px;
      line-height: 25px;
    }
  }
`

export default Article