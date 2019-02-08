import React from 'react';
import {withRouter} from 'react-router-dom';


function Nav(props){
     console.log(props)
     const {location} = props
     console.log(location.pathname)
     //set up a ternary? 
    //if the user is in the auth page, do not render the nav component using this.props.location.pathname.
    //compare url. if path =  '/' do not render Nav, else render
    return (
        <div>
            { //if location.pathname = auth , do not render nav
                //else {<Nav/>}
            }
        </div>
    )
}

export default withRouter(Nav)