import React, {Component} from 'react';
import axios from 'axios'

class Auth extends Component {
    constructor(props){
        super(props)

        this.state ={
            username: '',
            password: '', 
        }
    }
    //methods
    
    handleChange(prop, val){
        this.setState({
            [prop]: val 
        })
    }

    register = () => {
        const {username, password} = this.state
        axios.post('/auth/register', {username,password})
        .then(res=>{
            //update user
            console.log(res.data)
            //navigate to the dashboard view
            this.props.history.push('/dashboard')
        })
        
    }

    //end of methods
    render(){
        const {username, password} = this.state
        return(
            <div>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={e => this.handleChange('username', e.target.value)}        
                />

                <input
                    placeholder="Password"
                    type='password'
                    value={password}
                    onChange={e => this.handleChange('password', e.target.value)}
                />
                <button  >Login</button>
                <button onClick={this.register} >Register</button>
            </div>
        )
    }
}

export default Auth