const Cards = (props) => {
    const NewPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parseFloat((props.products.newPrice / 100)).toFixed(2))
    return (
        <div className="containerCards">
            <div className="cards">
                <img src={props.products.image} />
            </div>
            <div className="infoCards">
                <p className="nameProduct">{props.products.name}</p>
                <p className="infoProduct">{props.products.description}</p>
                <p className="oldPrice">De:R$ {props.products.oldPrice}</p>
                <p className="newPrice">Por:{parseInt(NewPrice)} </p>
                <p className="oldPrice">ou {props.products.installments.count}x{props.products.installments.value}</p>
                <button className="buttonBuy">Comprar</button>
            </div>
        </div>

    )
}
export default Cards
