// Header.js
import React, {Component} from 'react';
export default class WorkFlow extends Component {

  constructor(props){
    super(props);

    this.state = {
    }
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
      </div>
    )
  }
}
