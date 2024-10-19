"use client"

import { Button } from "@/components/ui/button"
import { useGoogleAuth } from "@/hooks/authentication"
import { Google } from "@/icons"
import { Loader } from "../loader"

type GoogleAuthButtonProps = {
  method: "signup" | "signin"
}

export const GoogleAuthButton = ({ method }: GoogleAuthButtonProps) => {
  const { signUpWith, signInWith } = useGoogleAuth()
  return (
    <Button
      {...(method === "signin"
        ? {
            onClick: () => signInWith("oauth_google"),
          }
        : {
            onClick: () => signUpWith("oauth_google"),
          })}
      className="w-full rounded-2xl flex gap-3 bg-themeBlack border-themeGray hover:bg-gray-500"
      variant="outline"
    >
      <Loader loading={false}>
        <Google />
        <span className="text-red-500">Google</span>
      </Loader>
    </Button>
  )
}
