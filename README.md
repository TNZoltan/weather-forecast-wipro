## Developer manual
The application was built using the create-react-app boilerplate.

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.<br>

### `npm run build`
Builds the app for production to the `build` folder.<br>

## Thought process
One thing I always do before implementing new features is to take a look at what other successful developers have made for their use cases. Not only because they could inspire me, but also because I might see criticism for their implementation and realize those mistakes sooner. 

After a quick search I found out that I find some of the major existing services overly complicated. That's not to say that extra information is a bad thing, but I believe they are not separated enough. Considering that the majority of the users - assumably - come for a single piece of information, whether that is: "Will it rain today?" or, "Is it warm enough tomorrow for me to go to the park?", these websites don't give a straightforward answer to these questions. 

For this reason I have made two main areas in the application: one that captures all necessary information for the average person and another that gives you a detailed overview of the data available. 

The same thing could be said about changing the overview, therefore I have also separated that. I have positioned it beside the overview so more of the application can stay above the fold.

This complete separation is obviously a simplified representation of a real life application, but the principle would still remain.

## Tradeoffs
I much prefer Sass, but due to simplicity and saving time (it's trickier to set up with create-react-app) I have stayed with CSS.

## Following tasks
Firstly I would finish implementing the essential features (filtering by city and more, detailed weather forecast of the day) which I have not done in this state of the application. 

There is no ideal responsiveness nor browser compatiblity ensured at the moment. This is another aspect that needs fixing.

The API does not return entries for the current date in late hours (they probably send all entries that is later than the current time), thus using only this API endpoint is not enough and would probably want to include logic for the "Current weather data" API. 

Once these are in place, I would add some visual representation of the weather and improve the styling of the application.

The current way the date objects are handled is not the best. I would have to look into this more, but there should be a more optimal way to compare and adjust date values, because currently objects are being created in the memory needlessly. It might need a framework like moment.

I would also look for a way to restrict the OWM API key to the domain it's hosted on. 