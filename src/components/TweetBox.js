import { Avatar, Button } from '@mui/material'
import React from 'react'
import './TweetBox.css'

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src='https://kajabi-storefronts-production/global.ssl.fastly.net/kajabu-storefronts-production/themes/284832/settings-images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground' />
                <input placeholder="What's happening?"
                type='text' />
            </div>
                <input placeholder='Enter image URL'
                className='tweetBox__inputImage' 
                type='text' />
                
            <Button className='tweetBox__tweetButton' >Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox