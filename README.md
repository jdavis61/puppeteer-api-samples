# puppeteer-api-samples
This repo contains sample ES6 page objects using the goggle chrome [puppeteer](https://github.com/GoogleChrome/puppeteer) library. The test runner is [tape](https://github.com/substack/tape). The application under test is a forked copy of [tourdedave's "the-internet"](https://github.com/tourdedave/the-internet) project which contains numerous examples of hard to automate pages. 

# Dependencies
* Ruby -- Needed to run the "the-internet" project locally.
* Node.js version 8 or greater

# Web server setup instructions
To start the "the-internet" web server, clone the latest version of this repo from https://github.com/jdavis61/the-internet.git. Then start the server using the rackup command. If you receive the message "Your Ruby version is 2.3.3, but your Gemfile specified x.x.x", add the version of Ruby installed on your machine to the Gemfile. Once the webserver is started, the home page may be found at http://localhost:9292.

```
git clone https://github.com/jdavis61/the-internet.git
rackup
```

# Test execution
To run the tests, clone the latest version of this repo and do an npm install. Then execute ```npm test```.
