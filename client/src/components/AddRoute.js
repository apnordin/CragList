import React from 'react';

export default function AddRoute() {

    return(
        <div className="container mx-2">
            <div className="row">
                <h3 className="modalheader">Add a New Route</h3>
            </div>

            <div className="row form-group">
                <div className="col-sm-6 mt-4">
                    <label for="routename">Route Name</label>
                    <input
                        className="form-control addrouteform"
                        type="text"
                        placeholder="Route Name"
                        name="routename"
                        id="routename"
                        // onChange={e => setFirstname(e.target.value)}
                        />
                </div>
                <div className="col-sm-6 mt-4">
                    <label for="type">Type of Climb</label>
                    <input
                        className="form-control addrouteform"
                        type="text"
                        placeholder="Boulder, lead, top-rope?"
                        name="type"
                        id="type"
                        // onChange={e => setFirstname(e.target.value)}
                        />
                </div>
          </div>

          <div className="row form-group">
                <div className="col-sm-6 mt-4">
                    <label for="grade">Climbing Grade</label>
                    <input
                        className="form-control addrouteform"
                        type="text"
                        placeholder="Enter difficulty"
                        name="grade"
                        id="grade"
                        // onChange={e => setFirstname(e.target.value)}
                        />
                </div>
                <div className="col-sm-6 mt-4">
                    <label for="vert">Height of Climb</label>
                    <input
                        className="form-control addrouteform"
                        type="text"
                        placeholder="Enter vertical"
                        name="vert"
                        id="vert"
                        // onChange={e => setFirstname(e.target.value)}
                        />
                </div>
          </div>

          <div className="row form-group">
                <div className="col-sm-6 mt-4">
                    <label for="approach">Approach</label>
                    <input
                        className="form-control addrouteform"
                        type="text"
                        placeholder="Enter distance/difficulty of approach"
                        name="approach"
                        id="approach"
                        // onChange={e => setFirstname(e.target.value)}
                        />
                </div>
                <div className="col-sm-6 mt-4">
                    <label for="facilities">Facilities Nearby?</label>
                    <input
                        className="form-control addrouteform"
                        type="text"
                        placeholder="Restrooms, proximity to water, etc"
                        name="facilities"
                        id="facilities"
                        // onChange={e => setFirstname(e.target.value)}
                        />
                </div>
          </div>

          <div className="row form-group">
                <div className="col-sm-6 mt-4">
                    <label for="lat">Latitude</label>
                    <input
                        className="form-control addrouteform"
                        type="text"
                        placeholder="Enter latitude coordinates"
                        name="lat"
                        id="lat"
                        // onChange={e => setFirstname(e.target.value)}
                        />
                </div>
                <div className="col-sm-6 mt-4">
                    <label for="long">Longitude</label>
                    <input
                        className="form-control addrouteform"
                        type="text"
                        placeholder="Enter longitude coordinates"
                        name="long"
                        id="long"
                        // onChange={e => setFirstname(e.target.value)}
                        />
                </div>
          </div>

          <div className="row form-group">
                <div className="col-sm-12 mt-4">
                    <label for="info">Enter your notes here!</label>
                    <input
                        className="form-control addrouteform"
                        type="text"
                        placeholder="Add any relevant info, notes, or beta"
                        name="info"
                        id="info"
                        // onChange={e => setFirstname(e.target.value)}
                        />
                </div>
          </div>

          <div className="row mt-5">
              <div className="col-sm-12">
                <button className="btn float-right">
                    Submit Route!
                </button>
              </div>
          </div>

        </div>
    )
}