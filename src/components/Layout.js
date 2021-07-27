import React from 'react';
import {Link} from "react-router-dom";

const Layout = ({children}) => {

    return (
        <div className="container">
            <div className="header">
                <div className="logo"/>
                <div className="nav">
                    <Link to="/">Profile</Link>
                    <Link to="/samples">Portfolio/Code Samples</Link>
                </div>
            </div>

            <div className="content">
                {children}
            </div>

            <div className="footer small-margin-top">
                <div>San Jose State University</div>
                <div className="small-margin-left">
                    |  &nbsp;Contact me at&nbsp;
                    <a href="mailto:86naren@gmail.com">86naren@gmail.com</a>
                </div>
            </div>
        </div>
    );
};

Layout.propTypes = {};

export default Layout;