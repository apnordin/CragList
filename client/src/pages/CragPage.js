import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import UserNavbar from "../components/Navbar"
import AUTH from "../utils/AUTH"
import FEED from "../utils/FEED"
import PostList from "../components/PostList"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Map from "../components/Map/Map"

export default function CragPage({routeName}) {
    
    const [thisUser, setThisUser] = useState([])
    const [postList, setPostList] = useState()
    const [users, setUsers] = useState([])
    // console.log('USER: ', thisUser.username)
    
    const getUser = async e => {
        const thisUserID = localStorage.token.slice(10,34)
        // console.log('ThisUserID: ', thisUserID)

        // e.preventDefault()
        const user = await AUTH.getOneUser(thisUserID)
        // console.log('USER.data:', user.data);
        setThisUser(user.data)
    }
    
    const getPosts = async e => {
        const posts = await FEED.getPosts(
            {
            routeName: name,
        })

        // console.log('POSTS: ', posts);
        // console.log('POSTS.DATA', posts.data)
        for (let i = 0; i< posts.data.length; i++) {
            if (posts.data[i].routeName === name) {
                setPostList(posts.data[i].posts)
            }
        }
    }

    const newOrOpenPost = async e => {
        FEED.newPost({
            routeName: name
        })
    }

    const addPost = e => {
        e.preventDefault();
        const post = document.getElementById("postBox").value;
        FEED.addPost({
            routeName: name,
            thisPost: {
                user: thisUser.username,
                text: post
            }
        })

        // console.log('Post: ', post)
        document.getElementById("postBox").value = '';
        getPosts()
    }

    useEffect(() => {
        newOrOpenPost()
        getPosts()
        getUser()
    }, [])


    const history = useHistory()
    console.log('the selected route is ! ', history)
    const { name, type, grade, height, approach, facilities, info, address, user } = history.location.state

    const location = {
        address: history.location.state.address,
        lng: history.location.state.long,
        lat: history.location.state.lat
    }

    // if (postList) {
    //     // console.log('postlist: ', postList)
    // }

    return (
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            thisUser ={thisUser}
            />
            <div className="container">

        <div className = "row mt-3 mb-4">
            <div className = "col-4">
                <h1>{name}</h1>
            </div>
            <div className="col-4">
                <button className="return btn" onClick={() => history.goBack()}>Return to Search</button>
            </div>
            <div className="col-4">
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <div className="form-inline">
                    <input
                        id="postBox"
                        className="form-control"
                        type="text"
                        placeholder="Type your post here"
                        name="post">
                    </input>

                    <button
                        type="submit"
                        className="btn postBtn"
                        onClick={addPost}
                        >Post!
                    </button>
                </div>

                <PostList
                postList = {postList}
                />

            </div>
            <div className="col-8">
                <Jumbotron>
                <h4 className="mb-3 mt-0 routeinfoheader">Route Information</h4>
                <div className="courseInfo">
                    <div className="row">
                        <div className="col-4">
                            <span className="infoKey">Type: </span><span className="infoValue">{type}</span><p></p>
                            <span className="infoKey">Grade: </span> <span className="infoValue">{grade}</span><p></p>
                            <span className="infoKey">Vertical: </span><span className="infoValue">{height}</span><p></p>
                        </div>
                        <div className="col-8">
                            <span className="infoKey">Approach Info: </span> <span className="infoValue">{approach}</span><p></p>
                            <span className="infoKey">Facilities: </span><span className="infoValue">{facilities}</span><p></p>
                            <span className="infoKey">Address: </span><span className="infoValue">{address}</span><p></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <span className="infoKey">Added By: </span><span className="infoValue">{user}</span><p></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <span className="infoKey">Notes: </span><span className="infoValue">{info}</span><p></p>
                        </div>
                    </div>
                    <div className="row">
                        
                    </div>
                </div>
                <Map className="mapformatting" location={location} zoomLevel={14}/>
                </Jumbotron>
            </div>
        </div>
        </div>
        </div>
    )
}