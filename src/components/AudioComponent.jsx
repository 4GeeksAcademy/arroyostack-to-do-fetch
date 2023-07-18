import React from 'react';

import theBass from '../assets/audio/all-about-bass.mp4';

export const AudioComponent = ({ image }) => {
    return (
        <>
            <div className="text-center">
                <h1 className="fs-1 text-warning">YOU'VE DONE IT!!!</h1>
                <h6 className=" text-warning">PLAY THE SONG!!!</h6>
            </div>
            <div className="container d-flex justify-content-center my-4 mb-5" style={ { width: "18rem" } }>
                <div id="mobile-box">

                    <div className="card">
                        <div >
                            <img className="card-img-top" src="https://i.pinimg.com/originals/a7/c3/d2/a7c3d2d5f3d82151594ae72f89cf467c.gif"
                                alt="Celebrating dancing guy" />
                        </div>
                        <div className="card-body text-center bg-warning">
                            <audio id="music" preload="true" controls>
                                <source src={ theBass } />
                            </audio>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
