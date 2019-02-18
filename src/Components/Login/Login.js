import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../Actions/ActionCreators'
import API from "../../Constants/APIUrls";
import styles from "./LoginStyle";
import Loader from "./../../CommonComponents/Loader/Loader";

class Login extends React.Component {
  constructor(props) {
    super(props);

    // alert(this.props.location.state.dataFromHome);

    this.state = {
    hover: false ,
    articalsList  : []
    };
  }


  componentDidMount(){
    $("body").addClass("hold-transition login-page");

    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' /* optional */
    });
  }

  onPressLoginBtn(event){
    event.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();

    alert(email + "  " + password);
  }

  render() {
    return (
      <div className="login-box login-screen-back">
        <div className="login-logo">
          <a><b>Admin</b>LTE</a>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>

          <form>
            <div className="form-group has-feedback">
              <input id="email" type="email" className="form-control" placeholder="Email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input id="password" type="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button
                  onClick={(event) => this.onPressLoginBtn(event)}
                  className="btn btn-primary btn-block btn-flat"
                  >Sign In</button>
              </div>
            </div>
          </form>

          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
              Facebook</a>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
              Google+</a>
          </div>

          <a href="#">I forgot my password</a><br/>
          <a href="register.html" className="text-center">Register a new membership</a>
        </div>
        {
          // <Loader />

        }

      </div>
    );
  }

};



export default Login;
