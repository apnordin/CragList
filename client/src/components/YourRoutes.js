import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function YourRoutes ({ thisUser, allRoutes }) {

    const history = useHistory()

    const [thisUserRoutes, setThisUserRoutes ] = useState();

    const yourRoutes = () => {
        let results = []
        if (allRoutes) { 
            for (let i = 0; i < allRoutes.length; i++) {
                if (allRoutes[i].user === thisUser.username) {
                    results.push(allRoutes[i])
                }
            }
        }
        // console.log('RESULTS: ', results)
        setThisUserRoutes(results);
    }

    useEffect(() => {
        yourRoutes()
    }, [allRoutes])

    const handleClick = result => {
        // console.log('click ', result)
        history.push('/crag', result)
    }

    if (thisUserRoutes) {

        return (
            <div>
                <h3 className="routeinfoheader">Your Routes: </h3>
                <div className="row thisUserRoutesList">
                    {thisUserRoutes.map(result => (
                        <div className="col-6 mt-2 mb-3" key={result._id}>
                            <div onClick={() => handleClick(result)} className="btn yourRouteItem">
                                <div className="yourRouteName">
                                    <h4>{result.name}</h4>
                                </div>
                                <div className="yourRouteKeyVal">
                                    Type of Climb: {result.type}
                                </div>
                                <div className="yourRouteKeyVal">
                                    Grade/Difficulty: {result.grade}
                                </div>
                                <div className="yourRouteKeyVal">
                                    Height: {result.height}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    } else {
        // console.log('NO USER ROUTES')
        return (
            <div>
                <h3 className="routeinfoheader">You don't have any routes uploaded. Click on Add a Route in the navbar to get started, or search for other users' routes using the searchbox.</h3>
            </div>
        )
    }

}