import React from "react";
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    linkName,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-7 p-5">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col-5 mt-5 p-5">
                    <h1 className="mb-4 fs-2">{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mb-4">
                        <a style={{ textDecoration: "none" }} href={tryDemo}>
                            {linkName}{" "}
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a
                            href={learnMore}
                            style={{ marginLeft: "50px", textDecoration: "none" }}
                        >
                            Learn More{" "}
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" />
                        </a>
                        <a href={appStore}>
                            <img
                                src="media/images/appStoreBadge.svg"
                                style={{ marginLeft: "20px" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
