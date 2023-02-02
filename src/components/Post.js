import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import VerifiedUser from '@mui/icons-material/VerifiedUser'
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline'
import Repeat from '@mui/icons-material/Repeat'
import FavouriteBorder from '@mui/icons-material/FavoriteBorder'
import Publish from '@mui/icons-material/Publish'

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src='https://kajabi-storefronts-production/global.ssl.fastly.net/kajabu-storefronts-production/themes/284832/settings-images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground' />
        </div>  
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        Rafeh Qazi {""}
                         <span className='post__headerSpecial' >
                            <VerifiedUser className='post__badge' />
                        </span>
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>I challenge you to build a Twitter Clone </p>
                </div>
            </div>
            <img src='https://media3.giphy.com/media/65ATdpi3clAdj0mZ39/giphy.gif'
            alt='' />
            <div className='post__footer' >
                <ChatBubbleOutline fontSize='small' />
                <Repeat fontSize='small' />
                <FavouriteBorder fontSize='small' />
                <Publish fontSize='small' />
            </div>
        </div>
    </div>
  )
}

export default Post