import React, { Component } from 'react';


class SearchComponent extends Component {

    render() {
        /* var divStyle = {
                paddingTop: '40px',
                marginRight: 'auto',
                marginLeft: 'auto',
              }; */
        return (
            <div className="container" > 
                <form className="navbar-form navbar-center" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <button type="submit" className="btn btn-default">
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchComponent;