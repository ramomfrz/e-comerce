import React from "react";

const Head = () => {
    return (

        <header className="header">
            <div className="container">
                <p className="paragraph-header1">uma seleção de produtos</p>
                <h1>especial para você</h1>
                <p className="paragraph-header2">Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
                <nav className="navButton">
                    <button className="buttonHeader">Conheça a Linx</button>
                    <button className="buttonHeader">Ajude o algorítmo</button>
                    <button className="buttonHeader">Seus produtos</button>
                    <button className="buttonHeader">Compartilhe</button>
                </nav>
            </div>
        </header >
    )
}

export default Head