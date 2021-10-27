import axios from "axios";

let options = {
    baseURL: 'http://localhost:5000/',
}
let axiosInstance = axios.create(options);


export const addUser = async (data) => {
    try {
        // const response = await axiosInstance.post('api/user/add', data);
        await axiosInstance.post('api/user/add', data);
        // console.log(response)
        // return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}
export const addGroup = async (data) => {
    try {
        // console.log(data)
        await axiosInstance.post('api/group/add', data);
        // const response = await axiosInstance.post('api/group/add', data);
        // console.log(response)
        // return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}

export const getAllUsers = async () => {
    try {
        const response = await axiosInstance.get('api/user/getAll');
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}

export const getAllGroups = async () => {
    try {
        const response = await axiosInstance.get('api/group/getAll');
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}
export const getOneGroup = async (id) => {
    try {
        const response = await axiosInstance.get(`api/group/getOne/${id}`,);
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}
export const updateUserId = async (data) => {
    try {
        console.log(data)
        const response = await axiosInstance.patch('api/user/updateUserId', { data });
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}
export const deleteUserId = async (data) => {
    try {
        const response = await axiosInstance.delete(`api/user/deleteUser/${data}`);
        console.log(response)
        // return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}
export const updateGroupId = async (data) => {
    try {
        console.log(data)
        const response = await axiosInstance.patch('api/group/updateGroupId', { data });
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}
export const deleteGroupId = async (data) => {
    try {
        console.log(data)
        const response = await axiosInstance.delete(`api/group/deleteUser/${data}`);
        console.log(response)
        // return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}