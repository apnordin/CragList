import React, {useState, useEffect } from "react";
import Modal from 'react-modal';
import AUTH from "../utils/AUTH";
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl';
import CHATR from "../utils/CHATR";
import ChatBox from "./ChatBox"
import AddRoute from "./AddRoute"
import { useHistory } from 'react-router-dom';

export default function Navbar( { users, setUsers, thisUser }) {
    const history = useHistory()
    // console.log('THISUSER: ', thisUser.username)

    // console.log(thisUser)

    const thisUserName = thisUser.username

    const [chatpartner, setChatpartner] = useState();
    const [messageList, setMessageList] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    const getUsers = async e => {

        const users = await AUTH.findAllUsers()
        // console.log('users: ', users);
        let allUsers = users.data
        // console.log('allUsers before delete: ', allUsers)
        
        let i;
        for (i = 0; i < allUsers.length; i++) {
            if (allUsers[i]._id === localStorage.token.slice(10,34)) {
                // console.log('We have a match! AllUsers[i]._id: ', allUsers[i].firstName + " localStorage: " + localStorage.token.slice(10,34))
                allUsers.splice([i],1)
            } else {
                // console.log('NO MATCH WAS FOUND', allUsers[i].firstName + " localStorage: " + localStorage.token.slice(10,34))
            }
        }
        setUsers(allUsers)
    }

    const getMessages = async e => {
        const messages = await CHATR.getMessages(
            {
            user: thisUserName,
        })

        setMessageList(messages.data)

        console.log('messages got!', messages.data)
    }

    
    useEffect(() => {
        getUsers()
        getMessages()
    }, [thisUser])
    
    const checkMessages = async e => {
        console.log('messageList: ', messageList)
        const newMessages = await CHATR.getMessages(
            {
                user: thisUserName,
            }
        )
        console.log('newMessages: ', newMessages.data)
        
        const newMessagesData = newMessages.data
        
        for (let i = 0; i < newMessagesData.length; i++) {
            // console.log(newMessagesData[i])

            for (let i = 0; i < messageList.length; i++) {
                const chatButton = document.getElementById("alerticon");

                console.log(newMessagesData[i].chats.length)
                console.log(messageList[i].chats.length)

                if (newMessagesData[i].chats.length === messageList[i].chats.length) {
                    console.log('NO NEW MESSAGES');
                }
                else {
                    console.log('NEW MESSAGE', newMessagesData[i].chats.slice(-1));
                    chatButton.classList.add("redalert")
                }
            }   
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {

            checkMessages()
        }, 5000);
        return () => clearInterval(interval);

        }, [thisUser, messageList]
    )

    const openForm = async (result) => {
        
        CHATR.newOrOpenChat({
            user: thisUser.username,
            chatPartner: result
        })

        CHATR.newOrOpenChatInvert({
            user: thisUser.username,
            chatPartner: result
        })
        setChatpartner(result);

        document.getElementById("myForm").style.display = "block";
    }

    const newRoute = () => {
        setModalIsOpenToTrue();
    }

    const customStyles = {
        content: {
            top : '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#25333d',
            width: '50%',
            height: 'auto',
            minWidth: '365px',
            maxHeight: '80%'
        }
    }
    
    const logout = () => {
        // console.log('logout clicked');
        localStorage.clear();
        history.push('/')
        window.location.reload();
    }

    const removeAlert = () => {
        const chatButton = document.getElementById("alerticon");
        chatButton.classList.remove("redalert")
    }

    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
                >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to find users"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                    (child) =>
                        !value || child.props.children.includes(value)
                    )}
                </ul>
                </div>
            );
        },
    );
    
    
    return(
        
        <nav className="navbar navbar-expand-sm navdark">
            <div className="container">
                <span className="navbar-nav">
                    <button
                    className="btn newCourseBtn"
                    onClick={newRoute}
                    >Add a Route
                    </button>

                    <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
                        <button className="btn close" onClick={setModalIsOpenToFalse}>x</button>
                        <AddRoute thisUserName={thisUserName} setModalIsOpenToFalse={setModalIsOpenToFalse} />
                    </Modal>

                </span>
                <div className="nav">


                    <Dropdown className="mr-3 btn-nav" onClick={() => {getMessages(); removeAlert();}}>
                            <Dropdown.Toggle
                                className="open-button btn-nav dropdownbtn"
                                id="dropdown-custom-components"
                                >
                                Chat
                            <span id="alerticon"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as={CustomMenu}>
                                {users.map(result => (
                                    <Dropdown.Item
                                        key={result._id}
                                        onClick={() => openForm(result.username)}
                                        >{result.username}
                                    </Dropdown.Item>
                                    ))}
                            </Dropdown.Menu>
                    </Dropdown>

                    <button
                    className="open-button btn btn-nav logout"
                    onClick={logout}
                    >Log Out
                    </button>

                    <ChatBox
                    thisUser={thisUser}
                    chatpartner={chatpartner}
                    messageList={messageList}
                    />
                </div>
            </div>
        </nav>
    )

}
