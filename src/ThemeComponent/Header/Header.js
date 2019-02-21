// Header.js
import React, {Component} from 'react';

export default class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      tabList : [
        {
          name : "Projects",
          onPress : ()=>{this.onPressTab()}
        },
        {
          name : "People",
          onPress : ()=>{}
        },
        {
          name : "Timeline",
          onPress : ()=>{}
        },
        {
          name : "Messages",
          onPress : ()=>{}
        },
        {
          name : "Meetings",
          onPress : ()=>{}
        },
        {
          name : "Idea Wall",
          onPress : ()=>{}
        },
        {
          name : "Document",
          onPress : ()=>{}
        },
        {
          name : "Support",
          onPress : ()=>{}
        },
      ],
      selectedTabIndex : 0
    }
  }

  onPressTab(){
    // this.setState({
    //   selectedTabIndex : index
    // })
  }

  render(){
    let {tabList,selectedTabIndex} = this.state;
    return (
        <header className="main-header-comp main-header-border">
          <nav className="custom-nav navbar-static-top navbar-nav-custom">
            <div className = "navbar-icon-comp navbar-icon-special">
              <i className = "fa fa-envelope-o"></i>
            </div>

            <div className = "navbar-header">
            {
              tabList.map(function(item,index){
                if(selectedTabIndex == index){
                  return(
                    <div className = "navbar-header-item-text navbar-header-selected">{item.name}</div>
                  )
                }else{
                  return(
                    <div className = "navbar-header-item-text">{item.name}</div>
                  )
                }

              })
            }
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
