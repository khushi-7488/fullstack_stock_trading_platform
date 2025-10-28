import React from 'react';
function Team() {
    return (

        <div className='container'>
            <div className='row'>
                <hr />
                <h1 className='text-center fs-2 mb-5 mt-5'>People</h1>
                <div className='col-6 text-center mt-5 mb-5'>
                    <img src="media\images\nithinKamath.jpg" alt=""
                        style={{ borderRadius: "50%", width: "50%" }} className='mb-4'/>
                    <h5 className='text-muted'>Nithin Kamath</h5>
                    <p className='text-muted'>Founder, CEO</p>
                </div>
                <div className='col-6 mt-5 mb-5' style={{lineHeight: "2.2"}}>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>
                        Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
                        <a href="">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;