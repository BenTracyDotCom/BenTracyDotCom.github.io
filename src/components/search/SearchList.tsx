import SearchResult from './SearchResult.jsx'

const SearchList = (props: {
 items: any[]
}) => {

  return (
    <div>
      {props.items.map(item => (<SearchResult item={item} key={item._id.$oid}/>))}
    </div>
  )
}

export default SearchList