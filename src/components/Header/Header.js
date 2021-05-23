import React from 'react';
import './Header.scss';
import logo from '../../logo.svg';

const Header = (props) => {
  return (
    <div className='Header'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo' />
        <h3>React Movies Catalog</h3>
      </div>
      <div className='form'>
        <input
          onChange={(e) => {
            props.onChangeQuery(e.target.value);
          }}
          type='search'
          placeholder='Search...'
          className='search'
        />
      </div>
    </div>
  );
};
export default Header;
