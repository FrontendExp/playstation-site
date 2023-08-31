import React from 'react'
import Logo from '../Images/Logo.png'

import '../App.css'

function Nav() {
    return (
        <>

            <div>
                <div id='playstation-nav' className='container-fluid d-flex flex-row justify-content-end '>

                    <img src={Logo} alt='' style={{ width: "100px", height: '25px', }}></img>

                </div>
            </div>

            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><i class="fa-brands fa-playstation fa-lg" style={{ color: "#2977ff", height: '' }}></i></a>
                        <p class="d-inline-flex gap-3 d-flex w-100 pt-3">
                            <a className='text-dark' type='button' style={{ textDecoration: 'none' }} data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Games</a>
                            <a className='text-dark' type='button' style={{ textDecoration: 'none' }} data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Hardware</a>
                            <a className='text-dark' type='button' style={{ textDecoration: 'none' }} data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Services</a>
                            <a className='text-dark' type='button' style={{ textDecoration: 'none' }} data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">News</a>
                            <a className='text-dark' type='button' style={{ textDecoration: 'none' }} data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Shop</a>
                            <a className='text-dark' type='button' style={{ textDecoration: 'none' }} data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Support</a>



                            <div class="row">
                            <div class="">
                                <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <div class="card card-body d-flex flex-row w-100  ">

                                        <div id='ps5' className='games-part'>
                                            
                                        </div>

                                        <div id='ps5'  className='games-part'>
                                        
                                        </div>

                                        <div id='ps5'  className='games-part'>
                                            
                                        </div  >

                                        <div id='ps5'  className='games-part'>
                                            
                                        </div>
                                        
                                        <div id='ps5'  className='games-part'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample2">
                                    <div class="card card-body">
                                        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                    </div>
                                </div>
                            </div>
                        </div>
                        </p>
                        

                        <div class="input-wrapper">
                            <button class="icon ">
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
                                </svg>
                            </button>
                            <input placeholder="Search PlayStation.com" class="input text-dark" name="text" type="text"></input>
                        </div>

                    </div>

                </nav >
            </div >



        </>
    )
}

export default Nav
