import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className='container mb-5'>
            <div className='row text-center'>
                <img src="media/images/404-notfound.png" alt="" />
                <Link to="/">
                    <button style={{ width: "20%", margin: "0 auto" }} className='btn btn-primary p-2 fs-5 mb-5'>Go to HomePage</button>

                </Link>
            </div>
        </div>
    );
}

export default NotFound;