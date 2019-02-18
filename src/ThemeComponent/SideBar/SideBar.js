// SideBar.js

import React, {Component} from 'react';
import styles from "./SideBarStyle";

export default class SideBar extends Component {

    constructor(props){
      super(props);

      this.state = {
        projectList : [1,1,1,1,1,1,1,1,1,1,1,1,1]
      }
    }

    componentDidMount(){
       $('.sparkbar').sparkline([20,30,60,50,40,60,50], {
         type: 'bar',
         barColor: 'rgb(53,135,201)',
       } );

       $( 'li[cardIndex=0]' ).addClass("cardMainSelected");
    }

    renderProjectList(){
      let {projectList} = this.state;
      return (
        <ul className="sidebar-menu" data-widget="tree">
            {
              projectList.map(function(objProject ,index){
                let classnameNew = "cardMainSelected";
                return (
                  <li className="cardMain" cardIndex = {index}>
                    <div className="itemLeftCard">
                      <div className="roundCircle">
                        <label className="projNameImg">PN</label>
                      </div>
                      <div className="roundSmall" />

                      <div className="center">
                        <label className="projNameTxt">Project Name</label><br/>
                        <label className="projNameTxt2">Large platform llc</label>
                      </div>
                      <div className = "barChartRight">
                        <div className="sparkbar"></div>
                      </div>
                    </div>
                  </li>
                )
              })
            }
        </ul>
      )
    }

    renderTop(){
      return (
        <div className = "topParent">
          <div className = "topLeft">
            <label className="projectText">Projects</label>
          </div>

          <div className = "topRight">
            <div className="newText">New</div>
            <div className = "plusIconParent">
              <i class="fa fa-plus plusIcon"></i>
            </div>
          </div>
        </div>
      )
    }

    renderSearchBar(){
      return (
        <div className = "searchbarParent">
            <input className = "inputSearch" type="text" placeholder="Search or  Update" />
            <button type="submit" name="search" id="search-btn" class="searchIconBtn"><i class="fa fa-search searchIcon"></i>
            </button>
        </div>
      )
    }

    render(){
        return (
            <aside className="main-sidebar whitebg sidbarCustom">
                <section className="sidebar">
                    {
                      this.renderTop()
                    }
                    {
                      this.renderSearchBar()
                    }
                    {
                      this.renderProjectList()
                    }
                </section>
            </aside>
        )
    }
}
