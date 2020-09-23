import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import ME from './assets/me.jpg';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  return (
    <div class='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
            alt=''
          />
        </Link>
      </div>

      <div className='header__input'>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type='text'
          placeholder='Search'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link>
      </div>
      <div className='header__icons'>
        <VideoCallSharpIcon className='header__icon' />
        <AppsSharpIcon className='header__icon' />
        <NotificationsSharpIcon className='header__icon' />
        <Avatar src={ME} />
      </div>
    </div>
  );
}

export default Header;
