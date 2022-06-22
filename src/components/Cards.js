import React from 'react';
import {Link} from 'react-router-dom';

const Cards = ({ results, page }) => {
    let display;
    if(results) {
        display = results.map((x) => {
            let {id, name, homeworld, height, mass, gender, url} = x;
            console.log(x);
            console.log(url);//this retrieves the url value in the character object.
            let seperate = url.split("https://swapi.dev/api/people/");
            console.log(seperate);
            let idInUrl = seperate[1]//retrieve only the id in the url
            console.log(idInUrl);
            return(
                <Link to={`${page}${idInUrl}`} key={id} className="col-sm-6 col-md-4=3 col-lg-4 positon-relative link-style text-dark  glow-card card-deisgn">
                    <div className="">
                        <div className="content">
                            <div className="fs-4 fw-bold mb-3">{name}</div>
                            <div className="moreDetails">
                                <div className="row">
                                    <div className="col">
                                        <div className="fs-7 text-decoration-underline">height</div>
                                        <div className="fs-6">{height} cm</div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-decoration-underline">Mass</div>
                                        <div className="fs-6">{mass} kg</div>
                                    </div>
                                    <div className="col">
                                        <div className="fs-7 text-decoration-underline">Gender</div>
                                        <div className="fs-6">{gender}</div>
                                    </div>
                                </div>
                                <div className="row text-center mt-2">
                                    <div className="fs-7 text-decoration-underline">Homeworld</div>
                                    <div className="fs-6">{homeworld}</div>
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