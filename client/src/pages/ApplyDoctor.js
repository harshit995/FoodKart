import React, { useContext, useState } from 'react'
import Layout from '../components/Layout'
import "../styles/applyDoctor.css"
import { Col, Form, Input, Row, TimePicker } from "antd";
import { useNavigate } from 'react-router-dom';
import { applydocfunc } from '../services/Apis';
import { authContext } from '../components/context/ContextProvider';

const ApplyDoctor = () => {

    const { user } = useContext(authContext);

    const [inputdata, setInputData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        website: "",
        address: "",
        specialization: "",
        experience: "",
        feesPerCunsaltation: "",
        timings: "",
        userId: user._id

    });

    console.log(inputdata)
    const navigate = useNavigate();

    // setInput Value
    const setInputValue = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputdata, [name]: value })
    }

    //submit userdata
    const submitUserData = async (e) => {
        e.preventDefault();

        const userId = user._id
        const { firstname, lastname, email, phone, website, address, specialization, experience, feesPerCunsaltation, timings } = inputdata;

        const data = new FormData();
        data.append("firstname", firstname)
        data.append("lastname", lastname)
        data.append("email", email)
        data.append("phone", phone)
        data.append("website", website)
        data.append("address", address)
        data.append("specialization", specialization)
        data.append("experience", experience)
        data.append("feesPerCunsaltation", feesPerCunsaltation)
        data.append("timings", timings)
        data.append("userId", userId)

        // const config = {
        //     "Content-Type": "multipart/form-data"
        // }

        console.log("form data is...")
        console.log(data)
        const response = await applydocfunc(data);

        console.log("user id is..")
        console.log(user._id)
        console.log(response)
        if (response.status === 200) {
            setInputData({
                ...inputdata,
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                website: "",
                address: "",
                specialization: "",
                experience: "",
                feesPerCunsaltation: "",
                timings: ""
            });
            navigate('/');
        }
        else {
            console.log("react front apply error..")
        }
    }



    return (
        <Layout>
            <h1 className='text-center'>Apply For Doctor</h1>
            <Form layout="vertical" className='m-3'>
                <h4>Personal Details</h4>
                <Row gutter={20}>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="First Name" required >
                            <Input type='text' name="firstname" value={inputdata.firstname} onChange={setInputValue} placeholder='Your first Name' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="Last Name" required >
                            <Input type='text' name="lastname" value={inputdata.lastname} onChange={setInputValue} placeholder='Your last Name' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="Phone" required >
                            <Input type='number' name="phone" value={inputdata.phone} onChange={setInputValue} placeholder='Your Mobile Number' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="Email" required >
                            <Input type='text' name="email" value={inputdata.email} onChange={setInputValue} placeholder='Your Email' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="Website"  >
                            <Input type='text' name="website" value={inputdata.website} onChange={setInputValue} placeholder='Your Website' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="Address" required >
                            <Input type='text' name="address" value={inputdata.address} onChange={setInputValue} placeholder='Your Clinic Address' />
                        </Form.Item>
                    </Col>

                </Row>
                <h4>Professional Details</h4>
                <Row gutter={20}>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="Specialization" required >
                            <Input type='text' name="specialization" value={inputdata.specialization} onChange={setInputValue} placeholder='Your Specialization' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="Experience" required >
                            <Input type='text' name="experience" value={inputdata.experience} onChange={setInputValue} placeholder='Your Experience' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="feesPerCunsaltation" required >
                            <Input type='number' name="feesPerCunsaltation" value={inputdata.feesPerCunsaltation} onChange={setInputValue} placeholder='Your Fees' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={24} lg={8}>
                        <Form.Item label="Timings" >
                            <Input type='text' name='timings' value={inputdata.timings} onChange={setInputValue} placeholder='Your Timings' />
                            {/* <TimePicker.RangePicker name='timings' value={inputdata.timings} onChange={setInputValue} format="HH:mm" /> */}
                        </Form.Item>

                    </Col>
                    <Col xs={24} md={24} lg={8} />
                    <Col xs={24} md={24} lg={8}>
                        {/* <div className="d-flex justify-content-end mb-3"> */}
                        <button className="btn btns btn-primary" type='submit' onClick={submitUserData}>
                            Submit
                        </button>
                        {/* </div> */}
                    </Col>

                </Row>

            </Form>
        </Layout>
    )
}

export default ApplyDoctor