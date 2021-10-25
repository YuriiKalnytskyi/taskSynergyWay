import React, {useEffect, useState} from 'react'
import {AddUser} from "../AddUser/AddUser";
import "./Users.css"
import {getAllUsers} from "../../services/app.service";

export const Users = () => {
    const [flag, setFlag] = useState(false)
    const [updateUserFlag, setUpdateUserFlag] = useState(false)
    const [userId, setUserId] = useState(null)
    const [flagUpdate, setFlagUpdate] = useState(false)
    const [data, setData] = useState([])

    const getAll = async () => {
        const d = await getAllUsers()
        setData(d)
    }

    const update = (id) => {
        setFlag(!flag)
        setUpdateUserFlag(true)
        setUserId(id)
    }


    useEffect(() => {
        getAll()
    }, [flagUpdate])

    return (
        <div className={'User_container'}>
            <div className={"User_btn"}>
                <div className={"user_btn"} onClick={() => {
                    setFlag(!flag)
                    setUpdateUserFlag(false)
                    setUserId(null)
                }}>
                    Add User
                    <AddUser flag={flag}
                             setFlag={setFlag}
                             flagUpdate={flagUpdate}
                             setFlagUpdate={setFlagUpdate}
                             title={updateUserFlag ? 'update' : 'create'}
                             userId={userId}
                    ></AddUser>
                </div>
            </div>

            <div className={"user_container"}>

                <div className={"user_tables"}>
                    <div className={'user_tables_tr'}>
                        <div className={"user_tables_id"}>id</div>
                        <div className={"user_tables_Email"}>Email</div>
                        <div className={"user_tables_Group"}>Group</div>
                        <div className={"user_tables_Admin"}>Admin</div>
                        <div className={"user_tables_Actions"}>Actions</div>
                    </div>
                    {
                        data && data.map((d, index) =>
                            <div key={index}>
                                <div className={'user_tables_tr'}>
                                    <div className={"user_tables_id"}>{d.id}</div>
                                    <div className={"user_tables_Email"}>{d.name}</div>
                                    <div className={"user_tables_Group"}>{d.group}</div>
                                    <div className={"user_tables_Admin"}>
                                        <input type="checkbox"
                                               checked={d.admin}
                                               // defaultChecked={d.admin}
                                        />
                                    </div>

                                    <div className={"user_tables_Btn"}>
                                        <div className={"user_tables_btn"}
                                             onClick={() => {
                                                 update(d.id)
                                             }}>
                                            Edit User
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}
