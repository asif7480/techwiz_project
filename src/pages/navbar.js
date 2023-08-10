import React from 'react'

const Navbar = () => {
    return (
        <><nav className="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
            <div className="container">

                <a className="navbar-brand" href="index.html">
                    <img src="./assests/images/logo/soccerverse.png" />
                </a>

                {/* <!-- Toggler Start --> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="bi bi-list"></span>
                </button>


                {/* <!-- Collapse --> */}

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">

                        <li className="nav-item">
                            <a className="nav-link active" id="home" href="index.html">
                                Home
                            </a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                            <a className="nav-link" href="./gallery.html">Gallery</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Top Scores</a>
                        </li>

                        <li className="nav-item"><a className="nav-link " href="#">Feedback</a></li>


                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>

                    <button type="submit"><i>View Score Board</i></button>

                </div>

                {/* <!-- Search Bar --> */}
            </div>
        </nav></>
    )
}

export default Navbar