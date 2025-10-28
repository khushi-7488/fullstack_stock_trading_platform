import React from 'react';

function Universe() {
  return (

    <div className='container p-5'>
      <div className='row text-center'>
        <h1 className='mb-4 fs-4'>The Zerodha Universe</h1>
        <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 p-3">
          <img src="media/images/smallcaselogo.png" alt="" />
          <p className='text-muted mt-3' style={{ fontSize: "13px" }}>Thematic investing <br /> platform
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/streakLogo.png" alt="" style={{ width: "40%" }} />
          <p className='text-muted mt-3' style={{ fontSize: "13px" }}>
            Systematic trading platform <br />
            that allows you to create and backtest<br />
            strategies without coding.</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" alt="" style={{ width: "55%" }} />
          <p className='text-muted mt-3' style={{ fontSize: "13px" }}>
            Options trading platform that lets you<br />
            create strategies, analyze positions, and examine<br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" alt="" style={{ width: "55%" }} />
          <p className='text-muted mt-3' style={{ fontSize: "13px" }}>Thematic investing <br /> platform
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/goldenPiLogo.png" alt="" style={{ width: "55%" }} />
          <p className='text-muted mt-3' style={{ fontSize: "13px" }}>Investment research platform <br/>
            that offers detailed insights on stocks,<br/>
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" alt="" style={{ width: "40%" }} />
          <p className='text-muted mt-3' style={{ fontSize: "13px" }}> Personalized advice on life<br />
            and health insurance. No spam<br />
            and no mis-selling.</p>
        </div>
        <button className='mt-5 btn btn-primary ' style={{width:"30%", margin:"0 auto" }}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;