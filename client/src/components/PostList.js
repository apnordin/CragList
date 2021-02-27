import React from "react";

export default function PostList ({ postList }) {

    // console.log('POSTLIST: ', postList);

    
    const postListBox = document.getElementById("postListBox");
    if (postListBox) {
        postListBox.scrollTop = postListBox.scrollHeight;
    }


    if (postList) {

        return (
            <div className = "postList" id="postListBox">
                {postList.map(post => (
                    <div className="post my-2">
                        <div className="postUser">
                            {post.user}:
                        </div>
                        <div className="postContent">
                            {post.text}
                        </div>
                    </div>
                ))}
            </div>
    )
    } else {
        return(
            <div>
            </div>
        )
    }
}