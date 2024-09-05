import React from "react";
import InstagramLink from "./Instagram.js";
import TwitterLink from "./twitter";
import LinkedInLink from "./linkedin";
import GitHubLink from "./github";
import './socialmedia.css';

function SocialMediaLinks() {
    return (
      <div  className="social-media-links">
        
        <InstagramLink />
         <TwitterLink />
        <LinkedInLink />
        <GitHubLink />
      </div>
    );
  }
  
  export default SocialMediaLinks;