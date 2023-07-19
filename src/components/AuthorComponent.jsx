import PropTypes from 'prop-types';

export const AuthorComponent = ({ authorName, url }) => {
    return (
        <div className="card container author-title text-center bg-dark">
            <div >
                <p className='pt-3 text-white'>Made with <span><i className="bi bi-peace-fill"></i></span> and <span><i className=" text-danger bi bi-heart-fill"></i></span> <a href={ url } target="blank">{ authorName }</a></p>
            </div>
        </div>
    );
};

AuthorComponent.propTypes = {
    authorName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

AuthorComponent.defaultProps = {
    authorName: 'AuthorNameHere'
};