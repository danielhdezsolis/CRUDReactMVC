import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from 'reactstrap'

const modeloContacto = {
    idContacto: 0,
    nombre: '',
    correo: '',
    telefono: ''
}

function ModalContacto({ mostrarModal, setMostrarModal, guardarContacto }) {
    const [contacto, setContacto] = useState(modeloContacto);

    function enviarDatos() {
        if (contacto.idContacto === 0) {
            guardarContacto(contacto);
        }
    }

    function actualizaDato(e) {
        setContacto({
            ...contacto,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                Nuevo contacto
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={contacto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input name="correo" onChange={(e) => actualizaDato(e)} value={contacto.correo} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="telefono" onChange={(e) => actualizaDato(e)} value={contacto.telefono} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={() => enviarDatos()}>Guardar</Button>
                <Button color="danger" size="sm" onClick={() => setMostrarModal(!mostrarModal)}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalContacto