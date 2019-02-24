import React from 'react';
import Home from './Components/Home/Home.js'
import OverView from './Components/OverViewComponent/OverView.js'
import Timeline from './Components/TimelineComponent/Timeline.js'
import Header from './ThemeComponent/Header/Header.js'
import SideBar from './ThemeComponent/SideBar/SideBar.js'
import ContentHeader from './ThemeComponent/ContentHeader/ContentHeader.js'
import { Router, Route ,Switch,browserHistory} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

let App = () => (
  <div>
    <Header history={history} />
    <SideBar history={history} />
    <ContentHeader history={history}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={OverView} />
          <Route path="/timeline" exact component={Timeline} />
        </Switch>
      </Router>
    </ContentHeader>
  </div>
);

export default App;
