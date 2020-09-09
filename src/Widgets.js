import React from "react";
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
}from "react-twitter-embed";
function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="Search twitter" type="text"/>
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's up</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"}/>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ANI"
                options={{height:400}}/>
                <TwitterShareButton
                url={"https://www.facebook.com/spandan.dhar.98/"}
                options={{text :"#Life is Awesome", via:"Spandan Dhar"}}/>
            </div>
        </div>
    );
}

export default Widgets
