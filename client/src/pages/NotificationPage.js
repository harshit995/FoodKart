import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { message, Tabs } from 'antd'
import { authContext } from '../components/context/ContextProvider';
import { getdeletefunc, getmarkallreadfunc } from '../services/Apis';
import { useNavigate } from 'react-router-dom';

const NotificationPage = () => {
    let navigate = useNavigate();
    const { user } = useContext(authContext);
    console.log("noti  is...")
    console.log(user.seennotification)

    const handlemarkallread = async () => {

        const userId = user._id
        const data = new FormData()
        data.append("userId", userId)
        console.log("aftter append..")
        console.log(data)
        console.log("now id is...")
        console.log(userId)
        const response = await getmarkallreadfunc(data)
        console.log("The response is..")
        console.log(userId)
        if (response.status === 200) {
            message.success("MARK ALL READ")
        }
    }

    const handledeleteread = async () => {
        const userId = user._id
        const data = new FormData()
        data.append("userId", userId)
        console.log("aftter append..")
        console.log(data)
        console.log("now id is...")
        console.log(userId)

        const response = await getdeletefunc(data)
        if (response.status === 200) {
            message.success("Deleted")
        }

    }
    return (
        <Layout>
            <h4 className='p-2 text-center'>Notification Page</h4>
            <Tabs>
                <Tabs.TabPane tab="Unread" key={0}>
                    <div className="d-flex justify-content-end">
                        <h4 className='p-2' onClick={handlemarkallread} style={{ cursor: "pointer" }} >Mark all read</h4>
                    </div>
                    {
                        user?.notification.map((notificationMsg) => (
                            <div className="card" >
                                <div className="card-body " onClick={() => navigate(notificationMsg.onClickpath)} style={{ cursor: "pointer" }}>
                                    {notificationMsg.message}
                                </div>
                            </div>
                        ))
                    }
                </Tabs.TabPane>

                <Tabs.TabPane tab="Read" key={1}>
                    <div className="d-flex justify-content-end">
                        <h4 className='p-2 text-primary' style={{ cursor: "pointer" }} onClick={handledeleteread}  >Delete all read</h4>
                    </div>
                    {
                        user?.seennotification.map((notificationMsg) => (
                            <div className="card" >
                                <div className="card-body " onClick={() => navigate(notificationMsg.onClickpath)} style={{ cursor: "pointer" }}>
                                    {notificationMsg.message}
                                </div>
                            </div>
                        ))
                    }
                </Tabs.TabPane>
            </Tabs>
        </Layout>
    )
}

export default NotificationPage