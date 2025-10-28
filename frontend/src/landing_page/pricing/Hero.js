import React from 'react';
function Hero() {
    return (
        <div className='container mt-5 mb-5 p-5'>
            <div className='row text-center'>
                <h1 > Pricing</h1>
                <p className='mt-4 mb-5'>Free equity investments and flat &#8377;20 traday and F&Q trades</p>
                <hr />
                <div className='col-4 '>
                    <img src="media/images/pricing0.svg" alt="" style={{ width: "60%" }} />
                    <h1 className='fs-2 mb-4'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 '>
                    <img src="media/images/intradayTrades.svg" alt="" style={{ width: "60%" }} />
                    <h1 className='fs-3 mb-4'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per <br/> executed order on intraday trades across <br/> equity, currency, and commodity trades. Flat <br/> ₹20 on all option trades.</p>
                </div>
                <div className='col-4 '>
                    <img src="media/images/pricing0.svg" alt="" style={{ width: "60%" }} />
                    <h1 className='fs-2 mb-4'>Free equity delivery</h1>
                    <p className='text-muted'>All direct mutual fund investments are <br/> absolutely free — ₹ 0 commissions & DP <br/> charges.</p>
                </div>

            </div>

        </div>
    );
}

export default Hero;