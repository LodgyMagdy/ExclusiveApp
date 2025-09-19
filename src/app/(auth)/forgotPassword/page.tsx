"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { forgotPassword, resetPassword, verifyResetCode } from "@/services/forgotPassword.service"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

interface ForgotPasswordForm {
  email: string
}

interface VerifyCodeForm {
  resetCode: string
}

interface ResetPasswordForm {
  email: string
  newPassword: string
}


export default function ForgotPasswordPage() {

  const { register, handleSubmit , reset} = useForm<ForgotPasswordForm>()

  const {
    register: registerCode,
    handleSubmit: handleSubmitCode,
    reset: resetCode,
  } = useForm<VerifyCodeForm>()

  const {
    register: registerNewPassword,
    handleSubmit: handleSubmitNewPassword,
    reset: resetNewPassword,
  } = useForm<ResetPasswordForm>()

    const router = useRouter()

  async function handleForgotPassword(value: ForgotPasswordForm) {
      const res = await forgotPassword(value)
  
      if (res.statusMsg === "success") {
        toast.success(res.message, { position: "top-right" })
        reset()
        
      } else {
        toast.error(res.message, { position: "top-right" })
      }
    }

  async function handleVerifyResetCode(value: VerifyCodeForm) {
      const res = await verifyResetCode(value)

      if (res.status === "Success") {
        toast.success("Correct Code", { position: "top-right" })
        resetCode()
        
      } else {
        toast.error(res.message, { position: "top-right" })
      }
    }

  async function handleResetPassword(value: ResetPasswordForm) {
      const res = await resetPassword(value)
  
      if (res.token) {
        toast.success("Password updated successfully , You can login now", { position: "top-right" })
        resetNewPassword()
        setTimeout(() => {
          router.push("/login")
        }, 2000)
        
      } else {
        toast.error(res.message, { position: "top-right" })
      }
    }

  return (
    <>
     <div className="flex justify-center items-center gap-10 my-10">
    <Card className="w-full max-w-lg">
      <CardHeader className="text-center">
        <CardTitle >Forgot Password</CardTitle>
        <CardDescription>
          Enter your email below to send you the code
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                {...register("email")}
                placeholder="username@gmail.com"
              />
            </div>
          </div>
      <Button type="submit" className="cursor-pointer w-full mt-5">
        Submit
      </Button>
        </form>
      </CardContent>
    </Card>

    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-center">Reset Password</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitNewPassword(handleResetPassword)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                {...registerNewPassword("email")}
                type="email"
                placeholder="username@example.com"
              />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">New Password</Label>
              <Input id="password" {...registerNewPassword("newPassword")} type="password" placeholder="**********"/>
            </div>
          </div>
          <Button type="submit" className="cursor-pointer w-full mt-5">
          Submit
        </Button>
        </form>
      </CardContent>
        
      </Card>
     </div>

    <div className="flex justify-center mb-10">
      <Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" className="cursor-pointer">
      Verify Reset Code
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <form onSubmit={handleSubmitCode(handleVerifyResetCode)}>
      <DialogHeader>
        <DialogTitle className="text-center">Enter the code</DialogTitle>
      </DialogHeader>
      <div className="flex-col my-5">
        <Label htmlFor="code">Code</Label>
        <Input
          id="code"
          placeholder="111111"
          {...registerCode("resetCode")}
          className="mt-2"
        />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" className="cursor-pointer">
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit" className="cursor-pointer">
          Save
        </Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>

    </div>
    </>
  )
}
