<p align="center"><img src="./public/images/logo.svg"></p>

# SportSee

## How to install the project

To install the backend, go to [this repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) and follow the instructions to install.

To install the frontend, please clone this repository into your computer.  
You can then install the dependancies by positioning yourself at the root of the project and typing the command `npm install` in the terminal.  


## How to launch the project

Once the project is installed, first launch the backend by positioning yourself at the root of its directory and typing `npm start`.  
A message saying `Magic happens on port 3000` should appear in the terminal to confirm successful launch.

Then, position yourself at the root of the frontend folder and type `npm start` in the terminal.  
A message tells you that port 3000 is already in use and asks if you want to use another one.  
Then type the `y` key to accept. 

A browser window opens and you now have access to the web application.  


## About this first version of the project

As this application is still in the development phase, we have the possibility of retrieving user information by 2 methods:
- A call to the API
- mocked data

For the moment, only two users are present for these 2 methods. Their ids are `12` and `18`.

No authentication system is yet in place on this project.
When launching the project, you can see that the routing system redirects the user to the error page.
This is completely normal since no user has yet been specified.

To rectify this, simply modify the URL by adding `/user/` as well as the id of the desired user then launch the search.
For example, to display Cecilia's information when the front is launched on port 3001, you can type `http://localhost:3001/user/18`.

If you want to view the mocked data instead, just add `?mocked` after the user's id.
Using the example just above, this would result in `http://localhost:3001/user/18?mocked`.