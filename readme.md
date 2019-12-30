# Hiperf
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmikaelvesavuori%2Fhiperf.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmikaelvesavuori%2Fhiperf?ref=badge_shield)


Hiperf is a high performance web development architecture based on Webpack – just apply your framework.

## Author

[Mikael Vesavuori](https://www.mikaelvesavuori.se), 2018

## Status

Readme.md being actively updated. In Hiperf itself, there's still stuff I want to fix, like SVGs behaving really weird. Also, a lot of the commands are sort of Mac-specific. I need to update those to plugins or something else. So, if you're on Windows, expect to hack at the `package.json` for a bit.

## Features

* **Performant**: High-performance Webpack 3 boilerplate with dev and production targets
* **PWA and offline support**: Your site will behave like an app and be available offline
* **High quality code**: Prettier and ESLint is in place to safeguard your code quality.
* **Test ready**: Run performance tests with Lighthouse, Sonarwhal, and Sitespeed.io
* **Secure**: .htaccess and Netlify headers with tight Content Security Policy and hotlink protection (among lots of other things)
* **Hooks**: Precommit and push hooks with Husky
* **Modern structure**: Includes an HTML example with modern patterns to learn from and modern CSS using PostCSS in a partial structure with Suit-like syntax

## Prerequisites

* Recent Node (8 LTS or 9) with NPX
* Hiperf expects Yarn but you could switch commands in package.json to point to NPM instead

## Commands

* `yarn run dev` to do development and see bundle analysis
* `yarn build` to do a static build to the `dist` folder

Running the example project will create some "trash" files (unnecessary HTML and JS) that are not optimal in a production scenario. See the example project just as that, an example!

## Configs

You will find a number of preset configuration files:

* Babel: Optimized for performance
* Netlify: netlify.toml for running build on deploy, and \_headers to add good, secure default headers (CSP coming soon)
* manifest.json: Set up a manifest so your site/app can instruct that it conforms to the Progressive Web App standards
* crossdomain.xml: Set up a restrictive policy
* Browserslist: Targets modern browsers
* Prettier: Extend this to what makes sense in your project
* Sonarwhal: Default presets
* PostCSS: Target modern browsers

## Testing

Tests run on an online URL that you need to set in package.json.

* `yarn test` to run size-limit
* `yarn test:url` to run Lighthouse, Sonarwhal and Sitespeed.io

## Acknowledgements

Hiperf and any kind of similar boilerplate/architecture would never be possible without the dedicated hard work by thousands of people around the world creating fantastic tools. Some of those tools (on their own) and bits of them that are incorporated here include:

* [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache)
* [Webpack]()
* [PostCSS]()
* [Prettier]()
* [Husky]()
* [Browserslist]()
* [Sonarwhal]()
* [Babel]()


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fmikaelvesavuori%2Fhiperf.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fmikaelvesavuori%2Fhiperf?ref=badge_large)