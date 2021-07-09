# News article Evaluator with Natural Language Processing

_This project is part of Udacity's front end nanodegree course._

A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

The app handles user's input and displays the api's response in the view. It has some offline functionality through service workers setup in webpack.

# Installation

_[NodeJs](https://nodejs.org/en/) must be installed on your local machine._

---

## Note:

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
- dotenv

# Testing

Both the [jest](https://jestjs.io) framework and the [transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime) plugin are required to run the tests.

Run `npm test` inside the project directory.

# Webpack

This project uses webpack@4 to compile its JavaScript modules.

It has two config files: one for production and one for development.

To run in development just run the npm script `build:dev`.

In dev mode, it uses the webpack dev server with a proxy to forward any request to the local express server that runs at port 3000

# Some development errors and fixes

### **(void 0) is not a function**:

In the building phase, webpack can't see the modules / having problem with scoped function.

**FIX**: Adding a library output _'Client'_ in webpack configuration [author-libraries](https://v4.webpack.js.org/guides/author-libraries/)

### **regeneratorRuntime is not defined**:

Testing an async function fails.

**FIX**: install @babel/plugin-transform-runtime and configure the babelrc

```
{
  "env": {
    "test": {
      "plugins": ["@babel/plugin-transform-runtime"]
    }
  }
}

```

# References used:

- [MDN](https://developer.mozilla.org)
- [JSDoc](https://jsdoc.app/)
- [RegeneratorRuntime is not defined issue](https://github.com/liferay/liferay-npm-tools/issues/105)
- [PWA google codelab](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline?hl=en&continue=https%3A%2F%2Fcodelabs.developers.google.com%2F%3Fcat%3Dall#0)
- [Meaningcloud api doc](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis)
- [Webpack doc](https://v4.webpack.js.org/)
- [A list of plugins and tutorials for webpack](https://github.com/markerikson/react-redux-links/blob/master/webpack-advanced-techniques.md)
