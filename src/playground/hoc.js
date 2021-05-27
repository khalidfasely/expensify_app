import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <div>
            <h1>Info</h1>
            <p>The info is: {props.Info}</p>
        </div>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Don't share this details.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in to view the Info</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} Info="These are the details."/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} Info="These are the details."/>, document.getElementById('app'));