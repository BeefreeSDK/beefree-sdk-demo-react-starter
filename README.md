![BEE Plugin](https://avatars.githubusercontent.com/u/15609939?s=150&v=4)

**Live Demo**: https://beefree.io/start-designing

# React Sample Code

### Table of Contents

- [React Sample Code](#react-sample-code)
    - [Table of Contents](#table-of-contents)
    - [Prerequisites](#prerequisites)
    - [Getting Started](#getting-started)
    - [Build](#build)
    - [Obtaining Credentials](#obtaining-credentials)
    - [Resources](#resources)

### Prerequisites

- [FREE Developer Account](https://developers.beefree.io/signup/plan/1)


### Getting Started

The easiest way to get started is to clone this repository:

```bash
# Get the latest snapshot 
git clone https://github.com/BeefreeSDK/beefree-sdk-demo-react-starter.git myproject

# Change directory
cd myproject
```

Open `config/config.local.ts` and change the placeholders with your credentials:
```javascript
CLIENT_ID:       '### my-client-id ###'
CLIENT_SECRET:   '### my-secret-key ###'
CLIENT_UID:      '### username ###'
```
> NOTE: remember to store these credentials in your
> back-end and not expose them publicly in your front-end

Install dependencies, then start the project
 with the minimal scripts provided:

```bash
> npm install
> npm start

# or using yarn:
> yarn
> yarn start
```
Then run it in your browser:  
http://localhost:8080/


### Build
There is a simple build script that uses **Webpack** default configuration for the bundle
```bash
# Build the project in a single artifact:
> npm run build

# or with yarn:
> yarn build
```
The output is a `bundle.js` file in the project's root.


### Obtaining Credentials

To use Beefree SDK, you must obtain the appropriate credentials: Client ID and Client Secret, available on the Beefree SDK Developer Console application details page.

https://developers.beefree.io/apps

### Resources

* [Technical Docs](https://docs.beefree.io/) 
* [Developer Portal](https://developers.beefree.io/login) 
* [FAQs](https://docs.beefree.io/faq/)
