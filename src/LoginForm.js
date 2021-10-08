import React, {useState}from 'react';
import "./index.css";

function LoginForm({Login, error}) {
    const[details, setDetails] = useState({ username:"", password:""})

    const submitHandler = e =>{
        e.preventDefault();
        Login(details)
    }
    return(
        <div className={"outer-form"}>
        <form onSubmit={submitHandler}>
            <div className={"form-inner"}>
                <h2 className={"login-header"}>Log In</h2>
                {(error !== "") ? (<div className={"error"}>{error}</div>) : ""}
                <table className={"login-data"}>
                    <tr>
                            <td>
                                <div htlmlFor={"username"}>
                                    <label className={"username"}>Email: </label>
                                </div>
                            </td>
                            <td>
                                <input name={"username"} type={"text"} id={"username"} autoFocus={"autofocus"} onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
                            </td>

                    </tr>
                    <tr>
                            <td>
                                <label className={"password"}>Password:</label>
                            </td>
                            <td>
                                <input name={"password"} type={"password"} id={"password"} onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                            </td>
                    </tr>

                </table>
                <br/>
                <br/>
                <table className={"submit-button"}>
                    <tr>
                        <td>
                            <input  className={"submit"} name={"submit"} type={"submit"} id={"submit"} value={"Log In"}/>
                        </td>
                    </tr>
                </table>

            </div>
        </form>
        </div>
    )
}
export default LoginForm
