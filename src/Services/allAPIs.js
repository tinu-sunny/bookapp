


import commonAPI from "./commonAPi"
import { serverURL } from "./serverURL"
// register API call

export const registerUSer =async(reqBody)=>{
    return  await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}

export const loginUser =async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}