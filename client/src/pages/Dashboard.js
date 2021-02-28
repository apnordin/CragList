import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import UserNavbar from "../components/Navbar"
import AUTH from "../utils/AUTH"

export default function Dashboard () {

    const [thisUser, setThisUser] = useState([])

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
    }, [])

    const [users, setUsers] = useState([])

    return(
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            thisUser ={thisUser}
            />
            <div className="container">

        <div className = "row mt-3">
            <div className = "col-12 mb-3">
                <h1 className="">
                    Welcome to CragList!
                </h1>
            </div>
        </div>
            <div className = "row mt-3">
                
                <div className = "col-lg-4">
                    <Search />
                </div>
                <div className = "col-lg-8">
                    <p className="mainpagetext">
                        Use CragList to search for your favorite climbing crags in North Carolina.
                    </p>
                    <p className="mainpagetext">
                        Once you have selected a crag, you will be taken to that crag's main page where you can view course information, use the map to find your way there, view other users' posts about the crag, and post your own content.
                    </p>
                    <p className="mainpagetext">
                        You can also use the chat function in the navbar to chat live with other users!
                    </p>
                </div>

            </div>
        
        </div>
            </div>
    )

}