import { Table, Button } from 'reactstrap'

function TablaContacto({ contactos }) {
    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (contactos < 1) ? (
                        <tr>
                            <td colSpan="4">Sin registros</td>
                        </tr>
                    ) : (
                            contactos.map(contacto => (
                                <tr key={contacto.idContacto}>
                                    <td>{contacto.nombre}</td>
                                    <td>{contacto.correo}</td>
                                    <td>{contacto.telefono}</td>
                                    <td>
                                        <Button color="primary" size="sm">Editar</Button>
                                        <Button color="danger" size="sm">Eliminar</Button>
                                    </td>
                                </tr>
                            ))
                    )
                }
            </tbody>
        </Table>
    );
}

export default TablaContacto