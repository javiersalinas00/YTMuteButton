// ==UserScript==
// @name                YouTube - Mute button
// @name:de             YouTube - Mute button
// @version             alpha 1
// @description         Add a button formute Videos
// @autor               javiersalinas00
// @namespace           https://github.com/javiersalinas00
// @homepageURL         https://github.com/javiersalinas00
// @license             MIT License
// @grant               none
// @include             http*://*.youtube.com/watch*
// ==/UserScript==

(function() {
    'use strict';
    
    function addButton() {

        if(document.getElementById("customDownloadButton")) return;
    

        var button = document.createElement("button");
        button.innerHTML = "Mute 🔇";
        button.id = "customDownloadButton";
        button.style = "padding:10px 20px;font-size:15px;cursor:pointer;background-color:#ff0000;color:#ffffff;border:none;border-radius:25px;margin-left:5px;transition:transform 0.3s, background-color 0.3s;";
    
        // Add an event listener to the button
        button.addEventListener("click", function() {
            document.querySelector(".html5-video-player").setVolume(0);
        });
    
        var subscribeButtonContainer = document.querySelector("ytd-subscribe-button-renderer");

        if (subscribeButtonContainer) {
            subscribeButtonContainer.appendChild(button);
        }
    }

    var checkExist = setInterval(function() {
        if (document.querySelector("ytd-subscribe-button-renderer")) {
            addButton();
            clearInterval(checkExist);
        }
    }, 1000);
})();

