// App.js
import React from 'react';
import * as ReactRouterDom from 'react-router-dom'; // Import everything from react-router-dom

import CourseListingPage from './pages/CourseListingPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import StudentDashboardPage from './pages/StudentDashboardPage';

const App = () => {
  return (
    <ReactRouterDom.Router>
      <ReactRouterDom.Switch>
        <ReactRouterDom.Route path="/" exact component={CourseListingPage} />
        <ReactRouterDom.Route path="/courses/:courseId" component={CourseDetailsPage} />
        <ReactRouterDom.Route path="/dashboard" component={StudentDashboardPage} />
      </ReactRouterDom.Switch>
    </ReactRouterDom.Router>
  );
};

export default App;




