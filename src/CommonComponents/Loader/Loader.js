import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../Actions/ActionCreators'
import styles from "./LoaderStyle";

class Loader extends React.Component {
  render() {
    return (
      <div className="overlayLoader">
        <div className="loader" />
      </div>
    );
  }

};



export default Loader;
