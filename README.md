## CFV+ Deckbuilder Program

To use, you will need to familarize yourself with the Electron environment.

https://www.electronjs.org/

## Technologies used

HTML, CSS, Javascript

Bootstrap was used for the design and grid system

SQLite was used for the database. You will need an editor to change in the information.


## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/machinablau/cfvplus.git
# Go into the repository
cd cfvplus
# Install dependencies
npm install
# Fix on one of the SQLite module
node_modules/.bin/electron-rebuild -f -w better-sqlite3
# Run the app
npm start
```
```bash
# To create a windows application
npm run create_Plus_WIN

# To create a Mac Application
npm run create_Plus_MAC
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs
