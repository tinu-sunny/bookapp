


import commonAPI from "./commonAPi"
import { serverURL } from "./serverURL"
// register API call

export const registerUSer =async(reqBody)=>{
    return  await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}

export const loginUser =async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}

export const emailLoginUser =async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/google-login`,reqBody,{})
}


export const addBook = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${serverURL}/api/addbook`,reqBody,reqHeader)
}
export const viewbooks = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getbook`,null,reqHeader)
}

export const lastAddbooks = async()=>{
    return await commonAPI('GET',`${serverURL}/api/lastAddbooks`)
}
export const viewbook = async(id,reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewbooks/${id}`,null,reqHeader)
}

export const adminuserviewAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/view-users-admin`,null,reqHeader)
}

export const viewbooksadmin = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/view-allbooks-admin`,null,reqHeader)
}

