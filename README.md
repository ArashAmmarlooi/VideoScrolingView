#### Hi Firstable thank you some much for give me such a honor to have a challenge with sabaidea team .
### 1 - 
At very first I made some configurations of webpack for using react and sass and also this config will be able to go with development mode and also production mode . 
### 2 -
 I set babel file for converting js to readble ES6 function .
### 3 -
 Adding redux library to the project and made a http-common file for the base url and use it in other files for fetching data from server with the help of axios http request . 
### 4 - 
I adding component timeLine for getting videos and in that component I dispatch the action method for fetching data and also I use redux thunk . 
### 5 - 
Added loading render if data doesnt fetch from server .
### 6 -
Add all js files in utils . at firt we declare  playpause function and call it in TimeLine component when it mounts and get video element and pass it to this function and after that I made up another function isInViewport which return true and if this function give us center postion of view port and also we check video elements with the help of getBoundingClientRect to gather info about top bottom postion of an element .
### 7 -
I set it on github pages but because of the API in must be applied in heroku or another hosting platforms .
### setup : 
```sh
npm i ( install packages )
npm run build (production mode)
npm start (developemnt mode)
```
### NOTICE: 
I coud use itersection observer for this approach but we want to play video when it becomes the center of the viewport .
because of this intersection just see the element when it visible in the hole viewport but I have developed an algorithm which can calculate the top and buttom postion of the video elements with getBoundingClientRect method that comes by this days and made a function isInViewPort which can return a true value by passing the rect object to this function ( this function represent the center of the viewport ) as well as when the top postion of video element is in center of the view port with the help of windows.innerHeight method and also divided by 1.5 ( almost center ) in order to calculate the center postion (bottom) of the view port and if the top postion of each video element is in the center of window.innerHeight / 1.5 the video will be played but if not it paused .  