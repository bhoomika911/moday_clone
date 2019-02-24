import React from 'react';
import Home from './Components/Home/Home.js'
import OverView from './Components/OverViewComponent/OverView.js'
import Timeline from './Components/TimelineComponent/Timeline.js'
import Header from './ThemeComponent/Header/Header.js'
import SideBar from './ThemeComponent/SideBar/SideBar.js'
import ContentHeader from './ThemeComponent/ContentHeader/ContentHeader.js'
import { Router, Route ,Switch} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

// let App = () => (
//   <div>
//     <Header />
//     <SideBar />
//     <ContentHeader>
//       <Router history={history}>
//         <Switch>
//         {
//           <Route path="/" exact component={Timeline} />
//           // <Route path="/" exact component={OverView} />
//           // <Route path="/Page2" component={Page2} />
//           }
//         </Switch>
//       </Router>
//     </ContentHeader>
//   </div>
// );

class App extends React.Component {
  render(){
    return (
      <div>
          <Header />
          <SideBar />
          <ContentHeader>
            <Router history={history}>
              <Switch>
              {
                <Route path="/" exact component={OverView} />
                // <Route path="/" exact component={OverView} />
                // <Route path="/Page2" component={Page2} />
                }
              </Switch>
            </Router>
          </ContentHeader>
        </div>
    )
  }
}

export default App;
