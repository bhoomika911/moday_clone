import React from 'react';
import Home from './Components/Home/Home.js'
import Page2 from './Components/Page2/Page2.js'
import Login from './Components/Login/Login.js'
import Header from './ThemeComponent/Header/Header.js'
import SideBar from './ThemeComponent/SideBar/SideBar.js'
import ContentHeader from './ThemeComponent/ContentHeader/ContentHeader.js'
import { Router, Route ,Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

let App = () => (
  <div>
    <Header />
    <SideBar />
    <ContentHeader>
      <Router history={history}>
        <Switch>
        {
          // <Route path="/" exact component={Login} />
          // <Route path="/Page2" component={Page2} />
          }
        </Switch>
      </Router>
    </ContentHeader>
  </div>
);

export default App;
