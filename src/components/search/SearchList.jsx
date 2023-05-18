import SearchResult from './SearchResult.jsx'

const SearchList = (props) => {

  return (
    <div>
      {props.items.map(item => (<SearchResult item={item} key={item._id.$oid}/>))}
    </div>
  )
}

export default SearchList