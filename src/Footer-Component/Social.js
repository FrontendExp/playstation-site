import React from 'react'
import '../App.css'

import media1 from '../Footer-Component/mediaimages/twitter.webp'
import media2 from '../Footer-Component/mediaimages/facebook.webp'
import media3 from '../Footer-Component/mediaimages/instagram.webp'
import media4 from '../Footer-Component/mediaimages/youtube.webp'
function Social() {
    return (
        <>
            <div id='ps4container'  className='container-fluid '>

                <div id='media-head' className='justify-content-center'>

                <h2 style={{fontFamily:'sans-serif'}} className='text-center'>Follow us on social media</h2>

                </div>

                <div id='medialogo' className='row justify-content-center p-4 '>

                    <div id='media-1' className=' media col-md-1 '>

                        <img id='mediaimg1' type="button"  src={media1} style={{height:'100px'}}>
                        </img>
                        
                    </div>

                    <div id='media-2' className=' media col-md-1'>
                         
                    <img id='mediaimg2' type="button"  src={media2} style={{height:'100px'}}>
                        </img>
                    </div>

                    <div id='media-3' className=' media col-md-1'>
                     <img id='mediaimg3' type="button"  src={media3} style={{height:'100px'}}>
                        </img>
                    </div>

                    <div  id='media-4' className='media col-md-2'>
                    <img id='mediaimg4' type="button"   src={media4} style={{height:'100px'}}>
                        </img>

                    </div>

                </div>

            </div>



        </>
    )
}
export default Social
