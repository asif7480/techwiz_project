import React from 'react'

const Home = () => {
    return (
        <>

            {/* <!--==================== BANNER START ============================= --> */}
            <section className="banner " id="banner">
                {/* <!-- <img src="Assests/" alt=""> --> */}
                <div className="banner-content">
                    <h3>Welcome to </h3>
                    <h1><span className="multiple-text"></span></h1>
                    {/* <!-- <h3>To
                     E-Studiez Portal</h3> --> */}
                    <p>where passion meets the pitch! Immerse yourself in the world's most beloved sport with us. From gripping
                        match analyses to exclusive player interviews, our website is your ultimate destination for everything
                        soccer. Whether you're a dedicated fan or a curious newcomer, join us as we celebrate the beauty,
                        excitement, and global unity that soccer brings to our lives.</p>

                </div>
            </section>

            {/* <!--==================== BANNER END ============================= --> */}


            <section>
                <div className="container">
                    <div className="list-group">
                        <ul>
                            <button className="opt">
                                <li>Match Schedules</li>
                            </button>
                            <button className="opt">
                                <li>Scores</li>
                            </button>
                            <button className="opt">
                                <li>Team Lineups</li>
                            </button>
                            <button className="opt">
                                <li>Statistics</li>
                            </button>
                        </ul>
                    </div>
                    <div className="schedules section">
                        <p className="h1" align="center">Schedules</p>
                        <div className="match1">
                            <div className="row">
                                <div className="col">
                                    <img src="./assests/images/team/img5.jfif" alt="" />
                                </div>
                                <div className="col versus">
                                    <img className="vsimg" src="./assests/images/team/vs.png" alt="" />
                                </div>
                                <div className="col">
                                    <img src="./assests/images/team/img6.jfif" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h4>Team A</h4>
                                </div>
                                <div className="col">

                                </div>
                                <div className="col">
                                    <h4>Team B</h4>
                                </div>
                            </div>
                            <div className="row">
                                <center>
                                    <h2>Date: 28-august-2023</h2>
                                    <h2>Venue: Portugal Stadium</h2>


                                </center>
                            </div>

                        </div>

                        <div className="match2">
                            <div className="row">
                                <div className="col">
                                    <img src="./assests/images/team/img2.png" alt="" />
                                </div>
                                <div className="col versus">
                                    <img className="vsimg" src="./assests/images/team/vs.png" alt="" />
                                </div>
                                <div className="col">
                                    <img src="./assests/images/team/img4.png" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h4>Team C</h4>
                                </div>
                                <div className="col">

                                </div>
                                <div className="col">
                                    <h4>Team D</h4>
                                </div>
                            </div>
                            <div className="row">
                                <center>
                                    <h2>Date: 15-September-2023</h2>
                                    <h2>Venue: Canada Stadium</h2>


                                </center>
                            </div>

                        </div>
                    </div>
                    <div className="scoreboard ">
                        <div className="row">
                            <h2 align="center">ScoreBoard</h2>
                            <div className="col">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Teams</th>
                                            <th>Points</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody id="score">
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div className="lineup section">
                        <p className="h1" align="center">Line Up</p>
                        <div className="row">
                            <div className="col">
                                <h2 align="center">Team A Lineup</h2>
                                <table className="table table-dark" id="teamTable">
                                    <thead>
                                        <tr>
                                            <th>Players</th>
                                            <th>Substitue</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody">

                                    </tbody>
                                </table>
                                <h2 align="center">Team B Lineup</h2>
                                <table className="table table-dark">
                                    <thead>
                                        <tr>
                                            <th>Players</th>
                                            <th>Substitue</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody1">

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div className="stats section">
                        <p className="h1" align="center">Statistics</p>
                        <table className="table table-dark" id="tblstats">
                            <thead>
                                <tr>
                                    <th>Team Name</th>
                                    <th>Position</th>
                                    <th>League</th>
                                    <th>Total Matches</th>
                                    <th>Wins</th>
                                    <th>Losses</th>
                                    <th>Draws</th>
                                    <th>Goals</th>
                                </tr>
                            </thead>
                            <tbody id="stats">

                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home