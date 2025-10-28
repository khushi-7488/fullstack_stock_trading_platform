import React from 'react';
function Education() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img className='p-4' style={{width:"75%"}} src="media/images/Education.svg" alt=""/>
                </div>
                <div className='col-6 mt-4'>
                    <h1 className='fs-2 mb-4'>Free and open market education</h1>
                    <p> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a style={{textDecoration: "none"}} href="">Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-5'> TradingQ&A, the most active trading and investment community in India for all your market related queries </p>
                    <a style={{textDecoration: "none"}} href="">TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;