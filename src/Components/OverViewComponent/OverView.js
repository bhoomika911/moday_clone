// Header.js
import React, {Component} from 'react';
import WorkFlow from "./../WorkFlowComponent/WorkFlow"
import OverViewTable from "./../OverViewTableComponent/OverViewTable"
export default class OverView extends Component {

  constructor(props){
    super(props);

    this.state = {}
  }

  render(){

    return (
      <div>
        <WorkFlow/>
        <OverViewTable />
      </div>
    )
  }
}
