import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../Actions/ActionCreators'
import API from "../../Constants/APIUrls";
import styles from "./Page2Style";

class Page2 extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
    hover: false ,
    articalsList  : []
    };
  }

  onPressBtn(){
    this.props.history.goBack({
      dataFromPage2 : "Bhumi"
    });
  }

  render() {
    return (
        <button style={styles.btnStyle}
          onClick={() => this.onPressBtn()}
        >Go to Home</button>
    );
  }

};



export default Page2;
