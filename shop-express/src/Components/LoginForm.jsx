import { useState } from "react";

const LoginForm=()=>{

    return(
        <>
        <div className="title">
            <h2>LOGIN</h2>
        </div>
        <div className="form-container">
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password"/>
                </div>
                <div className="button-container">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default LoginForm;