# fire-gallery
"Fire Gallery! Ah-ah He'll save every one of us" - name the song & band ;-)

A web app which integrates with Google Firebase firestorage and database to upload images from your device and then to show all images uploaded.

Users can choose images to upload and store in firebase. Users can view the images uploaded.

This app uses two custom hooks to integrate to Firebase to store images and links and also get the list of links for images uploaded.

This was a fun learning exercise to 
1. learn more about Firebase storage (firebase fan here, I've used since before Google bought them)
2. learn and checkout "the net ninja"
3. neat css styling for file upload and use of grid BUT made some changes for how the images were setup & cropped! why?

Customizations I made:
1. tests; I added unit tests using react-testing library including file upload tests which can be tricky
2. to easily test ImageGrid component I changed from original to pass in the images loded from json mock file to render rather than have it use the custom hook directly (dependency injection) i.e. the React "connected component" vs "pure component" separation.
3. file naming, I use .jsx for filenames with jsx in it...right?
4. the images in the grid are cropped, why? I simplified the css to not crop unless necessary. I'm using css "object-fit" property with cover value (maintain aspect ratio while filling content box)
5. changed the html of images in ImageGrid component to just be a div containing img elements (instead of imgs wrapped in a div which is unnecessary) 

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

