import React from 'react';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import './Home.scss';
const Home = (props) => {
  return (
    <div>
      <Header onChangeQuery={changeQueryHandler.bind(this)}></Header>
      <Loader color={'#61DAFB'}></Loader>
    </div>
  );

  function changeQueryHandler(e) {
    console.log(e);
  }
};
export default Home;
