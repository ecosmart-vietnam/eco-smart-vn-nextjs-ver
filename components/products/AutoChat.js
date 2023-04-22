import React from 'react'
import { useEffect } from 'react'
//import styles from '../../styles/autochat.module.css'
//import Script from 'next/script'

function Facebook() {
  useEffect(() => {
      var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "101972352889076");
          chatbox.setAttribute("attribution", "biz_inbox");

          
          window.fbAsyncInit = function() {
            FB.init({
              xfbml            : true,
              version          : 'v16.0'
            });
          };
          
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        });
  return (
    <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div> 
  );
}

export default Facebook;

