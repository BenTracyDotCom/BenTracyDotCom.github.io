import SearchResult from './SearchResult.jsx'

const SearchList = (props: {
 items: any[]
}) => {

  return (
    <div>
      {props.items.map(item => (<SearchResult item={item} />))}
    </div>
  )
}

export default SearchList