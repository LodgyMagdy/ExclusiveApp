export async function getBrands () {
    try {
       const res = await fetch(`${process.env.API_BASE_URL}/api/v1/brands?limit=54`)

       if(!res.ok) {
         throw new Error (res.statusText || "Failed to fetch brands")
       }

       const data = await res.json()
       return data 

    } catch (error) {
        return {error: error as string}
    }
  }

export async function getBrandDetails (id: string) {
    try {
       const res = await fetch(`${process.env.API_BASE_URL}/api/v1/brands/${id}` , {
        
       })

       if(!res.ok) {
         throw new Error (res.statusText || "Failed to fetch this brand details")
       }

       const data = await res.json()
       return data 

    } catch (error) {
        return {error: error as string}
    }
  }
