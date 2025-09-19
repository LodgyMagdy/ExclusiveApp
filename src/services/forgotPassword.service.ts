"use server"

export async function forgotPassword (formValue : {email: string}) {
    try {
       const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/forgotPasswords` , {
        method: "POST" ,
        headers: {"Content-Type" : "application/json"} ,
        body: JSON.stringify(formValue)
       })

       const data = await res.json()

       if(!res.ok) {
         return { message: data?.message}
       }

       return data 

    } catch (error) {
        return {error: error as string}
    }
  }

export async function verifyResetCode (formValue : {resetCode: string}) {
    try {
       const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/verifyResetCode` , {
        method: "POST" ,
        headers: {"Content-Type" : "application/json"} ,
        body: JSON.stringify(formValue)
       })

       const data = await res.json()

       if(!res.ok) {
         return { message: data?.message}
       }

       return data 

    } catch (error) {
        return {error: error as string}
    }
  }

export async function resetPassword (formValue : {email: string , newPassword: string}) {
    try {
       const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/resetPassword` , {
        method: "PUT" ,
        headers: {"Content-Type" : "application/json"} ,
        body: JSON.stringify(formValue)
       })

       const data = await res.json()

       if(!res.ok) {
         return { message: data?.message}
       }

       return data 

    } catch (error) {
        return {error: error as string}
    }
  }