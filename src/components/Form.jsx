import React, {useState} from 'react';


const Form = (props) => {
    const [firstname, setFirstname] = useState(" ");
    const [lastname, setLastname] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [confirmPassword, setConfirmPassword] = useState(" ");
    const [hasBeenSubmitted, sethasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();

        const  newUser = {firstname, lastname, email, password, confirmPassword}
        console.log("Welcome", newUser);
        
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("")

        sethasBeenSubmitted(true);
    }

    return (
        <>
        
        <form onSubmit={createUser}>
            {
                (hasBeenSubmitted) ?
                <h2>Thank you for submitting</h2> :
                <h2>Please submit the form</h2>
            }
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            { (firstname.length < 2 && firstname != 0 )? (<p>firstname should be 2 characters</p>) : " "}
            <br></br>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastname(e.target.value)} />
            </div>
            { lastname.length < 2 && lastname != 0 ? (<p>lastname should be 2 characters</p>) : " "}
            <br></br>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            { email.length < 5 && email !=0 ? (<p>email should be 5 characters</p>) : " "}
            <br></br>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            { password.length < 8 && password != 0 ? (<p>password should be 8 characters</p>) : " "}
            <br></br>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            { confirmPassword !== password ? (<p>password should match </p>) : " "}
            <br></br>

            <input type="submit" vlaue='createUser'></input>

        </form>
            
            <div><h2>Your Form Data </h2></div>

            <div>
                <h2>First Name: {firstname}</h2>
                <h2>Last Name: {lastname}</h2>
                <h2>Email: {email}</h2>
                <h2>Password: {password}</h2>
                <h2>Confirm Password: {confirmPassword}</h2>
            </div> 

        </>

    )
}

export default Form;