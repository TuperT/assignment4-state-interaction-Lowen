import { useState } from "react";

const SimpleForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return(
        <>
        <input type="text" placeholder="Name" onChange={(input) => setName(input.target.value)} />
        <input type="email" placeholder="Email" onChange={(input) => setEmail(input.target.value)} />
        <button type="submit">Submit</button>
        <p>{name}</p>
        <p>{email}</p>
        </>
    )
}

export default SimpleForm;