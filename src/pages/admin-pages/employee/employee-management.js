import React from 'react'
import MinimalFooter from "../../../components/footer/minimal-footer";
import {Table} from "react-bootstrap";
import {DeleteButton, EditButton} from "../../../components/widgets/button/button";
import {GetEmployees} from "../../../hooks/admin/get-users";
import AdminNavigationBar from "../../../components/navigation-bar/admin-navigation-bar";

function EmployeeManagement() {
    const { userData } = GetEmployees();

    return(
        <div>
            <AdminNavigationBar/>
            <div className="container my-5">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Gebruikersnaam</th>
                        <th>Naam</th>
                        <th>Acties</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userData.length === 0 ? (
                        <tr>
                            <td colSpan={5}>Er is geen data te weergeven...</td>
                        </tr>
                    ) : (
                        userData.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.userName}</td>
                                <td>{user.name}</td>
                                <td>
                                    <EditButton />
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