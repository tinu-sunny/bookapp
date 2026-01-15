


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
export const viewbooks = async(searchKey,reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/getbook?search=${searchKey}`,null,reqHeader)
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

export const adminprofileedit = async(reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/profile-admin-update`,reqBody,reqHeader)
}

export const viewactiveuser = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/viewactiveuser`,null,reqHeader)
}

export const userprofileedit = async(reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/profile-user-update`,reqBody,reqHeader)
}
