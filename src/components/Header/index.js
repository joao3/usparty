import './style.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useAuth } from '../../context/Auth';

const HeaderWrapper = styled.header`
  position: relative;
  background-color: #820AD1;
  width: 100%;
  box-sizing: border-box;
  height: 120px;
  filter: drop-shadow(0px 7.07px 7.07px #00000050);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;

  svg {
    width: 56px;
    height: 56px;
    fill: white;
    margin: 0 10px;

    &.accessibilityIcon {
      fill: #820AD1;
      background-color: white;
      border-radius: 50%;
    }
  }
`;

const Header = () => {
  let auth = useAuth()
  console.log(auth)

  return (
    <HeaderWrapper>
        <div id='logo'>
          <Link to='/'>USParty</Link>
        </div>
        
        <div id="searchBar">
          <input placeholder="Proucure um evento"/>
          <SearchIcon className='searchIcon'/>
        </div>

        <div id='actions'>
          <AccessibilityNewRoundedIcon className='accessibilityIcon' />
          <Link to='/carrinho' ><LocalGroceryStoreOutlinedIcon className='carrinho'/></Link>
          {auth.signed? 
            <Link to='/minhaconta' ><AccountCircleOutlinedIcon className='login'/></Link>
          :
            <Link to='/login' ><AccountCircleOutlinedIcon className='login'/></Link>
          }
        </div>
  </HeaderWrapper>
  );
}

export default Header;