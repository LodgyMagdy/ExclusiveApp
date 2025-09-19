import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {

  const token = await getToken({req: request})
  const {pathname} = request.nextUrl

  const authRoutes = ["/login" , "/register" , "/forgotPassword"]
  const protectedRoutes = ["/cart" , "/profile" , "/checkout" , "/allorders" , "/wishlist"]

  if(token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url)) 
  } 

  if(!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url)) 
  } 

}

export const config = {
  matcher: ['/cart' , '/login' , '/register' , '/forgotPassword' , '/profile' , '/checkout' , '/allorders' , '/wishlist'],
}