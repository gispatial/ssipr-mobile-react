<img src="https://github.com/gispatial/ssipr-mobile-react/blob/master/Screen%20Shot%202019-12-17%20at%204.17.38%20AM.png" alt="React Native Starter Kit" width="400" />

[![GitHub tag](https://github.com/gispatial/ssipr-mobile-react/react-native-starter-kit.svg?style=flat-square)](https://github.com/gispatial/ssipr-mobile-react/tags)
[![GitHub contributors](https://github.com/gispatial/ssipr-mobile-react/react-native-starter-kit.svg?style=flat-square)](https://github.com/gispatial/ssipr-mobile-react/contributors)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/ssipr-mobile-react/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/mcnamee/react-native-starter-kit.svg?style=flat-square)](https://github.com/gispatial/ssipr-mobile-react/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/mcnamee/react-native-starter-kit.svg?style=flat-square)](https://github.com/gispatial/ssipr-mobile-react/issues-closed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/mcnamee/react-native-starter-kit.svg?style=flat-square)](https://github.com/gispatial/ssipr-mobile-react/issues-pr)

---

[![CryptoTip](https://img.shields.io/badge/Donate%20with-CryptoTip-blue.svg?style=flat&colorB=007bff)](https://cryptotip.it/p/mcnamee)  [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U7CE3LJYX859E)

# React (Web + Native) Starter Kit for SSIPR Project

#### For when you're looking to build 'the next big thing' for both web and native mobile.

<a href="http://react7.tech/"><img src="/docs/web-demo.jpg" alt="Web Demo" height="50" /></a>
<a href="https://github.com/gispatial/ssipr-mobile-react/"><img src="/docs/expo-demo.jpg" alt="React Native Expo Demo" height="50" /></a>

---

## 👋 Intro

This boilerplate launches with a [React web app](https://reactjs.org/) and [React Native app](https://facebook.github.io/react7tech/) sharing a single code base. It shares the 'business logic' (_i.e. models, containers_) across the platforms, whilst allowing flexibility in View components to ensure your project looks and feels native in each platform.

The project is _super_ helpful to kick-start your next project, as it provides a lot of the common tools you may reach for, all ready to go. Specifically:

- A shared React and React Native structure
- __Flux architecture__
    - [Redux](https://redux.js.org/docs/introduction/)
    - Redux Wrapper: [Rematch](https://github.com/rematch/rematch)
- __Routing and navigation__
    - [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) for native mobile
    - [React Router](https://github.com/ReactTraining/react-router) for web
- __Data Caching / Offline__
    - [Redux Persist](https://github.com/rt2zz/redux-persist)
- __UI Toolkit/s__
    - [Native Base](https://nativebase.io/) for native mobile
    - [Bootstrap](https://getbootstrap.com/) for web
- __Simpler mobile app development__ through
    - [Expo](https://expo.io/)
- __User authentication__ example through
    - [Firebase](https://firebase.google.com/)
- __API/Data example__
    - Shows how to read/write data from/to an external API (in our case, [Firebase](https://firebase.google.com/))
- __Code Linting__ with
    - [Airbnb's JS Linting](https://github.com/airbnb/javascript) guidelines

---

## 📖 Docs

- [Setup your own Firebase](/docs/firebase.md)
- [Understanding the file structure](/docs/file-structure.md)
- [FAQs & Opinions](/docs/faqs.md)
- [Testing, Deploying & Publishing](/docs/publishing.md)
- [Tests & testing](/docs/testing.md) (coming soon...)
- [Contributing to this project](/docs/contributing.md)

---

## 🚀 Getting Started

#### 0. Prerequisites
Make sure you have Expo CLI installed
```bash
npm install -g expo-cli
```

#### 1. Clone and Install

_*It's recommended that you install [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases) and open before `yarn start`._

```bash
# Clone the repo
git clone https://github.com/gispatial/ssipr-mobile-react.git

# Install dependencies
yarn install
```

#### 2.1. Run the _React Native_ App

```bash
# Start the React Native packager
yarn start
```

Instructions are shown in the terminal. You can select to open it in:

- An emulator (either iOS or Android)
- Your mobile device with the [Expo app](https://expo.io/). It will reload if you save edits to your files and you will see build errors and logs in the terminal.

#### 2.2. Run the _Web_ App

```bash
# Starts are local live-reload server at:
# http://localhost:3001
yarn run web
```

Via webpack, starts a localhost server on port 3001 [http://localhost:3001](http://localhost:3001).

- Save code and it auto refreshes
- Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) into Chrome to see the state of Redux

---

## 👊 Further Help?

This repo is a great place to start, but if you'd prefer to sit back and have your new project built for you, [get in touch with us directly](https://gispatial.tech/) and we can organise a quote.

---

## 💡 Inspiration

- [This blog post](https://mcnam.ee/) helped put the ideas into action

