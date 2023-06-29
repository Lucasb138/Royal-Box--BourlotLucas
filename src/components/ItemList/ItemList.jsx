    import Item from "../Item/Item"
    import "./itemList.css"



    const ItemList = ({product}) => { 


        return (
            <>
                <section className="itemList">
                    {product.map((product) => {
                        return (
                            <Item
                                key={product.id}
                                id= {product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            ></Item>
                        )
                    })}
                </section>

            </>
        )
    }

    export default ItemList
