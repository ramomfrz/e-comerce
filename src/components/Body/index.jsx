import React from "react";

const Body = () => {
    return (
        <main className="container">
            <div className="bodyAll">
                <div className="containerBodyLeft">
                    <h3 className="tituloh3">Ajude o algorítmo a ser mais certeiro</h3>

                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. </p>

                    <p> Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
                </div>
                <div className="containerBodyRight">
                    <label>Seu nome:</label>
                    <input type="text" className="inputDados" />
                    <label>E-mail</label>
                    <input type="text" className="inputDados" />
                    <label>CPF</label>
                    <input type="text" className="inputDados" />
                    <div className="divLabel">
                        <div className="divRadios">
                            <input type="radio" />
                            <label>Masculino</label>
                        </div>
                        <div className="divRadios">
                            <input type="radio" />
                            <label>Feminino</label>
                        </div>
                    </div>
                    <button className="buttonSend">Enviar</button>
                </div>
            </div>


        </main >
    )
}

export default Body