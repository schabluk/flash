## ES6 featured Boilerplate for Meteor/React application.

### This is a simple application build upon React, Meteor 1.3 (Beta preview with ES6 features) and Twitter Bootstrap 4.0.0 (Alpha preview).

##### Used Meteor packages:

 * [flow-router](https://github.com/kadirahq/flow-router):  carefully designed client side router for Meteor.
 * [fontawesome](http://fortawesome.github.io/Font-Awesome/): scalable vector icons that can instantly be customized.

##### Used NPM packages
 * [react](https://www.npmjs.com/package/react): a JavaScript library for building user interfaces.
 * [react-mounter](https://www.npmjs.com/package/react-mounter): lets you mount React components to DOM easily.
 * [react-komposer](https://www.npmjs.com/package/react-komposer): compose React containers and feed data into components.

### Application Modules

##### Main (client/components/main.jsx)

```javascript
import React from 'react'

const Main = () => (
  <div className="row">
    <div className="col-sm-12">Hello there!</div>
  </div>
)

export default Main
```

##### Layout (client/layouts/default.jsx)

```javascript
import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'

const Layout = ({content}) => (
  <div>
    <Header />
    <div className="container">{content}</div>
    <Footer />
  </div>
)

export default Layout
```

##### Routing (client/routes.jsx)

```javascript
import React from 'react'
import {mount} from 'react-mounter'
import Layout from './layouts/default.jsx'
import Main from './components/main.jsx'

FlowRouter.route("/", {
  name: "home",
  action() {
    mount(Layout, {
      content: (<Main />)
    })
  }
})
```

##### Further reading
 * [Getting Started with Meteor 1.3 and React](https://voice.kadira.io/getting-started-with-meteor-1-3-and-react-15e071e41cd1#.36vwj67kc)
 * [Let’s Compose Some React Containers](https://voice.kadira.io/let-s-compose-some-react-containers-3b91b6d9b7c8#.h5pyitsbg)
 * [Using Meteor Data and React with Meteor 1.3](https://voice.kadira.io/using-meteor-data-and-react-with-meteor-1-3-13cb0935dedb#.ybo2s1z40)
