import PropTypes from 'prop-types';

export const SiteHeader = ({ heading, subHeading }) => {
    return (
        <div className="jumbotron text-white container text-center">
            <h1 className="display-4">{ heading }</h1>
            <p className="lead">{ subHeading }</p>
        </div>
    );
};

SiteHeader.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired
};

SiteHeader.defaultProps = {
    heading: 'Your Tasks',
    subHeading: 'Here you can add and delete tasks as well as set task progress as done. '
}


