import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
    <div className="container my-30 mx-auto">
     <div className="flex-col text-center">
     <h1 className="text-9xl">404 NOT FOUND</h1>
     <p className="my-10">Your visited page not found. You may go home page.</p>
     <Button variant={"destructive"} asChild>
        <Link href={"/"}>Back to home page</Link>
     </Button>
     </div>
    </div>
    </>
  )
}
