import React from 'react'

const QuickExam = () => {
    return (
        <div>
            <div className="container">
                <h1><center><i>QUICK EXAM</i></center></h1>
                <br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Question1:--Explain the algorithm for binary search</label>
                              
                            </div>
                            <div className="col col-12 col-sm-6-col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-control">Give me your answer</label>
                             <textarea name="" id="" className="form-control"></textarea>
                            </div>
                           
                            
                            <div className="col col-12 col-sm-12-col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center><a href='/certify'><button className="btn btn-success">GO TO CERTIFICATIONS</button></a></center>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickExam