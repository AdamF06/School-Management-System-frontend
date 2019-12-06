import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CourseHome from './Home/CourseHome'
const CourseRouter = () => {
    return (
      
  <Switch>
            <Route exact path="/course"> "/course" page hasn't desided yet </Route>
            <Route exact path="/course/:id"> <CourseHome /> </Route>
            <Route path="/course/all"> Course all page </Route>
  </Switch>

       
    );
}

export default CourseRouter;