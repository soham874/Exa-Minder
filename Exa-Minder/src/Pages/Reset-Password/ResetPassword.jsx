import React from 'react'
import { TextInput } from '../CommonComponents/InputField/inputFields'
import '../Registration/registration.css'
import { Checkbox } from '@material-ui/core'
import logo from '../../Assets/Exa-Minder(Light).png'
// import fire from '../../Config/fire'

import SimpleSnackbar from '../CommonComponents/Snackbar/snackbarMessages'

const patternPassword = RegExp('(?=.*[A-Z])(?=.*[0-9])(?=[^.,:;!@#$%^&*_+=]*[.,:;!@#$%^&*_+=][^.,:;!@#$%^&*_+=]*$).{8,}$')

export default function ResetForm(props) {
    const [state] = React.useState({
        confirm: React.createRef(),
        password: React.createRef()
    });


    const handleCallback = (inputString) => {
        return inputString
    }

    //toggles visibility of password box
    const toggleVisibility = () => {
        state.password.current.togglePassword()
        state.confirm.current.togglePassword()
    }
 
    //verifies password validity and resets
    const checkInput = (e) => {
        e.preventDefault();
        
        let password = state.password.current.returnValue()
        let confirm = state.confirm.current.returnValue()

        if (!patternPassword.test(password))
            state.password.current.setCustomError("Password is invalid")

        if (password.length === 0)
            state.password.current.setCustomError("Password cannot be empty")

        if (password !== confirm || confirm.length === 0 || !patternPassword.test(password)) {
            state.confirm.current.setCustomError("Passwords donot match")
            return
        }

        // let data = {
        //     "newPassword": password
        // }

        // userServices.resetPassword(data, token).then((response) => {
        //     console.log(response)
        //     SimpleSnackbar.handleClick("Password has been reset successfully")
        //     setTimeout(() => {
        //         props.history.push("/login")
        //     }, 3000)
        // }).catch((error) => {
        //     SimpleSnackbar.handleClick("Password reset failed")
        //     console.log(error)
        // })
    }

    return (
        <form className="loginFormback">
            <div className="independet_text" style={{ textAlign: 'center' }}>
            <b>
                        <img src={logo} style={{ height: 128 }} alt="Signup logo" />
                    </b>
                <p>Almost done! Here you go champ..</p>
            </div>

            <TextInput label="New password" type="password" ref={state.password} parentCallback={handleCallback} />

            <TextInput label="Confirm" type="password" ref={state.confirm} parentCallback={handleCallback} />

            <div>
                <Checkbox onClick={toggleVisibility}></Checkbox>
                <span className="password_text" style={{ padding: 0 }}>Show Password</span>
            </div>

            <div className="options">
                <span><button onClick={checkInput}>Resest Password</button></span>
            </div>
            <SimpleSnackbar />
        </form>
    )

}