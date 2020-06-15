# Drive2park
Drive2park is an Online Marketplace for booking parking space.Drive2park makes it easy to find
and book parking space for any location.

<img src="https://github.com/prashantpaddune/Drive2park/raw/master/public/assets/images/drive2park.png" height="200"/>
 
## Screenshots


<p>
<img src="https://github.com/prashantpaddune/Drive2park/blob/v2/screenshots/Screenshot%20from%202020-06-02%2014-45-50.png?raw=true">
<img src="https://github.com/prashantpaddune/Drive2park/blob/v2/screenshots/Screenshot%20from%202020-06-02%2014-46-13.png?raw=true">
<img src="https://github.com/prashantpaddune/Drive2park/blob/v2/screenshots/Screenshot%20from%202020-06-02%2014-48-17.png?raw=true">
<img src="https://github.com/prashantpaddune/Drive2park/blob/v2/screenshots/Screenshot%20from%202020-06-02%2014-49-54.png?raw=true">
<img src="https://github.com/prashantpaddune/Drive2park/blob/v2/screenshots/Screenshot%20from%202020-06-02%2014-50-23.png?raw=true">
<img src="https://github.com/prashantpaddune/Drive2park/blob/v2/screenshots/Screenshot%20from%202020-06-02%2014-51-40.png?raw=true">
<img src="https://github.com/prashantpaddune/Drive2park/blob/v2/screenshots/Screenshot%20from%202020-06-02%2014-52-11.png?raw=true">
<img src="https://github.com/prashantpaddune/Drive2park/blob/v2/screenshots/Screenshot%20from%202020-06-02%2014-52-50.png?raw=true">
<img src="https://github.com/prashantpaddune/Drive2park/blob/v2/screenshots/Screenshot%20from%202020-06-02%2014-53-25.png?raw=true">
<img src="https://github.com/prashantpaddune/Drive2park/blob/v2/screenshots/Screenshot%20from%202020-06-02%2014-53-55.png?raw=true">
<br>

</p>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this project

File in `server/config/dev.js` with content of:

```javascript
module.exports = {
  DB_URI: 'your_mongo_db_connection_string', // Get it here -> https://www.mongodb.com/
  JWT_SECRET: 'some_unique_value', // e.g: 'dasid7asd7xc68zxc!'
  
//Connect Cloudinary API, Get it here -> https://cloudinary.com/
  CLOUDINARY_NAME: 'cloudinary_name', 
  CLOUDINARY_KEY: 'cloudinary_key', 
  CLOUDINARY_SECRET: 'cloudinary_secret'
}
```

To run Backend api server, run `npm start`.

To run Frontend server, run `npm run-script start-dev`.

## How to Contribute
1. Fork the the project
2. Create your feature branch (git checkout -b my-new-feature)
3. Make required changes and commit (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## License

This project is licensed under the GNU General Public License v3.0
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
