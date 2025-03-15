# Episode 1 -- Incetion 
    - Pull CDN to your code to Inject React [https://legacy.reactjs.org/docs/cdn-links.html]
    - Research on what is CDN and crossorigin?
    - React.createElement is an object, it becomes HTML when   we render this.

# Episode 2 -- Igniting App
    - There are few bundlers present: 
        1. Webpack 
        2. Parcel
        3. Vit
    - We are using parcel. Parcel has a lot of features. 
      Read about it from Parcel Doc.
    - When we do npm i package_name, we can also install as Dev dependecy by using npm i -D pasckage name.
    - If we install a package as DEV Dependecy that means we are going to use to for Development environment only. Not for production. And if we do normal installation that means we are going to use it for production as well.
    - When we install a package, it may happen that there are some other package also install as a dependecy of the main package. It is called Transative Dependency.
    - TO run a project in dev mode with parcel we need to run this command: npx parcel index.html
    - For production build run this command: 
      npx parcel build index.html
      You may get an error as we are mentioning entry point as index.html, but in package.json, the entry point mention as app.js. Remove that from package.json to execute this command.
    - NPX: In order to execute a npm package we are using npx.
           
