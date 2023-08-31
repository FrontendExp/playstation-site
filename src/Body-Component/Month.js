import React from 'react'
import '../App.css'
function Month() {
  return (
    <>
      <div>
        <div id='month-div' className='container-fluid d-flex flex-wrap justify-content-start'>
          <div className='  month-content m-5'>
            <div style={{ height: '200px', }}>
              <div>
                <h1 id='text1' className='pb-3' style={{ color: 'white' }}>
                  THIS MONTH <br></br> ON PLAYSTATION
                </h1>
                <h5 id='text2' className='text-light pb-3'>Check out this month's biggest releases along with dedicated <br></br> features, guides and more.</h5>

                <button id='monthbtn' className='btn btn-light'><b>Find out more</b></button>
              </div>

            </div>
          </div>

          <div className='container-sm  py-5'>
            <div className='row d=flex flex-wrap'>


              <div className='col-sm-4  '>

                <div id='s1' className='square-div'>

                </div>
                <h4 style={{ color: 'white' }} className='text-center pt-3'>21 great games you might've <br></br> missed in 2023</h4>

              </div>
              <div className='col-sm-4'>

                <div id='s2' className='square-div'>

                </div>
                <h4 style={{ color: 'white' }} className='text-center pt-3'>The best fighting games on PS4 and PS5</h4>


              </div>
              <div className='col-sm-4'>

                <div id='s3' className='square-div'>

                </div>
                <h4 style={{ color: 'white' }} className='text-center pt-3'>Best single-player story-driven <br></br> games on PS4 and PS5</h4>


              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default Month
