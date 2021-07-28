import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) =>
    <p style={{fontSize: 20, color: "black"}}>
       Lista: {greeting}
       <ItemCount stock={5} id={2}/>
       <ItemCount stock={12} id={3}/>
    </p>


export default ItemListContainer