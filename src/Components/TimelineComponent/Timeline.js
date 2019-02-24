import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../Actions/ActionCreators'
import API from "../../Constants/APIUrls";
import styles from "./TimelineStyle";

const $ = window.$;
let self;
class Timeline extends React.Component {
  constructor(props) {
    super(props);

    self = this;


    let phaseList = [
      {
        title : "Phase 1",
        count : "Pulse 5",
      },
      {
        title : "Phase 2",
        count : "Pulse 5"
      },
      {
        title : "Phase 3",
        count : "Pulse 5"
      },
      {
        title : "Phase 4",
        count : "Pulse 5"
      },
      {
        title : "Phase 5",
        count : "Pulse 5"
      },
      {
        title : "Phase 6",
        count : "Pulse 5"
      },
    ];

    let headerList = [
      "Phase1",
      "Timeline",
      "Person",
      "Status",
      "Location Manager",
      "Status",
      "How long will this take",
      "Location",
      "+"
    ];

    let phaseTableRowList = [
      {
        phase : {
          phaseTitle : "Task 1",
          isSelected : true,
          hasUnreadMsg  :true,
          unreadCount : 4
        },
        timeline : "Feb 12-Mar 7",
        person : "DS",
        status1: {
          text : "Done",
          bgClass : "td-green"
        },
        locationManager : "AN",
        status2: {
          text : "Working on it",
          bgClass : "td-orange"
        },
        howLong : "Feb 11-14",
        location : "Giza Pyramid"
      },
      {
        phase : {
          phaseTitle : "Task 2",
          isSelected : false,
          hasUnreadMsg  :false,
        },
        timeline : "Jan 10-Mar 7",
        person : "AB",
        status1: {
          text : "Working on it",
          bgClass : "td-orange"
        },
        locationManager : "DS",
        status2: {
          text : "Stuck",
          bgClass : "td-red"
        },
        howLong : "Jan 10-Mar 19",
        location : "5th Avenue"
      },
      {
        phase : {
          phaseTitle : "Task 3",
          isSelected : true,
          hasUnreadMsg  :true,
          unreadCount : 2
        },
        timeline : "Feb 12-Mar 7",
        person : "DR",
        status1: {
          text : "Stuck",
          bgClass : "td-red"
        },
        locationManager : "PW",
        status2: {
          text : "Working on it",
          bgClass : "td-orange"
        },
        howLong : "Feb 11-14",
        location : "Colosum"
      },
      {
        phase : {
          phaseTitle : "Task 4",
          isSelected : true,
          hasUnreadMsg  :true,
          unreadCount : 6
        },
        timeline : "Feb 12-Mar 7",
        person : "DS",
        status1: {
          text : "Done",
          bgClass : "td-green"
        },
        locationManager : "AN",
        status2: {
          text : "Stuck",
          bgClass : "td-red"
        },
        howLong : "Feb 11-14",
        location : "Giza Pyramid"
      },

    ];
    this.state = {
      phaseList  : phaseList,
      headerList : headerList,
      phaseTableRowList : phaseTableRowList,
      isPulseSelected : true
    };
  }

  componentDidMount(){
    var acc = $(".accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }

    acc[0].click();


  }

  renderPhaseAccordians(){
    let {phaseList} = this.state;
    return (
        <div className="timeline-accrdian-div">
          {
            phaseList.map(function(objPhase){
              return self.renderPhaseList(objPhase)
            })
          }
        </div>
    )
  }

  renderPhaseList(objPhase){
    return (
      <div className="accordion-single">
        <div className="accordion">
          <div className="accordion-header-lft">
            {objPhase.title}
          </div>
          <div className="accordion-header-rgt">
            {objPhase.count}
          </div>
        </div>
        {
          this.renderPanel()
        }
      </div>
    )
  }

  renderPanel(){
    let {headerList,phaseTableRowList} = this.state;

    return (
      <div className="panel">
        <table>
          <tr>
            {
              headerList.map(function(objHeader,headerIndex){
                if(headerIndex == 0){
                  return self.renderHeaderPhase()
                }

                if(headerIndex == 8){
                  return self.renderHeaderPlus()
                }
                return (
                    <th>
                      <div className = "center-th">
                      {objHeader}
                      </div>
                    </th>
                )
              })
            }
          </tr>

          {
            phaseTableRowList.map(function(objRow){
              return (
                <tr>
                {
                  self.renderPhaseTD(objRow)
                }
                {
                  self.renderTimelineTD(objRow)
                }
                {
                  self.renderPersonTD(objRow)
                }
                {
                  self.renderStatus1TD(objRow)
                }
                {
                  self.renderLocationManTD(objRow)
                }
                {
                  self.renderStatus2TD(objRow)
                }
                {
                  self.renderHowLongTD(objRow)
                }
                {
                  self.renderLocationTD(objRow)
                }
                {
                  self.renderPlusTD(objRow)
                }
                </tr>
              )
            })
          }
          <tr className="createRow-row" >
            <td className="createRow" colSpan = "9">
            + Create a New Pulse (Row)
            </td>
          </tr>
        </table>
      </div>
    )
  }

  renderPhaseTD(objRow){
    let unreadChatColor = objRow.phase.hasUnreadMsg ? "unreadChatColor" : ""
    return (
      <td>
        <div className="center-td phase-row-td">
          <div className="phase-td-lft">
            <div className="phase-td-perpol">
              <div className="phase-td-center-grey-box">
              {
                objRow.phase.isSelected ?
                <div className="phase-td-center-white-box">
                  <i className="icon ion-ios-checkmark-empty check-mark"></i>
                </div>
                :
                null
              }
              </div>
            </div>
            <div className="phase-td-txt">
            {objRow.phase.phaseTitle}
            </div>
          </div>
          <div className="phase-td-rgt">
            <i className={"icon ion-ios-chatbubble-outline chat-icon " +unreadChatColor}></i>
            {
              objRow.phase.hasUnreadMsg ?
              <div className="unread-chat-count">
              {objRow.phase.unreadCount}
              </div>
              :
              null
            }

          </div>
        </div>
      </td>
    )
  }
  renderTimelineTD(objRow){
    return (
      <td>
        <div className="center-td">
          <div className = "phase-row-timeline">
            {objRow.timeline}
          </div>
        </div>
      </td>
    )
  }
  renderPersonTD(objRow){
    return (
      <td>
      <div className="center-td">
        <div className = "phase-row-Person-circle">
          {objRow.person}
        </div>
      </div>
      </td>
    )
  }
  renderStatus1TD(objRow){
    return (
      <td className = {"phase-row-status-td " + objRow.status1.bgClass}>
        <div className = "phase-row-status">
          {objRow.status1.text}
        </div>
      </td>
    )
  }
  renderLocationManTD(objRow){
    return (
      <td>
      <div className="center-td">
        <div className = "phase-row-Person-circle">
          {objRow.locationManager}
        </div>
      </div>
      </td>
    )
  }
  renderStatus2TD(objRow){
    return (
      <td className = {"phase-row-status-td " + objRow.status2.bgClass}>
        <div className = "phase-row-status">
          {objRow.status2.text}
        </div>
      </td>
    )
  }
  renderHowLongTD(objRow){
    return (
      <td>
      <div className="center-td">
        <div className = "phase-row-timeline">
          {objRow.howLong}
        </div>
      </div>
      </td>
    )

    // let progressWidthStyle = {width  :"50%"};
    // return (
    //   <td>
    //     <div className="center-td center-vertical">
    //       <div className="progress-main progress xs">
    //         <div className="progress-sub progress-bar progress-bar-aqua" style={progressWidthStyle} role="progressbar">
    //         {objRow.howLong}
    //         </div>
    //       </div>
    //     </div>
    //   </td>
    // )

  }
  renderLocationTD(objRow){
    return (
      <td>
      <div className="">
        <div className = "phase-td-location">
          <i className="icon ion-ios-location location-icon"></i>
          <div className = "phase-row-location-text">
            {objRow.location}
          </div>
        </div>
       </div>
      </td>
    )
  }
  renderPlusTD(objRow){
    return (
      <td>
      <div className="center-td">
      </div>

      </td>
    )
  }


  renderHeaderPhase(){
    return (
      <th>
      <div className = "center-th">
        <div className = "phase-header-view">
          <div className = "phase-header-down-arrow">
            <i className="icon ion-android-arrow-dropdown"></i>
          </div>
          <div className = "">
            Phase
          </div>
        </div>
      </div>
      </th>
    )
  }

  renderHeaderPlus(){
    return (
      <th>
      <div className = "center-th">
        <div className = "phase-header-plus">
          +
        </div>
      </div>
      </th>
    )
  }

  renderSelectedPulse(){
    let {isPulseSelected}  = this.state;

    let actionItems = [
      {
        iconName : "ion-android-arrow-forward",
        title : "Move to"
      },
      {
        iconName : "ion-android-delete",
        title : "Delete"
      },
      {
        iconName : "ion-android-archive",
        title : "Archive"
      },
      {
        iconName : "ion-document-text",
        title : "Export"
      },
      {
        iconName : "ion-ios-copy-outline",
        title : "Duplicate"
      },
    ];

    if(isPulseSelected){
      return (
        <div className="selected-pulse-div">
        <div className="selected-pulse-rel-child-div">
          <div className="selected-pulse-div-lft">
            <div className="selected-pulse-count">
              2
            </div>

            <div className="selected-pulse-text-div">
              <div className="selected-pulse-text">
                Pulse Selected
              </div>

              <div className="selected-pulse-dot-parent">
                <div className="selected-pulse-dot" />
                <div className="selected-pulse-dot" />
              </div>
            </div>
          </div>
          <div className="selected-pulse-div-rgt">
            <div className="selected-pulse-div-close">
              <i className="icon ion-android-close"></i>
            </div>

            {
              actionItems.map(function(objActionItem){
                return (
                  <div className="selected-pulse-div-action-item">
                    <i className={"icon "+objActionItem.iconName+" selected-pulse-div-action-item-icon"}></i>
                    <div className="selected-pulse-div-action-item-txt">
                      {objActionItem.title}
                    </div>
                  </div>
                )
              })
            }
          </div>
          </div>
        </div>
      )
    }else{
      return null;
    }
  }


  render(){
    return (
        <div className="timeline-page">
          {
            this.renderPhaseAccordians()
          }

          {
            this.renderSelectedPulse()
          }
        </div>
    )
  }

}



export default Timeline;
