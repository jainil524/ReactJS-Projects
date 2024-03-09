import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const { user } = useContext(UserContext);

    if (user) {
        return (
            <>
                <span>Login: {user.email}</span>,
                <span>Password: {user.password}</span>
            </>
        )
    } else {
        return (
            <>
                <span>You are not logged in</span>
            </>
        )
    }

}

export default Profile
