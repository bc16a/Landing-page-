import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const history = useHistory();
    useEffect(() => {

        let email = localStorage.getItem('email');
        if (email != null) {
            email = JSON.parse(email);
            setEmail(email);
        }
        else {
            history.push('./')
        }
    }, []);

    return (
        <>
            <input className="emailInput" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            < button type="button" > Register </button >
        </>
    )
}