import React from 'react'
import gimg from './Gow-images/gowlogo.png'
import '../App.css'


function Gow() {
    return (
        <>
            <div>
                <div className='gow-body d-flex flex-column justify-content-end' style={{ width: '100%', height: '560px', border: '1px solid' }}>

                    <div className='container gow-logo d-flex align-items-md-start flex-column py-5'>
                        <div className='col-md-5 col-sm-8'>

                            <img className='gow-img' style={{ height: '220px' }} src={gimg}>
                            </img>

                            <div className='gow-content'>

                                <h1 className='text-white'>The Norse saga continues</h1>

                                <p className='text-white'>Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go, available now on PS4 & PS5
                                </p>

                                <button className='btn btn-md btn-danger'>Buy now</button>

                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}

export default Gow
