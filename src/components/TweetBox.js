import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './Firebase'

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")
  const sendTweet = e => {
    e.preventDefault()
    db.collection('posts').add({
      displayName: 'Rafeh Quazi',
      username: 'cleverprogrammer',
      verfied: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:'https://kajabi-storefronts-production/global.ssl.fastly.net/kajabu-storefronts-production/themes/284832/settings-images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground'
    })

    setTweetImage('');
    setTweetMessage('')
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='https://kajabi-storefronts-production/global.ssl.fastly.net/kajabu-storefronts-production/themes/284832/settings-images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground' />
                <input
                onChange={e => setTweetMessage(e.target.value)} 
                value={tweetMessage} 
                placeholder="What's happening?"
                type='text' />
            </div>
                <input
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage} 
                placeholder='Enter image URL'
                className='tweetBox__inputImage' 
                type='text' />
                
            <Button 
            onClick={sendTweet}
            type="submit"
            className='tweetBox__tweetButton' >Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox