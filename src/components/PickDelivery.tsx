import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';

interface Props {
    delivery: any;
}

const PickDelivery = (props: Props) => {

    let [delivery, setDelivery] = useState("");

    const handleClick = (e:any) => {

        let selectedDelivery = ""!;

        if (e.target.id === '01') {
            selectedDelivery = "Varje vecka";
        } else if (e.target.id === '02') {
            selectedDelivery = "Varanann vecka";
        } else if (e.target.id === '03') {
            selectedDelivery = "Varannan månad";
        }

        console.log("Selected delivery: " + selectedDelivery);
        setDelivery(selectedDelivery);
    }

    return (
        <Container fluid>
            <div className="pick-delivery">
                <section className="delivery-content">
                    <h3>Välj leverans</h3>
                    <h2>Hur ofta vill du ha din leverans?</h2>
                    <section className="delivery-boxes">
                        <div className="delivery-box" id="01" onClick={e => handleClick(e)}>
                            <p className="delivery-title">Varje vecka</p>
                            <p>Jag använder min disktrasa flitigt och torkar mycket mjölkspill.</p>
                        </div>

                        <div className="delivery-box" id="02" onClick={e => handleClick(e)}>
                            <p className="delivery-title">Varanann vecka</p>
                            <p>Jag använder min disktrasa måttligt och behöver en fräsch med jämna mellanrum.</p>
                        </div>

                        <div className="delivery-box" id="03" onClick={e => handleClick(e)}>
                            <p className="delivery-title">Varannan månad</p>
                            <p>Jag använder min disktrasa sällan men behöver bli påmind att byta ut den ibland.</p>
                        </div>
                    </section>

                    <Button className='btn-black steps-btn' type="submit">Nästa steg</Button>
                </section>
            </div>
        </Container>
    );
};

export default PickDelivery;