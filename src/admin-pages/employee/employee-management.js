import React from 'react'
import AdminNavigationbar from "../../components/navigation-bar/admin-navigation-bar";
import MinimalFooter from "../../components/footer/minimal-footer";
import {Table} from "react-bootstrap";
import {DeleteButton, EditButton} from "../../components/widgets/button/button";
import {GetEmployees} from "../../hooks/admin/get-users";
import EditUser from "../../hooks/admin/edit-user";


function EmployeeManagement() {
    const { employeeData } = GetEmployees();

    return(
        <div>
            <AdminNavigationbar/>
            <div className="container my-5">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Gebruikersnaam</th>
                        <th>Naam</th>
                        <th>Rol</th>
                        <th>Acties</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employeeData.length === 0 ? (
                        <tr>
                            <td colSpan={5}>Er is geen data te weergeven...</td>
                        </tr>
                    ) : (
                        employeeData.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.userName}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>
                                    <EditButton onClick={EditUser} />
                                    <DeleteButton />
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </Table>
            </div>
            <MinimalFooter/>
        </div>
    );
}

export default EmployeeManagement;