import PropTypes from 'prop-types';

export const AudioComponent = ({ song, songImage }) => {
    return (
        <>
            <div className="text-center d-block">
                <h1 className="fs-1 text-warning">YOU'VE DONE IT!!!</h1>
                <h6 className=" text-warning">PLAY THE SONG!!!</h6>
            </div>
            <div className="container d-flex justify-content-center my-4 mb-5" style={ { width: "18rem" } }>
                <div id="mobile-box">
                    <div className="card">
                        <div >
                            <img className="card-img-top" src={ songImage }
                                alt="Celebrating dancing guy" />
                        </div>
                        <div className="card-body text-center bg-warning">
                            <audio id="music" preload="true" controls>
                                <source src={ song } />
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

AudioComponent.propTypes = {
    song: PropTypes.any.isRequired,
    songImage: PropTypes.string.isRequired

};
