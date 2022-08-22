const Cards = (props) => {
    return (
        <div className="teste">
            <div className="container containerCards">
                <div className="cards">
                    <img src={props.products.image} />
                </div>
                <div className="infoCards">
                    <p className="nameProduct">{props.products.name}</p>
                    <p className="infoProduct">{props.products.description}</p>
                    <p className="oldPrice">De:R$ {props.products.oldPrice},00</p>
                    <p className="newPrice">Por:R${props.products.price},00 </p>
                    <p className="oldPrice">ou {props.products.installments.count}x de: {props.products.installments.value}0</p>
                    <button className="buttonBuy">Comprar</button>
                </div>
            </div>
        </div>

    )
}
export default Cards
