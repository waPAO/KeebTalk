# :keyboard: KeebTalk :keyboard:
KeebTalk is a a very simple text-chat application that was inspired by my never ending use of Discord and Reddit mechanical keyboard servers. This is my first step into socket apps and I wanted to mimic some of the key components of Discord and tie it together into an all in one space for keyboard communities to chat.

## What is KeebTalk?
KeebTalk allows users to connect and chat in a virtual room. Users simply enter a username of their choice, pick a channel of their interest, and begin chatting. Users will only be able to chat to the members who are currently in their specified channel. A panel on the left lets the user now what room they are in and which other users are in the room with them. Users are free to leave and change rooms whenvever they would like, they simply just have to press the 'Exit Channel' option located on the top right and choose a new room. Users in the room will be NOTIFIED of new users in the chat and users who leave as well.

## How to KeebTalk
In order to use KeebTalk, you can simply clone this repository and from there follow these steps or just simply follow the link [HERE](https://keebtalk.herokuapp.com/):

* open the directory in a code editor
* cd into the repository
* install the dependencies from the package.json file
* edit the chat room options found in 'index.html' (optional)
* run node server.js

## KeebTalk Breakdown
When making KeebTalk I chose to use websockets in order to allow users to communicate between one another in REAL TIME. Socket.io allowed me to create a very fast and responsive chat service that is predominantly run through socket.io's built in functions. Through these functions I was also able to create vanilla javascript functions that helped submit and send the parameters I was recieving through various forms. When put together, I was able to achieve a functioning chat app that is able to keep track of users, rooms, and time.
