import React from 'react'
import {mount} from 'react-mounter'
import Layout from './layouts/default.jsx'
import Main from './components/main.jsx'
import People from './containers/people'

FlowRouter.route("/", {
  name: "main",
  action() {
    mount(Layout, {
      content: (<Main />) // Mounting component
    })
  }
})

FlowRouter.route("/people", {
  name: "people",
  action() {
    mount(Layout, {
      content: (<People />) // Mounting container
    })
  }
})
