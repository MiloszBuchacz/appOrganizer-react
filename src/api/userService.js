import axios from 'axios';

const addUser = async (userName, email, password) => {
    //e.preventDefault();
    try {
        const { data } = await axios.post(
            "http://localhost:8080/api/auth/signup",
            { userName, email, password }
        );
        localStorage.setItem("userId", data._id)
        console.log(data);
    } catch (err) {
        console.log(`Axios request failed: ${err}`);
    }
}

export default addUser;