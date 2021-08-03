export const fetchUsers = async (e, email, username, password, setUser) => {
    e.preventDefault();
    try {
        let response;
        if (email) {
        response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
    } else {
        response = await fetch(`${process.env.REACT_APP_REST_API}users/${username}`)
    }
        const data = await response.json();
        setUser(data.user.username)
    } catch (error) {
        console.log(error);
    }
};