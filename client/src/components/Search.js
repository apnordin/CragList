import React, { useState, useEffect } from 'react';
import ROUTE from "../utils/ROUTE";
import { useHistory } from 'react-router-dom';

export default function Search () {
    const history = useHistory()

    const [searchValue, setSearchValue] = useState();
    const [allRoutes, setAllRoutes] = useState();
    const [searchResults, setSearchResults] = useState();

    const getRoutes = async e => {
        const routes = await ROUTE.getAllRoutes()
        setAllRoutes(routes.data);
    }
    
    const routeSearch = async e => {
        e.preventDefault();
        let results = []
        console.log('Search clicked!');
        console.log('search value: ', searchValue)
        console.log( 'from routeSearch, allroutes: ', allRoutes);
        for (let i = 0; i < allRoutes.length; i++) {
            const lowerCaseRouteNames = allRoutes[i].name.toLowerCase();
            // console.log(lowerCaseCourseNames)
            if (lowerCaseRouteNames.includes(searchValue)) {
                // console.log('We have an inclusion match: ', allCourses[i].name);
                // console.log(allCourses[i])
                results.push(allRoutes[i])
            }
        }
        // console.log('!!!!', results)
        setSearchResults(results);
    }

    useEffect(() => {
        getRoutes()
        setSearchResults()
    }, [])

    const handleClick = result => {
        // console.log('click ', result)
        history.push('/crag', result)
    }

    if (!searchResults) {

        return (
            <div>
                <form onSubmit={routeSearch} className = "form-inline mb-1">
                    <input type="search" className="form-control coursesearchbox" id="courseSearchID" placeholder="Search for a Route" onChange={e => setSearchValue(e.target.value)}/>
                    <button type="submit" className="btn ml-1">Search</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <form onSubmit={routeSearch} className = "form-inline  mb-1">
                    <div className="form-group">
                        <input type="search" className=" form-control coursesearchbox" id="courseSearchID" placeholder="Search for a Route" onChange={e => setSearchValue(e.target.value)}/>
                        <button type="submit" className="btn ml-1">Search</button>
                    </div>
                </form>
                <div className="searchResultList mt-1">
                    {searchResults.map(result => (
                        <div className = "row ml-1" key={result._id}>
                            <div onClick={() => handleClick(result)} className="btn searchResultItem">
                                <div className="courseName">
                                    {result.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}