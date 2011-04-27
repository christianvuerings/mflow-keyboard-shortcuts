// ==UserScript==
// @name           mflow keyboard shortcuts
// @version        0.1
// @namespace      http://denbuzze.wordpress.com/
// @description    Add keyboard shortcuts for the mflow music service
// @match          http://beta.mflow.com/*
// @include        http://beta.mflow.com/*
// ==/UserScript==


/**
 * Create a script tag and add it to the body element.
 * We need to do it this way since we aren't able to get to the global JavaScript variables in Chrome.
 */
var s = document.createElement("script");
s.innerHTML = 'var keyhandler = function(e) { var htmlPlayer = Mflow.Media.Html5MediaPlayer; if(e.keyCode == 78 || e.keyCode == 39){ Mflow.Media.PlaybackManager.nextTrack(); } else if (e.keyCode == 80) { if(htmlPlayer.isPlaying()) {  htmlPlayer.pause(); } else { htmlPlayer.resume(); } }; } ; window.addEventListener("keydown", keyhandler, false);';
document.body.appendChild(s);