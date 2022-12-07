import './style.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth } from '../../context/Auth';
import { useState } from 'react';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  background-color: #820AD1;
  width: 100%;
  box-sizing: border-box;
  min-height: 120px;
  filter: drop-shadow(0px 7.07px 7.07px #00000050);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  z-index: 10;

  @media (max-width: 767px) {
    padding: 0 32px;
    min-height: 70px;

    & #searchBar {
      display: none;
    }
  }
`;

const MenuWrapper = styled.div`
  position: relative;
  top: 0;
  filter: none;
  width: auto;
  display: block;

  @media (max-width: 767px) {
    position: absolute;
    top: 70px;
    left: 0;
    max-height: 0;
    overflow: hidden;
    background-color: #820AD1;
    filter: drop-shadow(0px 7.07px 7.07px #00000050);
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;


    &.open {
      max-height: 80px;
      padding: 8px 32px;
    }
  }
`;

const MenuMobileButton = styled.span`
  display: block;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.span`
  display: inline-block;
  width: 56px;
  height: 56px;
  margin: 0 10px;
  position: relative;
  cursor: pointer;
  
  svg {
    position: absolute;
    top: 8px;
    left: 8px;
    fill: #820AD1;
    width: 40px;
    height: 40px;
  }

  &::before {
    content: "";
    display: block;
    width: 56px;
    height: 56px;
    background-color: white;
    border-radius: 50%;
    z-index: -1;
  }
`;

const MenuMobileIcon = styled.span`
  display: block;
  width: 30px;
  height: 5px;
  background-color: white;
  position: absolute;
  top: 10px;

  &.open {
    transform: rotate(45deg);
  
    &::after, &::before {
      transform: rotate(90deg);
      top: 0;
    }
  }

  &::after, &::before {
    content: "";
    display: block;
    width: 30px;
    height: 5px;
    background-color: white;
    position: absolute;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
  }


`;

const Header = () => {
  let [menuOpen, setMenuOpen] = useState(false)
  let auth = useAuth()
  console.log(auth, menuOpen)

  return (
    <HeaderWrapper>
        <div id='logo'>
          <Link to='/'>USParty</Link>
        </div>
        
        <div id="searchBar">
          <input placeholder="Procure um evento"/>
          <SearchIcon className='searchIcon'/>
        </div>

        <MenuMobileButton tabIndex={0} aria-labelledby='Abrir menu' onClick={() => setMenuOpen(!menuOpen)}>
          <MenuMobileIcon className={menuOpen && "open"} />
        </MenuMobileButton>
        <MenuWrapper className={menuOpen && "open"} id='actions'>
          <Icon tabIndex={0} aria-labelledby='Opções de Acessibilidade'><AccessibilityNewRoundedIcon className='icon accessibilityIcon'/></Icon>
          <Link to='/carrinho' ><Icon><LocalGroceryStoreOutlinedIcon className='icon carrinho'/></Icon></Link>
          {auth.signed? 
            <Link to='/minhaconta' ><Icon><AccountIcon className='icon conta'/></Icon></Link>
          :
            <Link to='/login' ><Icon><LoginIcon className='icon login'/></Icon></Link>
          }
        </MenuWrapper>
  </HeaderWrapper>
  );
}

export default Header;