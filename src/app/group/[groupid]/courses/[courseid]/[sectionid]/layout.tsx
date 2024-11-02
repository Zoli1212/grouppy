import { onGetSectionInfo } from "@/actions/course"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"
import SectionNavBar from "./_components/section-navbar"

type Params = {
  params: Promise<{ sectionid: string }>
  children: React.ReactNode
}

const CourseContentPageLayout = async ({ params, children }: Params) => {
  const { sectionid } = await params

  const client = new QueryClient()

  await client.prefetchQuery({
    queryKey: ["section-info"],
    queryFn: () => onGetSectionInfo(sectionid),
  })

  return (
    <HydrationBoundary state={dehydrate(client)}>
      <SectionNavBar sectionid={sectionid} />
      {children}
    </HydrationBoundary>
  )
}

export default CourseContentPageLayout
