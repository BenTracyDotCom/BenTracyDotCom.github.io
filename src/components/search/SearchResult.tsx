

const SearchResult = (props: {
  item: { name: string, type: string, data: {includes?: any[]}, photoUrl: string, prices: { host: string, url: string, price: string }[] } }) => {

  const handleAddPart = () => {
   alert('In the actual app, this would add the part to your current build.')
  }

  const bestPrice = props.item.prices.sort((a, b) => {
    if (parseFloat(a.price) < parseFloat(b.price)) {
      return -1
    }
    if (parseFloat(a.price) > parseFloat(b.price)) {
      return 1
    }
    return 0
  })[0]

  return (
    <div className="pt-5">
        <button className="btn btn-circle btn-s btn-success float-right" onClick={handleAddPart}>+</button>
        <div>{props.item.name}</div>
        <div>{`$${bestPrice.price}`}</div>
      <div className="tooltip tooltip-right" data-tip="In the app, these prices reflect the lowest of an array of prices and will navigate to the vendor URL where that price is located.">
        <img src={props.item.photoUrl} className="h-40 w-40 m-auto" />
      </div>
    </div>
  )
}

export default SearchResult