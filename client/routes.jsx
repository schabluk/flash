import React from 'react'
import {mount} from 'react-mounter'
import Layout from './layouts/default.jsx'
import Main from './components/main.jsx'

FlowRouter.route("/", {
  name: "main",
  action() {
    mount(Layout, {
      content: (<Main />)
    })
  }
})
