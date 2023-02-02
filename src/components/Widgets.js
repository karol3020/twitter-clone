import React from 'react'
import './Widgets.css'
import {
  TwitterTimeLineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'
import Search from '@mui/icons-material/Search'

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input' >
            <Search className='widgets__search' />
            <input placeholder='Search Twitter' type='text'  />
        </div>

        <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>

            <TwitterTweetEmbed tweetId={858551177860055040} />
            <TwitterTimeLineEmbed
              sourceType='profile'
              screenName='cleverqazi'
              options={{ height: 400 }}
            />
            <TwitterShareButton
            url={'https://facebook.com/cleverprogrammer'}
            options={{ text: '#reactjs is awesome', via: 'cleverquazi' }}
            />
        </div>
    </div>
  )
}

export default Widgets