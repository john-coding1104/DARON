export async function userLogin(studentId, password){
    const BASE_URL = 'http://localhost:8000/api';
    let options = {
        method: 'POST',
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
        },
    };

     const response = await fetch(BASE_URL + '/login', options);
     const data = await response.json();

     console.log(data);
     return data;
}