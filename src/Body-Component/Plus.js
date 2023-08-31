import React from 'react';
import '../App.css';
import logo from './PlusImages/Text.webp'

function Plus() {
  return (
    <div className='container-fluid  plus-body d-flex flex-wrap-reverse  justify-content-around'>


      <div className='d-flex flex-wrap'  >
        <div  className='plus-logo d-flex flex-wrap '>
          <img style={{ width: '70%' }} src={logo}></img>
          <div className=' p-2 '>
            <p>Enhance your PlayStation experience with access to online multiplayer, monthly games, exclusive discounts and more.</p>
            <button style={{ borderRadius: '20px' }} className='btn btn-primary align-center '>Explore Playstation Plus</button>
          </div>
        </div>
      </div>
      <div className='game' style={{ width: '500px', height: '450px' }}>


      </div>
    </div>
  );
}

export default Plus;
