

# Javascript Vanilla & D3.js graphs

In this exercise, we will create web page with one page where we will show 3 different graphs created with different data and with only one component(View). All this web app has been created in Vanilla Javascript.


## `Instructions`

In order to watch this web app, you need to run a dependency management tool(Node.js). To install this, follow this [link](https://nodejs.org/es/download/package-manager/). After that, install the package "http-server" and run it.


```
$ npm install http-server -g
$ cd marfeel
$ http-server . -p 3000
```
Navigate to your browser and go to https://localhost:3000.



## `Technical tasks`

- **Clean, maintainable, easy-to-read:** It is prepared to be scalable and easy maintanable with every archive in its place. The idea is to folloe the separation of concerns in order to not create spaghetti code:

  - Components: 
    - `Donut`: Graphic with a donut style to be rendered as the graph from data. It is alse reusable as this element is used to render 3 different data models.
    - `View`: The article where all the info from every data model is uploaded. It contains the Donut component.
    
  - CSS: 
    - `styles`: the styles file to give the graphic style to the web app.

  - Pages: 
    - `HomePage`: The page where all data is uploaded. It contains the different views from data models.

  - Services: 
    - `DataFakeServer`: the connection to the API to get the data for the different models. In this case, data is fake. We created an array of objects to get the data.
  
  - app.js: file where it creates the layout, the router and the main tag for all the web app.

  - Layout.js: A class constructor to generate the main layout for all the app.

  - Router.js: A class constructor to generate all the routes neede for this app. It manages the routes.

- **D3.js library**: Use of this library in order to create the HTML svg tags to render the donut graphs to view the data. 
  
