// SideBar.js

import React, {Component} from 'react';
import styles from "./SideBarStyle";

const $ = window.$;

export default class SideBar extends Component {

    constructor(props){
      super(props);

      this.state = {
        projectList : [
          {
            projName : "AI project",
            sparliLinData : [60,50,20,30,60,50,40]
          },
          {
            projName : "DAB project",
            sparliLinData : [40,60,20,30,60,50,50]
          },
          {
            projName : "ZMA mobile",
            sparliLinData : [90,30,60,50,40,60,50]
          },
          {
            projName : "Flexiform Table",
            sparliLinData : [10,30,60,100,40,60,50]
          },
          {
            projName : "Tms server",
            sparliLinData : [100,30,60,50,40,60,10]
          },
          {
            projName : "Xyz Project",
            sparliLinData : [20,20,60,50,40,20,50]
          },
          {
            projName : "D3 charts",
            sparliLinData : [50,30,60,50,50,60,50]
          },
          {
            projName : "BA project",
            sparliLinData : [40,60,20,30,60,50,50]
          },
          {
            projName : "ZX mobile",
            sparliLinData : [90,30,60,50,40,60,50]
          },
          {
            projName : "DLX Project",
            sparliLinData : [20,20,60,50,40,20,50]
          },
        ]
      }
    }

    componentDidMount(){
      let {projectList} = this.state;
       setTimeout(function(){
         projectList.map(function(obj,index){
           $('.sparkbar'+index).sparkline(obj.sparliLinData, {
             type: 'bar',
             barColor: 'rgb(53,135,201)',
           });
         });
       },100)

       $( 'li[cardIndex=0]' ).addClass("cardMainSelected");
    }

    renderProjectList(){
      let {projectList} = this.state;
      return (
        <ul className="sidebar-menu" data-widget="tree">
            {
              projectList.map(function(objProject ,index){
                let classnameNew = "cardMainSelected";
                let temp = objProject.projName.split(" ");
                let projNameImg = temp[0].substring(0,1) + temp[1].substring(0,1);

                return (
                  <li className="cardMain" cardIndex = {index}>
                    <div className="itemLeftCard">
                      <div className="roundCircle">
                        <label className="projNameImg">{projNameImg}</label>
                      </div>
                      <div className="roundSmall" />

                      <div className="center">
                        <label className="projNameTxt">{objProject.projName}</label><br/>
                        <label className="projNameTxt2">Large platform llc</label>
                      </div>
                      <div className = "barChartRight">
                        <div className={"sparkbar"+index}></div>
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
