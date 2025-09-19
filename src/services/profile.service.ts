"use server"

import { getUserToken } from "@/lib/server-utils"

export async function updateUserDataOrPassword (formValues: {
  name?: string
  email?: string
  phone?: string
  currentPassword?: string
  password?: string
  rePassword?: string
}) {

    const endPoint = formValues.currentPassword ? "api/v1/users/changeMyPassword" : "api/v1/users/updateMe/"

    try {
       const token = await getUserToken()
       const res = await fetch (`${process.env.API_BASE_URL}/${endPoint}` , {
            method: "PUT" ,
            headers: {
                "Content-Type" : "application/json" ,
                token: token as string 
            } ,
            body: JSON.stringify(formValues)
        })

       const data = await res.json()
       

       if(!res.ok) {
        return {
        data: null ,
        success: false ,
        message: data.errors.msg 
       }
       }

       return {
        data: data ,
        success: true ,
        message: (formValues.currentPassword ? "User password updated successfully , Please login again" : "User data updated successfully" )
       }
    } catch (error) {
        console.log(error)
        return {
        data: null ,
        success: false ,
        message: (error as string) || "Something went wrong"
       }
    }
}

