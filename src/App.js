import React, {Component, Suspense} from 'react';
import './App.css';

import Page1 from './components/Page1';

class App extends Component {
   constructor() {
      super();
      this.state = {
         route: 'page1',
      }
   }

   onRouteChange = (route) => {
      this.setState({ route: route });
   }

   render() {
      if (this.state.route === 'page1') {
         return <Page1 onRouteChange={this.onRouteChange} />
      } else if (this.state.route === 'page2') {
         const PageComponent = React.lazy(() => import('./components/Page2'));
         return (
            <Suspense fallback={<div>Loading...</div>}>
               <PageComponent onRouteChange={this.onRouteChange} />
            </Suspense>
         );
      } else if (this.state.route === 'page3') {
         const PageComponent = React.lazy(() => import('./components/Page3'));
         return (
            <Suspense fallback={<div>Loading...</div>}>
               <PageComponent onRouteChange={this.onRouteChange} />
            </Suspense>
         );
      }
   }
}

export default App;
