# Umair Fearless Project

This project was created using react.js.

Reasons for choosing react.js:\
    1. React allows us to create reusable components that can be configured and customized.\
    2. React only re-renders what is needed and not the whole page.\
    3. React is easy to set up for proof of concept work using react-create-app.\
    
## Building & Running the Project

In the project home directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Note: the PORT can be changed by updating the PORT variable in the .env file located at project root.\
The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

#Future Improvements

A few nice additions to be added on in the future include:\
    1. Allowing the user to create a custom counter by taking in a key.\
    2. Adding CSS styling to improve the overall look of the webapp.\
    3. Adding multiple counters.\
    4. Allow user to give key and get the count for that key.
    
# Assumptions & Changes for Improvements

1. We would need to create more componenets for getting count for a key as well as\
   being able to create your own counter with a key.
2. Would need a design for the CSS to create best look and user experience.
3. Multiple counters would need us to refactor the counter component to take in\
   parameters that we could define so that we can change component without changing its own code.
4. Design different tabs that can be switched so that we can maintain a single app look and feel.       

