import React from 'react'
import footimg from './Footerimages/footertop.png'
import footimg2 from './Footerimages/sonyfinlogo.png'
import '../App.css'
function Footer() {
  return (
    <>

      <div id='footbody' className='container-fluid w-100'>
        <footer className='container w-100 '>

          <div id='footlogo' className='d-flex w-25 p-3'>
            <img style={{ height: "80px" }} src={footimg}>

            </img>
          </div>

          <hr className='foot-hr' />

          <div className='row '>

            <div className='col-md-2'>

              <ul style={{ listStyle: 'none' }}>
                <li className='text-light' style={{ fontFamily: 'sans-serif' }}><b>About</b></li>
                <li className='text-light'>About SIE</li>
                <li className='text-light'>Careers</li>
                <li className='text-light'>PlayStation Studios</li>
                <li className='text-light'>Corporate</li>

              </ul>
            </div>

            <div className='col-md-2'>

              <ul style={{ listStyle: 'none' }}>
                <li className='text-light' style={{ fontFamily: 'sans-serif' }}><b>Products</b></li>
                <li className='text-light'>PS5</li>
                <li className='text-light'>PS4</li>
                <li className='text-light'>PS VR2</li>
                <li className='text-light'>Accessories</li>
                <li className='text-light'>Games</li>


              </ul>

            </div>

            <div className='col-md-2'>


              <ul style={{ listStyle: 'none' }}>
                <li className='text-light' style={{ fontFamily: 'sans-serif' }}><b>Values</b></li>
                <li className='text-light'>Environment</li>
                <li className='text-light'>Accessibility</li>
                <li className='text-light'>Online safety</li>
                <li className='text-light'>Diversity, equity & inclusion</li>



              </ul>

            </div>

            <div className='col-md-2'>


              <ul style={{ listStyle: 'none' }}>
                <li className='text-light' style={{ fontFamily: 'sans-serif' }}><b>Support</b></li>
                <li className='text-light'>Support hub</li>
                <li className='text-light'>Playstation Safety</li>
                <li className='text-light'>PSN Status</li>
                <li className='text-light'>PlayStation Repairs</li>
                <li className='text-light'>Password reset</li>



              </ul>

            </div>

            <div className='col-md-2'>


              <ul style={{ listStyle: 'none' }}>
                <li className='text-light' style={{ fontFamily: 'sans-serif' }}><b>Resources</b></li>
                <li className='text-light'>PSN terms of service</li>
                <li className='text-light'>PS Store cancellation policy</li>
                <li className='text-light'>Age ratings</li>
                <li className='text-light'>Health warning</li>
                <li className='text-light'>Developers</li>
                <li className='text-light'>Glossary</li>




              </ul>

            </div>

            <div className='col-md-2'>

              <ul style={{ listStyle: 'none' }}>
                <li className='text-light' style={{ fontFamily: 'sans-serif' }}><b>Connect</b></li>
                <li><i class="fa-brands fa-instagram fa-lg" style={{ color: "#fafcff" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <i class="fa-brands fa-twitter fa-lg" style={{ color: "#fafcff" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <i class="fa-brands fa-square-facebook fa-lg" style={{ color: "#fafcff" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;



                  <i class="fa-brands fa-youtube fa-lg" style={{ color: "#fafcff" }}></i>
                </li>
                <li className='text-light'>iOS app</li>
                <li className='text-light'>Android App</li>




              </ul>



            </div>

          </div>

          <hr className='foot-hr' />

          <div style={{ marginTop: '-3.5em' }} id='footlogo2' className='d-flex w-25   '>
            <img style={{ height: "180px" }} src={footimg2}>

            </img>
          </div>
          <div style={{ marginTop: '-2.5em' }} className='d-flex flex-wrap ' >
            <p className='text-light mb-1'>© 2023 Sony Interactive Entertainment Europe Limited (SIEE)</p>
            <p style={{ fontSize: '14px' }} className='text-light mb-2'>All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners. All rights reserved.&nbsp;<a className='text-light' href='#'>More info</a> </p>
          </div>

          <hr className='foot-hr' />

          <div id='lower-foot' className='d-flex flex-wrap flex-row justify-content-between py-3'>
            <div className='text-light' style={{ listStyle: 'none' }}>

              <a href='#'>
                <i id='india' className="fa-solid fa-earth-asia text-white " ></i>
              </a>&nbsp;&nbsp;&nbsp;India &nbsp;&nbsp;
              <i id='arrow' className="fa-solid fa-chevron-right fa-sm text-white" ></i>

            </div>

            <div id='last-foot' className='text-white  '>

              <a style={{ fontSize: '14px' }} className='text-white text-decoration-none ' href='#'>Legal</a>&nbsp;|&nbsp;
              <a style={{ fontSize: '14px' }} className='text-white text-decoration-none' href='#'>Privacy policy</a>&nbsp;|&nbsp;
              <a style={{ fontSize: '14px' }} className='text-white text-decoration-none' href='#'>Website terms of use</a>&nbsp;|&nbsp;
              <a style={{ fontSize: '14px' }} className='text-white text-decoration-none' href='#'>Site Map</a>&nbsp;|&nbsp;
              <a style={{ fontSize: '14px' }} className='text-white text-decoration-none' href='#'>Cookies Policy</a>&nbsp;|&nbsp;
              <a style={{ fontSize: '14px' }} className='text-white text-decoration-none' href='#'>Software Usage Terms</a>

            </div>

          </div>



        </footer>
      </div>

    </>
  )
}

export default Footer
