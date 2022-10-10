import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch("http://localhost:3000/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstName, lastName, userName}),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        navigate("/employees");
    }

  return (
    <div className="d-flex flex-column my-4 mx-5">
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <label>
                Last Name:
                <input type="text" value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label>
                Username:
                <input type="text" value={userName} name="userName" onChange={(e) => setUserName(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default AddEmployee;
