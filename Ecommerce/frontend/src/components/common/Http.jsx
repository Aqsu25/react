export const apiUrl="http://backend.test/api"

export const adminToken=()=>{
    const data=JSON.parse(localStorage.getItem("adminInfo"));
    return data.token;
}
