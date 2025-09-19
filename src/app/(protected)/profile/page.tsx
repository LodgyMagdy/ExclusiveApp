"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { updateUserDataOrPassword } from "@/services/profile.service"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Label } from '@/components/ui/label';
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

interface ProfileFormValues {
  name?: string
  email?: string
  phone?: string
  currentPassword?: string
  password?: string
  rePassword?: string
}


export default function ProfilePage() {

  const { register, handleSubmit } = useForm<ProfileFormValues>()
  const router = useRouter()
  
  async function updateUserInfoOrPassword(values: ProfileFormValues) {
    const res = await updateUserDataOrPassword(values)

    if (res.success) {
      toast.success(res.message, { position: "top-right" })

      if (!values.currentPassword) {
        setTimeout(() => {
          router.push("/")
        }, 2000)
      } else {
        setTimeout(async () => {
          await signOut({ callbackUrl: "/login" }) 
        }, 2000)
      }
    } else {
      toast.error(res.message, { position: "top-right" })
    }
  }


  return (
    <>
    
    <Card className="w-full max-w-2xl mx-auto my-20">
      <CardHeader>
        <CardTitle className="text-red-500 text-xl font-bold text-center">Edit Your Profile</CardTitle>
      </CardHeader>

      <CardContent>
        
        <form onSubmit={handleSubmit(updateUserInfoOrPassword)} className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="User Name"
              />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                {...register("email")}
                placeholder="username@gmail.com"
              />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="**********"
                type="tel"
              />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center mb-5">
              <h1 className="font-bold">Password Changes</h1>
              
            </div>
            <Label htmlFor="currentPassword">Current Pssword</Label>
              <Input
                id="currentPassword"
                {...register("currentPassword")}
                placeholder="**********"
                className="mb-3"
                type="password"
              />

        <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                {...register("password")}
                placeholder="**********"
                className="mb-3"
                type="password"
              />

        <Label htmlFor="rePassword">Confirm New Password</Label>
              <Input
                id="rePassword"
                {...register("rePassword")}
                placeholder="**********"
                type="password"
              />
          </div>

          <CardFooter className="flex-row-reverse gap-2">
            <Button type="submit" variant="destructive" className="cursor-pointer">
              Save Changes
            </Button>
            <Button type="reset" variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </CardFooter>
        </form>
    
      </CardContent>
    </Card>
    </>
  )
}

