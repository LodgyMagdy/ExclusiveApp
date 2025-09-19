"use client"

export default function error({error}: {error: Error}) {
  return (
    <>
     <div className="flex flex-col items-center my-30">
        <h1 className="font-bold">Something went wrong</h1>
        <p>{error.message}</p>
     </div>
    </>
  )
}
