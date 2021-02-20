import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import UserNavbar from "../components/Navbar"
import AUTH from "../utils/AUTH"
import FEED from "../utils/FEED"
import PostList from "../components/PostList"

export default function CoursePage({courseName}) {
    
    const [thisUser, setThisUser] = useState([])
    const [postList, setPostList] = useState()
    const [users, setUsers] = useState([])
    console.log('USER: ', thisUser.username)
    
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
            courseName: name,
        })

        console.log('POSTS: ', posts);
        console.log('POSTS.DATA', posts.data)
        for (let i = 0; i< posts.data.length; i++) {
            if (posts.data[i].courseName === name) {
                setPostList(posts.data[i].posts)
            }
        }
    }

    const newOrOpenPost = async e => {
        FEED.newPost({
            courseName: name
        })
    }

    const addPost = e => {
        e.preventDefault();
        const post = document.getElementById("postBox").value;
        FEED.addPost({
            courseName: name,
            thisPost: {
                user: thisUser.username,
                text: post
            }
        })

        console.log('Post: ', post)
    }

    useEffect(() => {
        newOrOpenPost()
        getPosts()
        getUser()
    }, [])


    const history = useHistory()
    console.log('the selected course is ! ', history)
    const { name, address, difficulty } = history.location.state

    if (postList) {
        console.log('postlist: ', postList)
    }


    return (
        <div>
            <UserNavbar
            users={users}
            setUsers={setUsers}
            thisUser ={thisUser}
            />
            <div className="container">

        <div className = "row mt-3">
            <div className = "col-12 mb-4">
                <h1 className="text-center">
                    {name}
                </h1>
                <button className="btn btn-success" onClick={() => history.goBack()}>Return to Search</button>
            </div>
            <div className="col-4">
                <h3>Feed</h3>

                <form className = "form-container">
                    <input
                        id="postBox"
                        type="text"
                        placeholder="Type your post here"
                        name="post">
                    </input>

                    <button
                        type="submit"
                        className="btn send"
                        onClick={addPost}
                        >Send
                    </button>
                </form>

                <PostList
                postList = {postList}
                />

            </div>
            <div className="col-8">
                <h3>Course Information</h3>
                <div className="courseInfo">
                    {address}
                    <p>Difficulty: {difficulty}</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}