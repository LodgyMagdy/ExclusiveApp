"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginFormPayload, loginFormSchema } from "@/schema/login.schema"
import {signIn} from "next-auth/react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()

  const form = useForm<LoginFormPayload>({resolver: zodResolver(loginFormSchema) , defaultValues: {email: "" , password: ""}})

  async function onSubmit(values: LoginFormPayload) {
  
  try {
     const res = await signIn("credentials" , {
      email: values.email ,
      password: values.password ,
      redirect: false ,
      callbackUrl: "/"
     })

     if(res?.ok) {
       toast.success("Login successfully" , {
        position: "top-right"
       })
       router.push("/")
     } else {
       toast.error(res?.error || "Something went wrong" , {
        position: "top-right"
       })
     }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>
     <section className="py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Login</h1>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="username@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center">
              <FormLabel>Password</FormLabel>
              <Link
                href="/forgotPassword"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
              <FormControl>
                <Input placeholder="**********" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="cursor-pointer">Submit</Button>
      </form>
    </Form>
      </div>
     </section>
    </>
  )
}