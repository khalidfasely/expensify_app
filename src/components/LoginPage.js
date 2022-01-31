import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginWithGitHub } from '../actions/auth';

export const Login = ({ startLogin, startLoginWithGitHub }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>it's time to get your expenses under control.</p>
            <button className="button button--login google_login" onClick={startLogin}>
                Login with Google
            </button>
            <button className="button button--login github_login" onClick={startLoginWithGitHub}>
                Login with GitHub
            </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginWithGitHub: () => dispatch(startLoginWithGitHub())
});

export default connect (undefined, mapDispatchToProps)(Login);

//<img className="icon" src="./images/google.png" alt='google icon' />
//<img className="icon" src={githubIcon} alt='github icon' />