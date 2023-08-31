import React from 'react';
import '../App.css';




function Explore() {
  return (
    <>
      <div className='container justify-content-center w-75 p-3 '>
        <div id='ps4head' className='d-flex justify-content-center flex-column align-items-center '>
          <div>
            <h1 style={{fontFamily:'sans-serif'}}>Explore PlayStation®4</h1>
          </div>
          <div>
            <p className='text-secondary' style={{ textAlign: 'center',fontSize:'20px', fontFamily:'sans-serif' }}>
              Incredible games, non-stop entertainment. There's never been a better time to enjoy PS4.
            </p>
          </div>
        </div>

        <div id='ps4prods' className='row '>
          <div id='ps4-1' className='ps4 col-md-4'>
            <div id='content-1' className='ps4-content'>
              <h1 style={{ fontFamily: 'sans-serif',fontWeight:'light' }}>PlayStation 4</h1>
              <h5 style={{ fontFamily: 'sans-serif' }} className='text-secondary text-'>
                Incredible Games live on PS4, with 1TB storage
              </h5>
              <button id='ps4btn' className='btn btn-primary btn-md'>
                Learn more
              </button>
            </div>
          </div>

          <div id='ps4-2' className='ps4 col-md-4'>
            <div id='content-2' className='ps4-content'>
              <h1 style={{ fontFamily: 'sans-serif' }}>PlayStation VR</h1>
              <h5 style={{ fontFamily: 'sans-serif' }} className='text-secondary text-'>
                Over 500 games and experiences and counting. See them all.
              </h5>
              <button id='ps4btn' className='btn btn-primary btn-md'>
                Learn more
              </button>
            </div>
          </div>

          <div id='ps4-3' className='ps4 col-md-4'>
            <div id='content-3' className='ps4-content'>
              <h1 style={{ fontFamily: 'sans-serif' }}>Accessories</h1>
              <h5 style={{ fontFamily: 'sans-serif' }} className='text-secondary text-'>
                Enhance your PS4 experience with a range of official accessories.
              </h5>
              <button id='ps4btn' className='btn btn-primary btn-md'>
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
