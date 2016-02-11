import React from 'react'

const Header = () => {
  return (
    <div className="pos-f-t">
      <nav className="navbar navbar-light navbar-static-top bg-faded">
        <div className="container">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/"><i className="fa fa-home"></i> Main</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
