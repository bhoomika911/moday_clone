import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../Actions/ActionCreators'
import API from "../../Constants/APIUrls";
import styles from "./HomeStyle";
import {clearGetNews} from "./HomeAction";
import {  Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    hover: false ,
    articalsList  : []
    };
  }

  componentDidUpdate(){
    if (
      this.props.getNewsRes != undefined &&
      this.props.getNewsRes != ""
    ) {
      this.props.clearGetNews();
    }
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    // Handle  userProfileData response
    if (
      nextProps.getNewsRes != undefined &&
      nextProps.getNewsRes != ""
    ) {
      if (nextProps.getNewsRes.isError) {
        alert("inError")
      } else {
        let articlesList = nextProps.getNewsRes.articles;
        //console.log("articlesList-------->",articlesList);

        this.setState({
          articlesList : articlesList
        });
      }

    }
  }

  onPressBtn(){
    this.props.history.push(
      '/Page2',
      {
        dataFromHome : "Bhumi"
      });
    return false;

    let method = "get";
    let serviceURL = API.GET_NEWS;
    let payload = {
      serviceURL : serviceURL,
      method : method
    };

    this.props.getNews(payload);
  }

  render() {
    return (
      <div>
        <Link to="/Page2">Page2</Link>
        <button style={styles.btnStyle}
          onMouseOut={() => { this.setState({ hover: false }) }}
          onMouseOver={() => { this.setState({ hover: true }) }}
          onClick={() => this.onPressBtn()}
        >Press to see News</button>
      </div>
    );
  }

};


const mapStateToProps = ({ homeReducer }) => {
  const {
    getNewsRes
  } = homeReducer;

  return {
    getNewsRes: getNewsRes,
  };
};


export default connect(
  mapStateToProps,
  {
    getNews,
    clearGetNews
  }
)(Home);
