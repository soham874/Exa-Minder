import React from 'react'
import { TextInput } from '../CommonComponents/InputField/inputFields'
import logo from '../../Assets/Exa-Minder(Light).png'
import '../Login/login.css'
import '../Registration/registration.css'
import { Link } from 'react-router-dom'
// import UserServices from '../../services/userService'
import SimpleSnackbar from '../CommonComponents/Snackbar/snackbarMessages'
import fire from '../../Config/fire'

// const userServices = new UserServices()

export default class loginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: React.createRef(),
        }
    }

    handleCallback = (inputString) => {
        return inputString
    }

    checkInput = (e) => {
        e.preventDefault();
        let username = this.state.userName.current.returnValue()

        if (username.length === 0)
            this.state.userName.current.setFieldEmpty("Email")
        else {
           
            fire.auth().sendPasswordResetEmail(username).then(() => {
                    this.state.userName.current.resetField()
                    SimpleSnackbar.handleClick("Reset link sent successfully")
                    setTimeout(() => {
                        this.props.history.push("/login")
                    }, 3000)
                }).catch((error) => {
                    this.state.userName.current.setCustomError("Email doesnot exist in database")
                    SimpleSnackbar.handleClick(error.message)
                    console.log(error)
                })
        }
    }

    render() {
        return (
            <form className="loginFormback">
                <div className="independet_text" style={{ textAlign: 'center' }}>
                    <b><img src={logo} style={{ height: 128 }} alt="Signup logo" />               
                        </b>
                    <p>Studying so much you lost your password? Dont worry we got you covered!</p>
                </div>

                <TextInput label="Email" ref={this.state.userName} parentCallback={this.handleCallback} />

                <div className="options">
                    <Link to="/login" className="link"><div>Go back to login</div></Link>
                    <span><button onClick={this.checkInput}>Send reset link</button></span>
                </div>
                <SimpleSnackbar/>
            </form>

        )
    }
}