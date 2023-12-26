# hi Roman! i didn't managed twitter api because of authentication and I used [Pexels api](https://www.pexels.com/api/documentation/) instead of that and implemented a basic app with some core libs which i usualy use in the projects from scratch. Since i don't have user id for settings screen, i've used device id - i've used [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info) for that. Also I have used next libs: redux for state management, redux-persist and @react-native-async-storage/async-storage to persist data, redux-saga like a middleware for sideeffects, react-navigation for navigation, axios for api requests, react-native-fast-image to cache images

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone the repo

```bash
git clone https://github.com/subbotnik/fliff.git

# or using SSH

git clone git@github.com:subbotnik/fliff.git
```

## Step 2: Install node modules and CocoaPods

```bash
cd fliff

# using npm
npm install

# OR using Yarn
yarn

cd ios && pod install && cd ..
```

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

