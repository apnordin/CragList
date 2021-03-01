import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import UserNavbar from "../components/Navbar";
import ROUTE from "../utils/ROUTE";
import AUTH from "../utils/AUTH";
import YourRoutes from "../components/YourRoutes";
import { useHistory } from 'react-router-dom';

export default function Dashboard () {

    const history = useHistory()
    const [thisUser, setThisUser] = useState([])
    const [allRoutes, setAllRoutes] = useState();

    const getRoutes = async e => {
        const routes = await ROUTE.getAllRoutes()
        setAllRoutes(routes.data);
    }

    const getUser = async e => {
        const thisUserID = localStorage.token.slice(10,34)
        // console.log('ThisUserID: ', thisUserID)

        // e.preventDefault()
        const user = await AUTH.getOneUser(thisUserID)
        // console.log('USER.data:', user.data);
        setThisUser(user.data)
    }

    useEffect(() => {
        getUser()
        getRoutes()
    }, [])

    const [users, setUsers] = useState([])

    
    const handleGoToAll = () => {
        history.push("/allroutes")
    }

    return(
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            thisUser ={thisUser}
            />
            <div className="container">
                <div className = "row mt-3">
                    <div className = "col-4 mb-3">
                        <h2 className="">
                            Welcome {thisUser.username}!
                        </h2>
                    </div>
                    <div className = "col-8 mb-3">
                        <div onClick={handleGoToAll} className="btn browse">Browse all routes</div>
                    </div>
                </div>
                <div className = "row mt-3">
                    
                    <div className = "col-lg-4">
                        <Search />
                    </div>
                    <div className = "col-lg-8">
                        <YourRoutes
                        thisUser ={thisUser}
                        allRoutes ={allRoutes}
                        />
                        {/* <p className="mainpagetext">
                            Use CragList to search for your favorite climbing crags in North Carolina.
                        </p>
                        <p className="mainpagetext">
                            Once you have selected a crag, you will be taken to that crag's main page where you can view course information, use the map to find your way there, view other users' posts about the crag, and post your own content.
                        </p>
                        <p className="mainpagetext">
                            You can also use the chat function in the navbar to chat live with other users!
                        </p> */}
                    </div>
                </div>
        
            </div>
        </div>
    )

}