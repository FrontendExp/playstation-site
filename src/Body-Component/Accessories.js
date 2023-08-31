import React from 'react'
import { useState } from 'react'

import Acc1 from './Images/Acc1.webp'
import Acc2 from './Images/Acc2.webp'
import Acc3 from './Images/Acc3.webp'
import Acc4 from './Images/Acc4.webp'
import Acc5 from './Images/Acc5.webp'
import Acc6 from './Images/Acc6.webp'

import '../App.css'

function Accessories() {

    const [viewimage, setViewimage] = useState(Acc1)


    const handleImage = (imageSrc) => {
        setViewimage(imageSrc)

    }

    return (
        <>

            <div className='container d-flex flex-wrap p-5 justify-content-center '>

                <img id='bigimg' src={viewimage} style={{ height: '320px' }}>

                </img>

            </div>

            <div id='collection' className='carousel-slider d-flex flex-wrap justify-content-center'>


                <div style={{ width: '230px', height: '200px', border:'none' }}>
                    <img id='img1'
                        onClick={() => {
                            handleImage(Acc1)
                        }}
                        style={{ height: '140px', marginLeft: '3em' }} src={Acc1}>
                    </img>
                    <p className='text-center'>PS5 Console</p>
                </div>
                <div style={{ width: '230px', height: '200px' }}>
                    <img id='img1'

                        onClick={() => {
                            handleImage(Acc2)
                        }}
                        style={{ height: '70px', width: '160px', marginTop: '2em', marginLeft: '2em' }} src={Acc2}>
                    </img>

                    <p className='text-center pt-4' >DualSense Wireless <br></br> Controller</p>
                </div>
                <div style={{ width: '230px', height: '200px' }}>
                    <img id='img1'

                        onClick={() => {
                            handleImage(Acc3)
                        }}
                        style={{ height: '100px', marginTop: '2em', marginLeft: '1.5em' }} src={Acc3}>
                    </img>

                    <p className='text-center'>Pulse 3D Wireless<br></br>Headset </p>
                </div>
                <div style={{ width: '230px', height: '200px' }}>
                    <img id='img1'

                        onClick={() => {
                            handleImage(Acc4)
                        }}
                        style={{ height: '100px', marginTop: '2em', marginLeft: '1.5em', }} src={Acc4}>
                    </img>

                    <p className='text-center pt-2'>DualSense Edge</p>
                </div>
                <div style={{ width: '230px', height: '200px' }}>
                    <img id='img1'

                        onClick={() => {
                            handleImage(Acc5)
                        }}
                        style={{ height: '130px', marginTop: '1em', marginLeft: '2.5em' }} src={Acc5}>
                    </img>

                    <p className='text-center'>Media Remote</p>
                </div>
                <div style={{ width: '230px', height: '200px' }}>
                    <img id='img1'

                        onClick={() => {
                            handleImage(Acc6)
                        }}
                        style={{ height: '130px', marginTop: '1em', marginLeft: '3em' }} src={Acc6}>
                    </img>

                    <p className='text-center'>HD Camera</p>
                </div>

            </div>






        </>
    )
}

export default Accessories
