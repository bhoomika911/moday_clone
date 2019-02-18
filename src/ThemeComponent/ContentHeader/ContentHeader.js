// Header.js
import React, {Component} from 'react';

export default class ContentHeader extends Component {

  constructor(props){
    super(props);

    this.state = {
      tabList : [
        {
          name : "OVERVIEW",
          onPress : ()=>{}
        },
        {
          name : "TASKS",
          onPress : ()=>{}
        },
        {
          name : "REQUIREMENTS",
          onPress : ()=>{}
        },
        {
          name : "AGILE BOARD",
          onPress : ()=>{}
        },
        {
          name : "MESSAGES",
          onPress : ()=>{}
        },
        {
          name : "PEOPLE",
          onPress : ()=>{}
        },
        {
          name : "TIMELINE",
          onPress : ()=>{}
        },
        {
          name : "FILES",
          onPress : ()=>{}
        },
        {
          name : "CALENDER",
          onPress : ()=>{}
        },
        {
          name : "CHARTS",
          onPress : ()=>{}
        },
        {
          name : "TIME",
          onPress : ()=>{}
        },
        {
          name : "MORE",
          onPress : ()=>{}
        },
      ],
      selectedTabIndex : 0
    }
  }

  sectionTablist(){
    let {tabList,selectedTabIndex} = this.state;
    return(
      <section className="content-header content-container-navbar">
        <div className = "content-header-container">
          {
            tabList.map(function(item,index){
              if(selectedTabIndex == index){
                return(
                  <div className = "content-header-text-container navbar-header-item-text navbar-header-selected content-selected-header-border">{item.name}</div>
                )
              }else{
                return(
                  <div className = "content-header-text-container navbar-header-item-text">{item.name}</div>
                )
              }
            })
          }
          <div className = "content-header-setting-icon">
            <div className = "navbar-icon-comp">
              <i className = "fa fa-gear"></i>
            </div>
          </div>
        </div>
      </section>
    )
  }

  render(){

    return (
      <div class="content-wrapper content-wrapper-border-line">
        <section className="content-header content-container-header">
          <div className = "content-header-container">
            <div className = "content-header-name">
              <div className= "content-header-project-name">Project Name</div>
              <div>
              </div>
            </div>
            <div className = "content-header-data">
            
            </div>
            {
              // tabList.map(function(item,index){
              //   if(selectedTabIndex == index){
              //     return(
              //       <div className = "content-header-text-container navbar-header-item-text navbar-header-selected content-selected-header-border">{item.name}</div>
              //     )
              //   }else{
              //     return(
              //       <div className = "content-header-text-container navbar-header-item-text">{item.name}</div>
              //     )
              //   }
              // })
              // <div className = "content-header-setting-icon">
              //   <div className = "navbar-icon-comp">
              //     <i className = "fa fa-gear"></i>
              //   </div>
              // </div>
            }
          </div>
        </section>
        {this.sectionTablist()}
        {this.props.children}
      </div>
    )
  }
}
