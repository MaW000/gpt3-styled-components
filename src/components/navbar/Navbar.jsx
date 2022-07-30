import React, {useState} from 'react'
import styled from 'styled-components'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT?</a></p>
    <p><a href='#possibility'>Open Ai</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Container className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='container-links'>
              <Menu />
              <div className='container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  
  .navbar-links {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .navbar-links_logo {
    margin-right: 2rem;
    img {
      width: 62.56px;
      height: 16.02px;
    }
  }
  
  .navbar-links_container{
    display: flex;
    flex-direction: row;
  }
  .navbar-sign{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    button {
      padding: 0.5rem 1rem;
      color: #fff;
      background: #ff4820;
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      border-radius: 5px;
      border: 0;
      outline: none;
      cursor: pointer;
    }
  }
  p {color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;

    margin: 0 1rem;
    cursor: pointer;
  }
  .navbar-menu {
    margin-left: 1rem;
    display: none;
    position: relative;
    .navbar-menu_container {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      text-align: end;
      background: var(--color-footer);
      padding: 2rem;
      position: absolute;
      top: 40px;
      right: 0;
      margin-top: 1rem;
      min-width: 210px;
      border-radius: 5px;
      box-shadow: 0 0 5 rgba(0,0,0,0.2);
      p{
        margin: 1rem 0;
      }
    }
    svg {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1050px) {
    .navbar-links_container{
      display: none;
    }
    .navbar-menu{
      display: flex;
    } 
  }
  @media screen and (max-width: 700px) {
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 550px) {
    padding: 2rem;
    .navbar-menu_container {
      top: -204px;
    }
    .navbar-sign {
      display: none;
    }
    .container-links-sign {
      display: block;
    } 
  }
`