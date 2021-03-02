import React, {useState, useEffect } from "react";
import UserNavbar from "../components/Navbar";
import AUTH from "../utils/AUTH";
import ROUTE from "../utils/ROUTE";
import Search from "../components/Search";
import { useHistory } from 'react-router-dom';

export default function AllRoutesPage () {

    const history = useHistory()
    const [thisUser, setThisUser] = useState([])
    const [users, setUsers] = useState([])
    const [allRoutes, setAllRoutes] = useState();

    const getUser = async e => {
        const thisUserID = localStorage.token.slice(10,34)
        // console.log('ThisUserID: ', thisUserID)

        // e.preventDefault()
        const user = await AUTH.getOneUser(thisUserID)
        // console.log('USER.data:', user.data);
        setThisUser(user.data)
    }

    const getRoutes = async e => {
        const routes = await ROUTE.getAllRoutes()
        setAllRoutes(routes.data);
    }

    useEffect(() => {
        getUser()
        getRoutes()
    }, [])

    const goToDashboard = () => {
        history.push("/")
    }

    const goToCragPage = result => {
        // console.log('click ', result)
        history.push('/crag', result)
    }

    if (allRoutes) {

        return (
            <div>
                <UserNavbar
                users = {users}
                setUsers = {setUsers}
                thisUser = {thisUser}
                />
                <div className="container">
                    <div className = "row mt-3">
                        <div className = "col-4 mb-3">
                            <h2 className="">
                                All Routes
                            </h2>
                        </div>
                        <div className = "col-8 mb-3">
                            <div onClick={goToDashboard} className="btn browse">Back to Dashboard</div>
                        </div>
                    </div>
                    <div className = "row mt-3">
                        <div className = "col-lg-4">
                            <Search />
                        </div>
                        <div className = "col-lg-8">
                            <div className= "row allRoutesList">
                                {allRoutes.map(result => (
                                    <div className="col-4 mt-2 mb-3" key={result.id}>
                                        <div onClick={() => goToCragPage(result)} className="btn yourRouteItem">
                                            <div className="yourRouteName">
                                                <h4>{result.name}</h4>
                                            </div>
                                            <div className="yourRouteKeyVal">
                                                {result.type}
                                            </div>
                                            <div className="yourRouteKeyVal">
                                                Grade/Difficulty: {result.grade}
                                            </div>
                                            <div className="yourRouteKeyVal">
                                                Height: {result.height}
                                            </div>
                                            <div className="yourRouteKeyVal">
                                                Added by: {result.user}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <UserNavbar
                users = {users}
                setUsers = {setUsers}
                thisUser = {thisUser}
                />
                <div className="container">
                    <div className = "row mt-3">
                        <div className = "col-4 mb-3">
                            <h2 className="">
                                All Routes
                            </h2>
                        </div>
                        <div className = "col-8 mb-3">
                            <div onClick={goToDashboard} className="btn browse">Back to Dashboard</div>
                        </div>
                    </div>
                    <div className = "row mt-3">
                        <div className = "col-lg-4">
                            <Search />
                        </div>
                        <div className = "col-lg-8">
                            <h3 className="noroutes">
                                Loading routes!
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}