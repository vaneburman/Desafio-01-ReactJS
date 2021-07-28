import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) =>{
    return(
    <>
        <p style={{fontSize: 20, color: "black"}}> Lista: {greeting} </p>
        <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'}}>
            <ItemCount stock={5} id={2}/>
            <ItemCount stock={12} id={3}/>
        </div>
    </>
    )
    };

export default ItemListContainer