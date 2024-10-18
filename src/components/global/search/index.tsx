'use client'

type Props = {
    className?: string
    inputStyle?: string
    placeholder?:string
    searchType: 'GROUPS' | 'POSTS'
    iconStyle?: string
    glass?: boolean

}

function Search({searchType, className, glass, iconStyle, inputStyle, placeholder}: Props) {

    const { query, onSearchQuery} = useSearch(searchType)
  return (
    <div>Search</div>
  )
}

export default Search