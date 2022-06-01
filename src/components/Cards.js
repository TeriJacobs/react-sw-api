import React from 'react';
import {Link} from 'react-router-dom';

const Cards = ({ results, page }) => {
    let display;
    if(results) {
        display = results.map((x) => {
            let {id, name, homeworld, height, mass, gender} = x;
            return(
                <Link to={`${page}${id}`} key={id} className="col-sm-6 col-md-4=3 col-lg-4 positon-relative link-style text-dark  glow-card card-deisgn">
                    <div className="">
                        <div className="content">
                            <div className="fs-4 fw-bold mb-3">{name}</div>
                            <div className="row">
                                <div className="col">
                                    <div className="fs-7">height</div>
                                    <div className="fs-6">{height} cm</div>
                                </div>
                                <div className="col">
                                    <div className="fs-7">Mass</div>
                                    <div className="fs-6">{mass} kg</div>
                                </div>
                                <div className="col">
                                    <div className="fs-7">Gender</div>
                                    <div className="fs-6">{gender}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Link>
            );
        });
    } else {
        display ="results processing..."
    }

    return <>{display}</>
 } ;
export default Cards;