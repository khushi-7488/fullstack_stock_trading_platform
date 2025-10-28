import React from 'react';
import { Link } from "react-router-dom"
function CreateTicket({ id_name, logo, ticketheading, link1, link2, link3, link4, link5 }) {
    return (

        <div className='container'>
            <div className='row p-3'>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id_name}`} aria-expanded="true" aria-controls="collapseOne">
                                <h5>{logo}&nbsp;&nbsp;&nbsp;{ticketheading}</h5>
                            </button>
                        </h2>
                        <div id={id_name} class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                    <li className='mb-3'><Link style={{ textDecoration: "none" }}>{link1}</Link></li>
                                    <li className='mb-3'><Link style={{ textDecoration: "none" }}>{link2}</Link> </li>
                                    <li className='mb-3'><Link style={{ textDecoration: "none" }}>{link3}</Link> </li>
                                    <li className='mb-3'><Link style={{ textDecoration: "none" }}>{link4}</Link> </li>
                                    <li className='mb-3'><Link style={{ textDecoration: "none" }}>{link5}</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;