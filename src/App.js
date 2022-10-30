import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewItem from './components/NewItem'
import News from './components/News'
import Trending from './components/Trending'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class 
 extends Component {
  render() {
    return (
      <Router>
      <Navbar/>
     
      <Routes>
          <Route exact path="/business" element={<News key="business" sz="10" country="in" category="business" />}/>
          <Route exact path="/entertainment" element={<News key="enter" sz="10" country="in" category="entertainment" />}/>
          <Route exact path="/health" element={<News key="health" sz="10"  country="in" category="health" />}/>
          <Route exact path="/science" element={<News key="science" sz="10" country="in" category="science" />}/>
          <Route exact path="/sports" element={<News key="sports" sz="10" country="in" category="sports" />}/>
          <Route exact path="/technology" element={<News key="technology" sz="10" country="in" category="technology" />} />
          <Route exact path="/" element={<News key="general" sz="10" country="in" category="general" />}/>
        </Routes>
      </Router>
    )
  }
}
