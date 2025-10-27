import React from 'react';
function Pricing() {
    return (
        <div className='container p-4'>
            <div className='row mb-5'>
                <div className='col-4 '>
                    <h1 className='mb-4'>Unbeateble pricing</h1>
                    <p>we pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges</p>
                    <a style={{textDecoration: "none"}} href="">See pricing &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 '>
                    <div className='row text-center'>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-4'>&#8377;0</h1>
                            <p> Free equity delivery and <br/> direct mutual funds </p>
                        </div>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-4'>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;