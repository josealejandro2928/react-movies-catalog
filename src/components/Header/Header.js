import React from 'react';
import './Header.scss';
import logo from '../../logo.svg';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Header = (props) => {
  return (
    <div className='Header'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo' />
        <h3>React: Movies Catalogue</h3>
      </div>
      <div className='form d-flex justify-content-center align-items-center'>
        <InputGroup>
          <FormControl
            className='search'
            placeholder='Search...'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
          />
          <InputGroup.Append>
            <Button
              style={{
                'border-top-right-radius': '16px',
                'border-bottom-right-radius': '16px',
              }}
              variant='primary'
            >
              <i className="fa fa-search"></i>
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {/* <input
          onChange={(e) => {
            props.onChangeQuery(e.target.value);
          }}
          type='search'
          placeholder='Search...'
          className='search'
        /> */}
      </div>
    </div>
  );
};
export default Header;
