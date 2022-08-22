const Share = () => {
    return (
        <form>
            <div className="bodyAll" >
                <div className="container shareInfo">
                    <section>
                        <p className="sectionOne">
                            Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
                        </p>
                        <div className="sectionContainer">
                            <div className="inputShare">
                                <label>Nome do seu amigo:</label>
                                <input type="text" className="inputDados" />
                            </div>
                            <div className="inputShare">
                                <label>E-mail:</label>
                                <input type="email" className="inputDados" required />
                            </div>
                        </div>
                        <div className="divButtonSend">
                            <button className="buttonSendNow" >Enviar agora</button>
                        </div>
                    </section>
                </div >
            </div >
        </form>
    )
}

export default Share