# prettyLittleThing

Steps to run this project:

## Install dependencies:

```bash
$ yarn
```

Open terminal and run the following command to start the metro bundler:

## Run

```bash
# run in development mode
$ yarn start
```

Open a new terminal and run the following commands to run the app on Android/iOS:

### Build for Android

1. Build the Android app:

```bash
$ yarn android
```

### Build for iOS

1. Build the iOS app:

```bash
$ yarn ios
```

## Test

```bash
# unit tests
$ yarn test

# updates test snapshots
$ yarn test:update-snapshot

# generates test coverage
$ yarn test:coverage
```

If there is some connection issue between metro server and emulator or device
then run the following command:

## Fix connection issue

```bash
$ adb reverse tcp:8081 tcp:8081
```
