// Header.js
import React, {Component} from 'react';
import WorkFlow from "./../WorkFlowComponent/WorkFlow"
export default class OverView extends Component {

  constructor(props){
    super(props);

    this.state = {}
  }

  render(){

    return (
      <div>
        <WorkFlow/>
      </div>
    )
  }
}
