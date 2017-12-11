import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoginComponent from '../src/components/loginComponent';
import SearchComponent from './components/searchComponent';
import { BrowserRouter, Route } from 'react-router-dom';
import planetReducer from './reducers/planetReducer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginComponent data={this.props.planet}/>
        {/* <Route path="/login" render={() => <div>Rendered from Component1</div>} />
          <Route path="/search" component={SearchComponent} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    planet : state.planet.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
  
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
