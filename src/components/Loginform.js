import React from "react";
 


function LoginForm({}){
    return (
         <form>
             <div className="form-inner">
   
                     <img className="logo" src="data:image/png;base64,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"/>
                      
                    <div className="form-group">
                        <label htmlFor="name">UserName:</label>
                        <input type="text" name="name" id="name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="psw" id="psw"></input>
                    </div>
                    <div className="psw"><a href="#">Forget Password</a></div>
                    <button className="btn-login">Login</button>
             </div>
         </form>
    )
}

export default LoginForm;