import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './Firebase'

function Feed() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot( snapshot => {
      setPosts(snapshot.docs.map( doc => doc.data()))
    })
  }, [])

  return (
    <div className='feed'>
        <div className='feed__header'>
            <h2>Home</h2>
        </div>

        <TweetBox />

        <Post displayName ='SonySangha' 
        username='ssssangha' 
        verified={true} 
        text='Yooo its working' 
        avatar='https://kajabi-storefronts-production/global.ssl.fastly.net/kajabu-storefronts-production/themes/284832/settings-images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground' 
        image='https://media3.giphy.com/media/65ATdpi3clAdj0mZ39/giphy.gif'
        />

        <Post displayName ='' 
        username='' 
        verified={true} 
        text='Yooo its working' 
        avatar='https://kajabi-storefronts-production/global.ssl.fastly.net/kajabu-storefronts-production/themes/284832/settings-images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground' 
        image='https://media3.giphy.com/media/65ATdpi3clAdj0mZ39/giphy.gif'
        />

        <Post displayName ='' 
        username='' 
        verified={true} 
        text='Yooo its working' 
        avatar='https://kajabi-storefronts-production/global.ssl.fastly.net/kajabu-storefronts-production/themes/284832/settings-images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground' 
        image='https://media3.giphy.com/media/65ATdpi3clAdj0mZ39/giphy.gif'
        />

        <Post displayName ='' 
        username='' 
        verified={true} 
        text='Yooo its working' 
        avatar='https://kajabi-storefronts-production/global.ssl.fastly.net/kajabu-storefronts-production/themes/284832/settings-images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground' 
        image='https://media3.giphy.com/media/65ATdpi3clAdj0mZ39/giphy.gif'
        />

        <Post displayName ='' 
        username='' 
        verified={true} 
        text='Yooo its working' 
        avatar='https://kajabi-storefronts-production/global.ssl.fastly.net/kajabu-storefronts-production/themes/284832/settings-images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground'
        image='https://media3.giphy.com/media/65ATdpi3clAdj0mZ39/giphy.gif'
        />
        
        <Post 
        displayName ='' 
        username='' 
        verified={true} 
        text='Yooo its working' 
        avatar='https://kajabi-storefronts-production/global.ssl.fastly.net/kajabu-storefronts-production/themes/284832/settings-images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground'
        image='https://media3.giphy.com/media/65ATdpi3clAdj0mZ39/giphy.gif' 
        />
    </div>
  )
}

export default Feed