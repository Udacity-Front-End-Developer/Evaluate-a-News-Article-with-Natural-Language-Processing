# News article Evaluator with Natural Language Processing

_This project is part of Udacity's front end nanodegree course._

This is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

# Installation

_[NodeJs](https://nodejs.org/en/) must be installed on your local machine._

---

#### Note:

**_The app uses the meaningcloud' Sentiment Analysis API. For the app to work you need an api key from [meaningcloud](https://www.meaningcloud.com)._**

Before proceeding with the installation you need to create a `.env` file in the project directory with your api key inside of it.

```
  //.env
  API_KEY = YOUR_KEY
```

---

1. Open a terminal instance inside the project directory and run `npm install`.

2. run `npm run build:prod` to build the project.

3. run `npm start` in the terminal.

4. Open a navigator and visit `localhost:3000`.

# Dependencies

The project requires the following packages to run:

- Express v4.x
- Webpack@4.35.3
- webpack-cli@3.3.5
- babel v7.x
- node-fetch
- sass

## Testing

The project uses a unit testing method.
Both the [jest](https://jestjs.io) framework and the [transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime) plugin are required to run the tests.
Inside the project directory, open a terminal instance and run:

```
npm run test
```

## References used:

- [app.address is not a function](https://stackoverflow.com/questions/33986863/mocha-api-testing-getting-typeerror-app-address-is-not-a-function)
- [MDN](https://developer.mozilla.org)
- [JSDoc](https://jsdoc.app/)
- [Openweathermap's documentation](https://openweathermap.org/current#data)
- [css-tricks.com](https://css-tricks.com/almanac/properties/b/backdrop-filter/)
- [tests](https://www.chaijs.com/guide/styles/)
