import React from 'react'

import Image2 from './Images/Image2.webp'
import Image3 from './Images/Image3.jpeg'
import Image4 from './Images/Image4.webp'
import Image5 from './Images/Image5.webp'
import Image6 from './Images/Image6.webp'

import './minicarousel.css'


function Minicarousel() {

    return (
        <>

            <div id='minibg' className=' d-flex justify-content-center w-100 '>



                <div id="miniCarousel" class="carousel slide mt-5 p-3 ">

                    <div>
                        <h5 className='text-light'>New releases</h5>
                        <h5 className='text-light text-lg'>Great PS5 and PS4 games available now</h5>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#miniCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#miniCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                    <div class="carousel-inner justify-content-center">

                        <div class=" container p-5 d-flex flex-wrap px-2 carousel-item active">

                            <div className='mini-carousel' id='mini1'>


                            </div>
                            <div className='mini-carousel' id='mini2'>


                            </div>
                            <div className='mini-carousel' id='mini3'>


                            </div>
                            <div className='mini-carousel' id='mini4' >


                            </div>
                            <div className='mini-carousel' id='mini5' >


                            </div>
                            <div className='mini-carousel' id='mini6' >


                            </div>
                            <div className='mini-carousel' id='mini7' >


                            </div>
                            <div className='mini-carousel' id='mini8' >


                            </div>
                            <div className='mini-carousel' id='mini9'>


                            </div>
                            <div className='mini-carousel' id='mini10' >


                            </div>
                            <div className='mini-carousel' id='mini11' >


                            </div>
                            <div className='mini-carousel' id='mini12'>


                            </div>

                        </div>
                        <div class="carousel-item">
                            <div class=" container p-5 d-flex flex-wrap px-2 carousel-item active">

                                <div className='mini-carousel' id='mini1'>


                                </div>
                                <div className='mini-carousel' id='mini2'>


                                </div>
                                <div className='mini-carousel' id='mini3'>


                                </div>
                                <div className='mini-carousel' id='mini4' >


                                </div>
                                <div className='mini-carousel' id='mini5' >


                                </div>
                                <div className='mini-carousel' id='mini6' >


                                </div>
                                <div className='mini-carousel' id='mini7' >


                                </div>
                                <div className='mini-carousel' id='mini8' >


                                </div>
                                <div className='mini-carousel' id='mini9'>


                                </div>
                                <div className='mini-carousel' id='mini10' >


                                </div>
                                <div className='mini-carousel' id='mini11' >


                                </div>
                                <div className='mini-carousel' id='mini12'>


                                </div>

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



                </div>

            </div>

        </>
    )
}

export default Minicarousel


