
<img src="https://beefree.io/wp-content/themes/bee2017/img/logo-bee.svg" width="100" alt="BEE Plugin" />

**Live Demo**: https://beefree.io/templates/

# React Sample Code

![](https://beefree.io/wp-content/themes/bee2017/img/beeplugin/hero.png)

### Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Obtaining Credentials](#obtaining-credentials)
- [Resources](#resources)

### Prerequisites

- [FREE Developer Account](https://developers.beefree.io/signup/plan/1)


### Getting Started

The easiest way to get started is to clone this repository:

```bash
# Get the latest snapshot 
git clone https://github.com/BEE-Plugin/beeplugin-react-starter.git myproject

# Change directory
cd myproject

# Open config.local.ts and change  
# the placeholders with your credentials
CLIENT_ID:       '### my-client-id ###'
CLIENT_SECRET:   '### my-secret-key ###'
CLIENT_UID:      '### username ###'
# NOTE: remember to store these credentials in your
# back-end and not expose them publicly in your front-end

# Install dependencies, then start the project
# with the minimal scripts provided:
> npm install
> npm start

# or using yarn:
> yarn
> yarn start

# Then simply run it in your browser
http://localhost:8080/
```

### Build
There is a simple build script that uses Webpack default configuration for the bundle
```bash
# Build the project in a single artifact:
> npm run build

# or with yarn:
> yarn build
```
The output is a `bundle.js` file in the root of the project.


### Obtaining Credentials

To use BEE Plugin, you will need to obtain appropriate credentials: Client ID and Client Secret, which are available in the application details page of the BEE Plugin developer portal.

https://developers.beefree.io/apps

### Resources

* [Technical Docs](https://docs.beefree.io/) 
* [Developer Portal](https://developers.beefree.io/login) 
* [FAQs](https://docs.beefree.io/faq/)

