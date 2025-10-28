import React from 'react';
function Hero() {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5 p-3 text-center'>
                <h1 >Zerodha Products</h1>
                <h3 className='text-muted mt-2'>Sleek, modern, and intuitive trading plaforms</h3>
                <p className='fs-6 mt-2'>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>

            </div>
        </div >
    );
}

export default Hero;