import React from 'react'

let isActive = (routeName) => (
  (FlowRouter.getRouteName() === routeName) ? 'active' : ''
)

const Header = () => {

  console.log(_.functions(FlowRouter))
  console.log(FlowRouter.getRouteName())
  return (
    <div className="pos-f-t">
      <nav className="navbar navbar-light navbar-static-top bg-faded">
        <div className="container">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <ul className="nav navbar-nav">
              <li className={"nav-item " + isActive('main')}>
                <a className="nav-link" href="/"><i className="fa fa-home"></i> Main</a>
              </li>
              <li className={"nav-item " + isActive('people')}>
                <a className="nav-link" href="/people"><i className="fa fa-users"></i> People</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
