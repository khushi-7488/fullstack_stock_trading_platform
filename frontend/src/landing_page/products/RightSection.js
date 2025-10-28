import React from 'react';
function RightSection({
    imageURL,
    productName,
    productDescription,
    link2,
    learnMore,
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5 mt-5 p-5">
                    <h1 className="mb-4 fs-2" style={{paddingTop:"110px"}}>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mb-4">
                        <a
                            href={learnMore}
                            style={{  textDecoration: "none" }}
                        >
                            {link2}{" "}
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="col-7 p-5">
                    <img src={imageURL} alt="" />
                </div>

            </div>
        </div>

    );
}

export default RightSection;