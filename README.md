This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### App Description

This app represents the 5 day weather forecast for the location `Bengaluru` using the [OpenWeatherMap 5 day weather forecast API](https://openweathermap.org/forecast5).


## Available Scripts

In the project directory, you can run:

### `npm start`

This app prepares a build for the production mode for the changes made and runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run pretty-quick`

This checks for any lint errors in the app and fixes the same.
This is added as a part of the pre-commit hook using `husky`.

### App hosting and deployment

The app is hosted on Firebase and can be accessed on: [https://test-project-nkp.firebaseapp.com/](https://test-project-nkp.firebaseapp.com/).
(Apologies for the url containing `test`).

### What more could have been done ?

1. I initially added the react-redux to see if it was required, but then I felt it would have been an overuse, it could have been probably used if we had used a search for all the cities returned by the api.
2. A bit more on the ui end.
3. I could have added more tests, but I haven't used off late much of the tests on the react components, so I will have to go through the docs.
4. The data could have been handled on the server side, since passing the ui off the frontend is a security threat, but used it just for this example.




