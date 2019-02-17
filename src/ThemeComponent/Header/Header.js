// Header.js
import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header className="main-header-comp">
              <nav className="navbar navbar-static-top navbar-nav-custom">
                <div className = "navbar-icon-comp navbar-icon-special">
                  <i className = "fa fa-envelope-o"></i>
                </div>

                <div className = "navbar-header">
                  <div className = "navbar-header-item-text">Projects</div>
                  <div className = "navbar-header-item-text">People</div>
                  <div className = "navbar-header-item-text">Timeline</div>
                  <div className = "navbar-header-item-text">Messages</div>
                  <div className = "navbar-header-item-text">Meetings</div>
                  <div className = "navbar-header-item-text">Idea Wall</div>
                  <div className = "navbar-header-item-text">Document</div>
                  <div className = "navbar-header-item-text">Support</div>
                </div>
                <div className = "navbar-header-search-parent">
                  <div className="navbar-search">
                    <input className="navbar-search-text" type="text" placeholder="Search or Update"/>
                    <i className = "fa fa-search navbar-search-icon"></i>
                  </div>
                </div>
                <div className = "navbar-icon-comp">
                  <i className = "fa fa-envelope-o"></i>
                </div>
                <div className = "navbar-icon-comp">
                  <i className = "fa fa-envelope-o"></i>
                </div>
                <div className = "navbar-icon-comp">
                  <i className = "fa fa-envelope-o"></i>
                </div>
                <div className = "navbar-icon-comp">
                  <i className = "fa fa-envelope-o"></i>
                </div>

              </nav>
            </header>
        )
    }
}
