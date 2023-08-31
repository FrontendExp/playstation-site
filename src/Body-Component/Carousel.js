
import React from 'react'

import '../App.css'

import Image1 from './Images/Image1.webp'

import Image2 from './Images/Image2.webp'

import Image3 from './Images/Image3.jpeg'

import Image4 from './Images/Image4.webp'

import Image5 from './Images/Image5.webp'

import Image6 from './Images/Image6.webp'

function Carousel() {
    return (
        <>
            
            <div className='carousel-body container-fluid d-flex flex-wrap justify-content-center'>

                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Image1} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={Image2} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={Image3} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={Image4} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={Image5} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src={Image6} class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prevv" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-iconn" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-nextt" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-iconn" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>


                </div>


                <div className='container d-flex flex-wrap justify-content-center   pt-5'>
                    <div className=''>
                        <img id='sm-pic' src={Image1} style={{ width: '210px', height: '118px', borderRadius: '15px' }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></img>
                        <img id='sm-pic' src={Image2} style={{ width: '210px', height: '118px', borderRadius: '15px' }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></img>
                        <img id='sm-pic' src={Image3} style={{ width: '210px', height: '118px', borderRadius: '15px' }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></img>
                        <img id='sm-pic' src={Image4} style={{ width: '210px', height: '118px', borderRadius: '15px' }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></img>
                        <img id='sm-pic' src={Image5} style={{ width: '210px', height: '118px', borderRadius: '15px' }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></img>
                        <img id='sm-pic' src={Image6} style={{ width: '210px', height: '118px', borderRadius: '15px' }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></img>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Carousel





