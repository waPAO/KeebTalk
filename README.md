# Chatta!
Chatta! is a a very simple tex-chat application that was inspired by my never ending use of Discord. This is my first step into socket apps and I wanted to mimic some of th key compononets of Discord.

## What is Chatta! 
Chatta allows users to connect and chat in a virtual room. Users simply enter a username of their choice, pick a room, and begin chatting. Users will only be able to chat to the members who are currently in their specified room. A panel on the left lets the user now what room they are in and which other users are in the room with them. Users are free to leave and change rooms whenvever they would like, they simply just have to press the 'leave' option and choose a new room. Users in the room will be NOTIFIED of new users in the chat and users who leave as well.

## How to Chatta!
In order to use Chatta, you can simply clone this repository and from there follow these steps:

* open the directory in a code editor
* cd into the repository
* install the dependencies from the package.json file
* edit the chat room options found in 'index.html' (optional)
* run npm run dev

## Chatta! Breakdown
When making Chatta! I chose to use websockets in order to allow users to communicate between one another in REAL TIME. Socket.io allowed me to create a very fast and responsive chat service that is predominantly run through socket.io's built in functions. Through these functions I was also able to create vanilla javascript functions that helped submit and send the parameters I was recieving through various forms. When put together, I was abe=le to achieve a functioning chat app that is able to keep track of users, rooms, and time.
