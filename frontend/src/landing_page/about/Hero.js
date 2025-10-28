import React from 'react';
function Hero() {
    return (
        <div className='container p-5'>
            <div className='row  p-5 mb-5 '>
                <h1 className='text-center fs-2 '> We pioneered the discount broken model in India. <br /> Now we are breaking ground with our technology. </h1>
            </div>
            <div className='row p-5 border-top mt-5 '>
                <div className='col-6  p-5'>
                    <p>
                        We kick started operations on 50th August, 2010 and 10 with the goal of breaking all barriers that traders and investors face in India terms of cost, support, and technology. we named the company Zerodha a combination of zero and "Rodha," the Sanskrit word for barrier.
                    </p>
                    <p>
                        Today our disruptive pricing models and in-house technology have made us the biggest stockbroker in India.
                    </p>

                    <p>over 1,00,00,000 clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>

                </div>
                <div className='col-6 p-5'>
                    <p> In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors </p>
                    <p> <a href="" style={{textDecoration:"none"}}>Rainmatter</a> , our fine take fund and incubator has invested in several fine tech startups with the goal of growing the Indian capital markets.</p>
                    <p> And yet we're always up to something new everyday catch up on the latest updates on our blog or the media saying about us </p>
                </div>
            </div>
        </div>

    );
}

export default Hero;