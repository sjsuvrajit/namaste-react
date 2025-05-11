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

# Episode 4 -- Talk is cheap, show me the code
    - Planning for our Food Ordering App: Namaste Food
        - Components
            - Header
                - Logo 
                - Nav Items
            - Body
                - Search
                - Restaurant Container
                    - Restaurant Card
            - Footer
                - Copyright
                - Links
                - Address
                - Contact
    - Props (Properties/ Arguments of a function)
        - For Dynamic Component Data in React we need to pass it as Props
    - Config Driven UI --> See at the END
    - When we lopping through a data best parctice to Use Key. Key should be always Unique. It is important to add Key because it helps to react to render component at the same level Uniquely. 
    - React does not recomend index as key.
    - we sgould use Key >>> Index >>>>>>>> Unique Key(Best Parctice) 

# Episode 5 -- Let's Get Hooked
    - A Normal Javascript Utility Function
    - Whenever a state variable updates, React will re render the component.
    - Two most important hooks --> 
        - useState() --> Super Powerful state variable in React.
        - useEffect()
    - The most important super power of React is doing eficient DOM manipulation.
    - Let's understand how React is Super powerfull at DOM manipulation?
        - React is using Reconciliation Algorithm which is known as React fiber to do the DOM manipulation.
        - Whenever we are creaitng a React Element, we are actullay creating a virtual DOM. Which is a Javascript Object.
        - On Every render cycle The new UI compares it with the old VDOM. And make the changes to the actual DOM.
        - This process is known as Reconciliation or the React diffing Algorithm. 
        - Find the full Architecture of React Fiber: https://github.com/acdlite/react-fiber-architecture

# Episode 6 -- Exploring the world
    - useEffect() --> It takes two arguments.
                     1. callback function
                     2. Dependency Array
    - useEffect(() => {}, []);
    - When the callback function is called ?
        - After the component renders, useEffect's callback function.
        - If we need to do any operation after the component renders, we can use useEffect().
    - fetch() is a superpower which js engine has.
    - fetch() is given to us by the browser
    - Conditional Rendering: Rendering a component based upon some condition is called Conditional Rendering.
    - Why we need state variable useState() ?
        - We can just declair a normal javascript local variable and we can get the work done. The problem is normal variable can not update dynamically. This is why we do not use Javascript variables in such cases.
        - If you want to make your component dynamic, if you want somthing should change in your component, we use local state variable.
    - Whenever a state variable changes, React will re render the component with updated values.
    - or in other words, Whenever a state variable updates, React triggers a Reconciliation Cycle(Re render the component) 

# Episode 7 -- Finding the Path
    - How useEffect works ?
        - useEffect take two arguments.
            1. callback function (Always Required)
            2. Dependecncy Array (Optioanl)
        - However Dependecy Array can change the behaviour of useEffect
            - If there is no Dependecy Array present ==> useEffect will call on every reender
            - If the Dependency Array is empty ==> useEffect will call only on the initial render (just once)
            - If there is some value present on the Dependency Array ==> useEffect will call whenever the value is updated. 
                - Ex: If there is a local state variable named "btnName", So whenever the "btnName" is updated useEffect will call
    - Some rules to consider for useState
        - Always create useState indide a functional component. Do not create outside of a component
        - Always create useState on the top of the functional component.
        - Never create useState inside of a if-else block or inside a loop or inside any function. It will create inconsistency of the program.
    - For Routing we will react-router-dom (npm package)
    - We need to config our routers. For that we will use createBrowserRouter.
    - After configuaration we need to provide that configuaration to render the routes and components. We will use RouteProvider for that.
    - We need to handle the errors in route as well. We will use useRouteError for that. This hook will give more information about the error.



## Config Driven UI 
    - The Config Driven by a UI
    - The Configaration of the UI will come from backend based on certain condition
    - Example: If you are creating a food ordering application, your UI will be different based upon the city. As the offers will be different, also restaurants are different.

## FUN Fact
    - Story of NPM full form. The full form of NPM is everything except "Node Package Manager".
    - Github Repo: https://github.com/npm/npm-expansions