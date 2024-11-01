import { onSignUpUser } from "@/actions/auth"
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation"
import { auth } from '@clerk/nextjs/server'

const CompleteOAuthAfterCallback = async () => {
  const { userId } = await auth()
  const user = await currentUser()

  console.log(user, userId)
  if (!userId) redirect("/sign-in")
  const complete = await onSignUpUser({
    firstname: user?.firstName as string,
    lastname: user?.lastName as string,
    image: user?.imageUrl as string,
    clerkId: user?.id as string,
  })

  if (complete.status == 200) {
    redirect(`/group/create`)
  }

  if (complete.status !== 200) {
    redirect("/sign-in")
  }
}

export default CompleteOAuthAfterCallback
