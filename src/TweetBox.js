import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';
// import { storage } from "./firebase";
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const TweetBox = () => {
    // const [imageUrl, setImageUrl] = useState("");
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const user = useSelector(selectUser)

    // const handleChange = (e) => {
    //     if (e.target.files[0]) {
    //       setImageUrl(e.target.files[0]);
    //     }
    // };

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            // imageUrl: imageUrl,
            avatar: user.avatar
        });

        setTweetMessage('');
        setTweetImage('');
        // setImageUrl('');
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={user.avatar}/>
                    <input value={tweetMessage} onChange={e => setTweetMessage(e.target.value)} placeholder="What's happening" />
                </div>
                <input value={tweetImage} onChange={e => setTweetImage(e.target.value)} placeholder="Enter image URL" className="tweetBox__imageInput" type="text" />
                {/* <input type="file" onChange={handleChange} /> */}

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;