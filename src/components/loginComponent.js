import React, { Component } from 'react'; 
import {Button} from 'react-bootstrap';
import {loadPlanets} from '../actions/planetActions'
import {connect } from 'react-redux';
import * as types from '../actions/actionTypes';

//import { withRouter } from 'react-router';

class LoginComponent extends Component {
    constructor(props ) {
        super(props);
    }
    
    login(){
        var that =this;
        var userName = this.refs.username.value;
        var password = this.refs.password.value;
        if(userName && password){
            var userData = this.props.data;
            for(var i =0 ; i< userData.length; i++){
                if (userData[i].hasOwnProperty('name') && userData[i].hasOwnProperty('birth_year') &&
                userData[i]['name'] == userName && userData[i]['birth_year'] == password){
                    alert('login successful');
                    //history.push('/search');
                    break;
                }
                else if((userData.length-1) == i) {
                    alert("Wrong combination of username and password!");
                }
            }
        } else {
            alert("Please enter username and password!!");
        }
    }
    render() {
        var divStyle = {
                paddingTop: '40px',
                marginRight: 'auto',
                marginLeft: 'auto',
              };
        var btnStyle = {
            marginLeft: '60px'
        }
        return (
            <div className="container" style={divStyle}> 
                Username: <input type="text" ref="username" /> <br /><br />
                Password: <input type="password" ref="password" /> <br /> <br />
                <Button style = {btnStyle} onClick = {this.login.bind(this)} id="something-btn" type="button" bsStyle="btn btn-primary btn-sm">
                    Login
                </Button>
                
                <Button style = {btnStyle} onClick = {this.login.bind(this)} id="something-btn" type="button" bsStyle="btn btn-primary btn-sm">
                    Logout
                </Button>
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        planets: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadPlanets :()=>  {
            dispatch({
                type: types.LOAD_PLANETS_SUCCESS
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
 //LoginComponent;