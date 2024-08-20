import React from 'react'

const DashBoard = () => {
    return (
        <div>
            <div className="container">
                <h1><center><i>MY COURSES</i></center></h1>
                <br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/exam" class="btn btn-primary">COMPLETED</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="..." class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">COMPLETED</a>
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard