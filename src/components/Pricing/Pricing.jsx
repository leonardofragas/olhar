import { useState } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button';

import ListItem from './ListItem'

import Data from './../../database/static.json'

import './Pricing.styl'

export default function Pricing() {
    const [paymentType, setPaymentType] = useState("year")

    function handlePaymentType () {
        if (paymentType == "month") {
            setPaymentType("year")
        } else {
            setPaymentType("month")
        }
    }

    return (
        <div className="Table">
            <Container fluid>
                <div className="Header">
                    <Row style={{ alignItems: 'center', width: '100%' }}>
                        <Col>
                            { paymentType == 'month' ? 
                            <h2>Plano Mensal</h2>: 
                            <h2>Plano Anual</h2>
                            }
                            { paymentType == 'month' ?
                            <h3>Por mês, sem fidelidade.</h3> :
                            <h3>Pagamento em até 12x de 39,86 BRL.</h3>
                            }
                        </Col>

                        <Col style={{ textAlign: 'right' }}>
                            { paymentType == 'month' ? 
                            <h4>{Data.checkout.month.price} BRL</h4> : 
                            <h4>{Data.checkout.year.price} BRL</h4> 
                            }
                            
                        </Col>
                    </Row>
                </div>

                <div className="Features">
                    <Row>
                        <ul>
                        { paymentType == 'year' ? 
                        <ListItem category="Incentivo" text="R$ 201,80 de desconto" /> :
                        ''
                        }

                        {Data.courses.map((object, i) => {
                            return <ListItem category="Curso" text={object.title} new={object.new} />
                        })}

                        {Data.extras.map((object, i) => {
                            return <ListItem category="Extra" text={object.title} />
                        })}
                        </ul>
                    </Row>
                </div>

                <div className="Call">
                    <Row>
                        { paymentType == 'month' ? 
                        <Button href={Data.checkout.month.url}>entrar agora</Button> :
                        <Button href={Data.checkout.year.url}>entrar agora</Button>
                        }

                    </Row>

                    <Row>
                        <Button className="ChangePaymentType" onClick={handlePaymentType}>
                            trocar para
                            { paymentType == 'month' ? 
                            ' plano anual' : 
                            ' plano mensal'
                            }
                        </Button>
                    </Row>
                </div>
            </Container>
        </div>
    )
}