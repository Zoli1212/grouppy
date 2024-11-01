import { onGetExploreGroup } from "@/actions/groups"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"
import ExplorePageContent from "../_components/explore-content"

type Params = Promise<{ category: string }>

const ExploreCategoryPage = async ({ params }: { params: Params }) => {
  const { category } = await params
  const query = new QueryClient()

  await query.prefetchQuery({
    queryKey: ["groups"],
    queryFn: () => onGetExploreGroup(category, 0),
  })

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <ExplorePageContent layout="LIST" category={category} />
    </HydrationBoundary>
  )
}

export default ExploreCategoryPage
