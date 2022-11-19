import './style.css'
import SearchIcon from '@mui/icons-material/Search';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = () => {
  return (
    <header>
        <div id='logo'>USParty</div>
        
        <div id="searchBar">
          <input placeholder="Proucure um evento"/>
          <SearchIcon className='searchIcon'/>
        </div>

        <div id='actions'>
          <AccessibilityNewRoundedIcon className='accessibilityIcon' style={{ fontSize: 40 }}  />
          <LocalGroceryStoreOutlinedIcon className='carrinho' fontSize='medium' style={{ fontSize: 60 }} />
          <AccountCircleOutlinedIcon className='login' fontSize='large' style={{ fontSize: 60 }} />
        </div>
  </header>
  );
}

export default Header;