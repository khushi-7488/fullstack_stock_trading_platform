import React from 'react';
function Stats() {
    return (
        <div className='container  p-5'>
            <div className='row p-5'>
                <div className='col-6 p-4'>
                    <h2 className=' mb-5'>Trust with confidence</h2>
                    <div>
                        <h4 >Customer first always</h4>
                        <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh crores worth of equity investments.</p>
                    </div>
                    <div>
                        <h4>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks spam, "gamification, or annoying  push notifications. high quality apps that you use at your pace, the way you like.</p>
                    </div>
                    <div>
                        <h4>The Zerodha universe</h4>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div>
                        <h4>Do better with money</h4>
                        <p className='text-muted'>With initiatives like nidge and kill switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-6'>
                    <img src="media/images/ecosystem.png" alt="" style={{ width: "85%" }} className='p-3' />
                    <div className='text-center '>
                        <a className='mx-5' style={{ textDecoration: "none" }} href="">Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a className='mx-5' style={{ textDecoration: "none" }} href="">Try kite demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;