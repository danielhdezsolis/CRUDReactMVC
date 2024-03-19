import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap'
import './App.css';
import TablaContacto from './components/TablaContacto';
import ModalContacto from './components/ModalContacto';

function App() {
    const [contactos, setContactos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
        mostrarContactos();
    }, []);

    async function mostrarContactos() {
        const response = await fetch('/api/contacto/lista', {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            setContactos(data);
        }
    }

    async function guardarContacto(contacto) {
        const response = await fetch('/api/contacto/guardar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(contacto)
        });

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarContactos();
        }
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de contactos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={(() => setMostrarModal(!mostrarModal))}>Nuevo contacto</Button>
                            <hr></hr>
                            <TablaContacto
                                contactos={contactos}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalContacto
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarContacto={guardarContacto}
            />
        </Container>
    );
}

export default App;