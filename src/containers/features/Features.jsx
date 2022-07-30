import React from 'react'
import styled from 'styled-components'
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => {
  return (
    <Container className='section__padding' id='features'>
      <div className='heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='box'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  
  .heading {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    text-align: left;
    margin-right: 5rem;
    
    h1 {
      font-size: 34px;
      line-height: 45px;
      font-weight: 800;
      font-family: var(--font-family);
    }

    p {
      color: var(--color-subtext);
      font-size: 16px;
      line-height: 30px;
      font-weight: 500;
      font-family: var(--font-family);

      margin-top: 2rem;
    }
  }

  .box {
    flex: 1.5 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 990px){
    flex-direction: column;
    .heading {
      margin: 0 0 2rem 0;
    }
  }

  @media screen and (max-width: 550px){
    
    .heading h1 {
      font-size: 28px;
      line-height: 38px;
    }
  }
`

export default Features