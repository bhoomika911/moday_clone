// Header.js
import React, {Component} from 'react';
export default class WorkFlow extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
  }

  renderTeam(){
    return (
      <div className='team-div extra-style'>
        <div className='person-div-single' style={{zIndex : 10,left : 10}}>
          <img src="./../../../dist/img/avatar.png"
            className = 'team-img'
            />
          <div className = "person-online-status"/>
        </div>

        <div className='person-div-single' style={{zIndex : 9,left : 5}}>
          <img src="./../../../dist/img/avatar2.png"
            className = 'team-img'
          />
          <div className = "person-online-status"/>
        </div>

        <div className='person-div-single'  style={{zIndex : 8,left : 0}}>
          <img src="./../../../dist/img/avatar3.png"
            className = 'team-img'
           />
           <div className = "person-online-status"/>
        </div>
      </div>
    )
  }

  render(){
    return (
      <div className = "workflow-parent">
        <div className = "workflow-project-details-container">
          <div className = "workflow-project-owner-details">
            <div className = "workflow-project-owner-profile-pic">
              <p className = "workflow-project-owner-name-short">JD</p>
            </div>
            <div className = "work-flow-owner-det">
              <div className = "workflow-project-owner-roles-cont">
                <div className = "workflow-project-owner-role">Lead: Lead From - Upgrade</div>
                <div className = "fa fa-angle-down"/>
              </div>
              <div className = "workflow-project-owner-name">John Deo</div>
            </div>
          </div>
          <div className = "workflow-project-other-details">
          <div className = "work-flow-owner-company-details">
            <div className = "workflow-project-owner-role">Company/Lead Name</div>
            <div className = "workflow-project-owner-name work-flow-owner-company-detail-text">Emory University</div>
          </div>
            <div className = "work-flow-owner-company-details">
              <div className = "workflow-project-owner-role">Business Phone</div>
              <div className = "workflow-project-owner-name work-flow-owner-company-detail-text">+1 404 727 6123</div>
            </div>
            <div className = "work-flow-owner-company-details">
              <div className = "workflow-project-owner-role">Industry</div>
              <div className = "workflow-project-owner-name work-flow-owner-company-detail-text">Schools and Education</div>
            </div>
            <div className = "fa fa-angle-down"/>
          </div>
        </div>
        <div className = "workflow-container">
          <div className = "workflow-container-project-det">
            <div className = "workflow-container-project-name">PROJECT NAME</div>
            <div className = "workflow-container-project-active-since">Active last 24 Hours</div>
          </div>
          <div className = "workflow-container-back-arrow-container">
            <div className = "fa fa-angle-left fa-left-size"/>
          </div>
          <div className = "workflow-container-workflow-container">
            <div className = "workflow-tabs-headers">

              <div className = "">Research & Quality Lead</div>
            </div>
            <div className = "workflow-tabs-headers">
              <div className = "">Discovery Call</div>
            </div>
            <div className = "workflow-tabs-headers">
              <div className = "">Demo 1</div>
            </div>
            <div className = "workflow-tabs-headers">
              <div className = "">Demo 2</div>
            </div>
            <div className = "workflow-tabs-headers">
              <div className = "">Purpose</div>
            </div>
            <div className = "workflow-tabs-headers">
              <div className = "">Close</div>
            </div>
            {
              <div className = "workflow-container-workflow-indicator">
                <div className = "workflow-tabs">
                {
                  this.renderTeam()
                }
                  <div className = "workflow-start-end-row-indicator"/>
                  <div className = "workflow-status-indicator workflow-status-complition">
                    <div className = "workflow-status-complition-circle">
                    </div>
                  </div>
                  <div className = "workflow-row-indicator"/>
                </div>
                <div className = "workflow-tabs">
                  <div className = "workflow-row-indicator"/>
                  <div className = "workflow-status-indicator"/>
                  <div className = "workflow-row-indicator"/>
                </div>
                <div className = "workflow-tabs">
                  <div className = "workflow-row-indicator"/>
                  <div className = "workflow-status-indicator"/>
                  <div className = "workflow-row-indicator"/>
                </div>
                <div className = "workflow-tabs">
                  <div className = "workflow-row-indicator"/>
                  <div className = "workflow-status-indicator"/>
                  <div className = "workflow-row-indicator"/>
                </div>
                <div className = "workflow-tabs">
                  <div className = "workflow-row-indicator"/>
                  <div className = "workflow-status-indicator"/>
                  <div className = "workflow-row-indicator"/>
                </div>
                <div className = "workflow-tabs">
                  <div className = "workflow-row-indicator"/>
                  <div className = "workflow-status-indicator"/>
                  <div className = "workflow-start-end-row-indicator"/>
                </div>
              </div>
            }

          </div>

        </div>
      </div>
    )
  }
}

// <ul className="timeline" id="timeline">
//   <li className="li complete">
//     <div className="timestamp">
//       <span className="author">Abhi Sharma</span>
//       <span className="date">11/15/2014</span>
//     </div>
//     <div className="status">
//       <h4> Shift Created </h4>
//     </div>
//   </li>
//   <li className="li complete">
//     <div className="timestamp">
//       <span className="author">PAM Admin</span>
//       <span className="date">11/15/2014</span>
//     </div>
//     <div className="status">
//       <h4> Email Sent </h4>
//     </div>
//   </li>
//   <li className="li complete">
//     <div className="timestamp">
//       <span className="author">Aaron Rodgers</span>
//       <span className="date">11/15/2014</span>
//     </div>
//     <div className="status">
//       <h4> SIC Approval </h4>
//     </div>
//   </li>
//   <li className="li">
//     <div className="timestamp">
//       <span className="author">PAM Admin</span>
//       <span className="date">TBD</span>
//     </div>
//     <div className="status">
//       <h4> Shift Completed </h4>
//     </div>
//   </li>
// </ul>
