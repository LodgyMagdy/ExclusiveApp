export async function getCategories () {
    try {
       const res = await fetch(`${process.env.API_BASE_URL}/api/v1/categories`)

       if(!res.ok) {
         throw new Error (res.statusText || "Failed to fetch categories")
       }

       const data = await res.json()
       return data 

    } catch (error) {
        return {error: error as string}
    }
  }

export async function getCategoryDetails (id: string) {
    try {
       const res = await fetch(`${process.env.API_BASE_URL}/api/v1/categories/${id}` , {
        
       })

       if(!res.ok) {
         throw new Error (res.statusText || "Failed to fetch this category details")
       }

       const data = await res.json()
       return data 

    } catch (error) {
        return {error: error as string}
    }
  }
