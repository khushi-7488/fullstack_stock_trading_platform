import React from 'react';
function Hero() {
    return (
        <div style={{backgroundColor:"#f4f3ee"}}>
            <div className='container mb-5 p-4' >
                <div className='row'>
                    <div className='hero'>
                        <h1>Support Portal</h1>
                        <button className='btn btn-primary' style={{ width: "10%" }}>My tickets</button>
                    </div>
                    <div className="mb-3 mt-5 input-group input-group-lg">
                        <span class="input-group-text" id="inputGroup-sizing-lg"><i class="fa fa-search" aria-hidden="true"></i></span>
                        <input style={{fontSize:"18px"}} type="text" class="form-control" aria-label="Sizing example input" placeholder='Eg, How do I open my Account, How do i activate F&O' ria-describedby="inputGroup-sizing-lg" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;