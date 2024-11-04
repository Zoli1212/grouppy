import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const isProtectedRoute = createRouteMatcher(["/group(.*)"])

export default clerkMiddleware(async (auth, req) => {
  const baseHost = "localhost:3000"
  const host = req.headers.get("host")
  const reqPath = req.nextUrl.pathname
  const origin = req.nextUrl.origin

  // Protect route if it's a protected route
  if (isProtectedRoute(req)) await auth.protect()

  // Proceed with the domain check if not on base host
  if (!baseHost.includes(host as string) && reqPath.includes("/group")) {
    try {
      const response = await fetch(`${origin}/api/domain?host=${host}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      // Only parse JSON if the response status is 200
      if (response.ok) {
        const data = await response.json()
        if (data && data.status === 200) {
          return NextResponse.rewrite(
            new URL(reqPath, `https://${data.domain}/${reqPath}`)
          )
        }
      } else {
        console.error(`Unexpected response status: ${response.status}`)
      }
    } catch (error) {
      console.error("Error fetching domain data:", error)
    }
  }
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
