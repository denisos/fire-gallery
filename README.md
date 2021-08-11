# fire-gallery
"Fire Gallery! Ah-ah He'll save every one of us" - name the song

A web app which integrates with Google Firebase firestorage and database to upload and view images from your desktop.

Users can choose images to upload and store in firebase. Users can view the images uploaded.

Uses two custom hooks to integrate to Firebase to store images and links and also get the list of links for images uploaded.

This was a fun learning exercise to 
1. learn more about Firebase storage (firebase fan here, I've used since before Google bought them)
2. learn and checkout the net ninja
3. neat css styling for file upload and use of grid BUT not a fan of how the images are cropped! why?
4. learn more about custom hooks

Customizations I made:
1. tests; I added (some) unit tests using react-testing library
2. to easily test ImageGrid component I changed to pass in the images loded from json mock file to render rather than have it use the custom hook directly (dependency injection) i.e. the React "connected component" vs "pure component" separation.
3. file naming, I use .jsx for filenames with jsx in it...right?
4. the images in the grid are cropped, why? I changed the css to not do that
6. changed list of images in ImageGrid component to ul instead of divs (better semantic imo)

Built following along a tutorial by the net ninja [see here](https://github.com/iamshaunjp/firegram/tree/starter-files)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

