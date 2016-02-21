import React from 'react'

const Main = () => (
  <div className="row">
    <div className="col-sm-3">
      <a className="btn btn-info" href="https://forums.meteor.com/t/meteor-1-3-early-beta-now-available/14723" target="_blank" style={{width: '100%'}}>
        <i className="fa fa-cube fa-flip-horizontal fa-2x pull-left"></i> Meteor<br /> 1.3 (Beta)
      </a>
      <hr/>
      <a className="btn btn-info" href="https://facebook.github.io/react/" target="_blank" style={{width: '100%'}}>
        <i className="fa fa fa-code fa-flip-horizontal fa-2x pull-left"></i> React<br /> 0.14.7
      </a>
      <hr/>
      <a className="btn btn-info" href="http://v4-alpha.getbootstrap.com/" target="_blank" style={{width: '100%'}}>
        <i className="fa fa-twitter fa-flip-horizontal fa-2x pull-left"></i> Twitter Bootstrap<br /> 4.0.0 (Alpha)
      </a>
      <hr/>
      <a className="btn btn-info" href="http://fortawesome.github.io/Font-Awesome/" target="_blank" style={{width: '100%'}}>
        <i className="fa fa-flag fa-flip-horizontal fa-2x pull-left"></i> Font Awesome<br /> 4.5.0
      </a>
    </div>
    <div className="col-sm-9">
      <div className="card">
        <h4 className="card-header">ES6 featured Boilerplate for Meteor/React application.</h4>
        <div className="card-block">
          <span className="card-text">This is a simple application build upon React, Meteor 1.3 (Beta preview with ES6 features) and Twitter Bootstrap 4.0.0 (Alpha preview).</span>
        </div>
        <div className="card-block">
          <div className="row">
            <div className="col-sm-6">
              <h5>Used Meteor packages</h5>
              <ul>
                <li><a href="https://github.com/kadirahq/flow-router" target="_blank">flow-router</a>: carefully designed client side router for Meteor.</li>
                <li><a href="http://v4-alpha.getbootstrap.com/" target="_blank">bootstrap</a>: the most popular front-end framework for developing responsive, mobile first projects on the web.</li>
                <li><a href="fortawesome.github.io/Font-Awesome/" target="_blank">fontawesome</a>: scalable vector icons that can instantly be customized.</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <h5>Used NPM packages</h5>
              <ul>
                <li><a href="https://www.npmjs.com/package/react" target="_blank">react</a> and <a href="https://www.npmjs.com/package/react-dom" target="_blank">react-dom</a>: a JavaScript library for building user interfaces.</li>
                <li><a href="https://www.npmjs.com/package/react-mounter" target="_blank">react-mounter</a>: lets you mount React components to DOM easily.</li>
                <li><a href="https://www.npmjs.com/package/react-komposer" target="_blank">react-komposer</a>: compose React containers and feed data into components.</li>
              </ul>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-sm-12">
              <h5>Further reading</h5>
              <ul>
                <li><a href="https://voice.kadira.io/getting-started-with-meteor-1-3-and-react-15e071e41cd1#.36vwj67kc" target="_blank">Getting Started with Meteor 1.3 and React</a></li>
                <li><a href="https://voice.kadira.io/let-s-compose-some-react-containers-3b91b6d9b7c8#.h5pyitsbg" target="_blank">Let’s Compose Some React Containers</a></li>
                <li><a href="https://voice.kadira.io/using-meteor-data-and-react-with-meteor-1-3-13cb0935dedb#.ybo2s1z40" target="_blank">Using Meteor Data and React with Meteor 1.3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Main
