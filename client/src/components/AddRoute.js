import React, { useState } from 'react';
import ROUTE from '../utils/ROUTE';

export default function AddRoute( {setModalIsOpenToFalse }) {

    const [routeName, setRouteName] = useState();
    const [routeType, setRouteType] = useState();
    const [routeGrade, setRouteGrade] = useState();
    const [routeVert, setRouteVert] = useState();
    const [routeApproach, setRouteApproach] = useState();
    const [routeFac, setRouteFac] = useState();
    const [routeLat, setRouteLat] = useState();
    const [routeAddress, setRouteAddress] = useState();
    const [routeLong, setRouteLong] = useState();
    const [routeInfo, setRouteInfo] = useState();

    const handleNewRoute = async e => {
        e.preventDefault();
        // console.log('!!!! ROUTE INFO: ', routeName + routeType + routeGrade + routeVert + routeApproach + routeFac + routeLat + routeLong + routeInfo)

      await ROUTE.newOrOpenRoute({
        name: routeName,
        type: routeType,
        grade: routeGrade,
        height: routeVert,
        approach: routeApproach,
        facilities: routeFac,
        lat: routeLat,
        long: routeLong,
        address: routeAddress,
        info: routeInfo
      })
        setModalIsOpenToFalse()
    }

    return(
        <div className="container mx-2">
            <div className="row">
                <h3 className="modalheader">Add a New Route</h3>
            </div>

            <form onSubmit={handleNewRoute}>
                <div className="row form-group">
                    <div className="col-sm-6 mt-4">
                        <label for="routename">Route Name</label>
                        <input
                            className="form-control addrouteform"
                            type="text"
                            placeholder="Route Name"
                            name="routename"
                            id="routename"
                            onChange={e => setRouteName(e.target.value)}
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
                            onChange={e => setRouteType(e.target.value)}
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
                                onChange={e => setRouteGrade(e.target.value)}
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
                                onChange={e => setRouteVert(e.target.value)}
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
                                onChange={e => setRouteApproach(e.target.value)}
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
                                onChange={e => setRouteFac(e.target.value)}
                                />
                        </div>
                </div>

                <div className="row form-group">
                        <div className="col-sm-4 mt-4">
                            <label for="lat">Latitude</label>
                            <input
                                className="form-control addrouteform"
                                type="text"
                                placeholder="Enter latitude coordinates"
                                name="lat"
                                id="lat"
                                onChange={e => setRouteLat(e.target.value)}
                                />
                        </div>
                        <div className="col-sm-4 mt-4">
                            <label for="long">Longitude</label>
                            <input
                                className="form-control addrouteform"
                                type="text"
                                placeholder="Enter longitude coordinates"
                                name="long"
                                id="long"
                                onChange={e => setRouteLong(e.target.value)}
                                />
                        </div>
                        <div className="col-sm-4 mt-4">
                            <label for="address">Address</label>
                            <input
                                className="form-control addrouteform"
                                type="text"
                                placeholder="Enter approximate address"
                                name="address"
                                id="address"
                                onChange={e => setRouteAddress(e.target.value)}
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
                                onChange={e => setRouteInfo(e.target.value)}
                                />
                        </div>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-12">
                        <button className="btn float-right" type="submit">
                            Submit Route!
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}