# Episode 1 -- Incetion 
    - Pull CDN to your code to Inject React [https://legacy.reactjs.org/docs/cdn-links.html]
    - Research on what is CDN and crossorigin?
    - React.createElement is an object, it becomes HTML when we render this.

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
           
# Episode 3 -- Laying the foundation
    - JSX: It is an HTML-like or XML-like Syntax.
           It is not HTML inside JAVASCRIPT.
    - JSX code is Transpiled before it goes to browser or JS Engine.
    - Parcel is helping to do the transpilation. Basically parcel is using a package called Babel to do the transpilation. Parcel is a manager of Babel.
    - As soon as Babel see there is a jsx code it transpiles to React.createElement.
    - React Component: There are two types of component present in React.
    - Class Component: It is a older way to write component
    - Functional Component: Newar way of writing component.
        - It is a javascript function that returns JSX or React Element.
        - The name always satrts with a capital letter.
    - Component Composition: When we call a component inside other component, is called as Component Composition.
    - JSX Sanitize the data, if you send malicious data, JSX will take care of it. 



## FUN Fact
    - Story of NPM full form. The full form of NPM is everything except "Node Package Manager".
    - Github Repo: https://github.com/npm/npm-expansions