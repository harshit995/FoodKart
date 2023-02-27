import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { getallusersfunc } from '../../services/Apis';

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Users = () => {
    const [user, setUser] = useState({});

    const usersfunc = async () => {
        const response = await getallusersfunc()
        if (response.status === 200) {
            console.log(response)
            setUser(response.data)
        }
    }

    useEffect(() => {
        usersfunc();

    }, [])


    return (
        <Layout>

            <h2 className='p-2 text-center'>All Users</h2>
            <Row>
                <div className="col mt-3">
                    <Card className="shadow">
                        <Table className="align-items-center" responsive="sm">
                            <thead className="thead-dark">
                                <tr className="table-dark">
                                    <th>ID</th>
                                    <th>FullName</th>
                                    <th>Email</th>
                                    <th>Doctor</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.length > 0 ? user.map((element, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.isDoctor ? "Yes" : "No"}</td>
                                                <td>
                                                    <Button variant="danger" >
                                                        Block
                                                    </Button>
                                                </td>
                                            </tr>

                                        </>
                                    )
                                }) : <div className="no_data text-center">No data Found</div>
                                }

                            </tbody>
                        </Table>
                    </Card>
                </div>
            </Row>
        </Layout>
    )
}

export default Users