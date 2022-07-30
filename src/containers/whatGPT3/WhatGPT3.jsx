import React from 'react'
import styled from 'styled-components'
import { Feature } from '../../components/index.js'
const WhatGPT3 = () => {
  return (
    <Container className="section__margin" id="wgpt3">
      <div className="heading-feature">
        <Feature title='What is GPT-3' text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className="heading">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="box">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </Container>
  )
}

const Container = styled.div`
  
  display: flex;
  flex-direction: column;

  padding: 2rem;
  background: var(--color-footer);

  /* ff 3.6+ */
  background:-moz-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

  /* safari 5.1+,chrome 10+ */
  background:-webkit-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

  /* opera 11.10+ */
  background:-o-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

  /* ie 10+ */
  background:-ms-radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

  /* global 92%+ browsers support */
  background:radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .heading-feature {
    display: flex;
    .feature {
      margin: 0;
      .text {
        max-width: 700px;
      }
    }
  }

  .heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    margin: 4rem 0 2rem;

    h1 {
      font-size: 34px;
      line-height: 45px;
      font-weight: 800;
      font-family: var(--font-family);
      max-width: 510px;
    }

    p {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 30px;
      color: var(--color-subtext);
      cursor: pointer;
    }
  }

  .box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 2rem;

  .feature {
    flex: 1;
    margin: 1rem;
    min-width: 210px;
    display: unset;
    flex-direction: column;
    .text {
      margin-top: 0.5rem;
    }
    }
  }

  @media screen and (max-width: 850px) {
  
    .heading {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0rem;
      p {
        margin-top: 1rem;
      }
    }
    
}

@media screen and (max-width: 650px) {
    .heading-feature .feature {
      flex-direction: column;
    } 

    .feature .text {
      margin-top: 0.5rem;
    }

    .heading h1 {
        font-size: 28px;
        line-height: 40px;
    }
    .feature {
      margin: 1rem 0;
    }
}

@media screen and (max-width: 350px) {
    /* Customizing feature component as per needs */
    .box {
      .feature {
        margin: 1rem 0;
        min-width: 100%;
      }
    }
}

`

export default WhatGPT3