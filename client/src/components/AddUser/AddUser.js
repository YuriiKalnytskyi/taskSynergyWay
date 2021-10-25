import React, {useEffect, useState} from "react";
import "./AddUser.css"
import {addUser, deleteUserId, getAllGroups, updateUserId} from "../../services/app.service";

export const AddUser = ({ flag, setFlag, title, flagUpdate, setFlagUpdate, userId }) => {
    const [data, setData] = useState({ name: "", admin: '', group: "" })
    const [groups, setGroups] = useState([])


    const changeHandler = e => setData({ ...data, [e.target.name]: e.target.value })
    const changeHandler1 = () => setData({ ...data, admin: !data.admin })

    const create = async (e) => {
        await addUser(data)
        setFlag(!flag)
        setFlagUpdate(!flagUpdate)
    }
    const updateUser = async () => {
        setFlag(!flag)
        setFlagUpdate(!flagUpdate)
        await updateUserId({ data, userId })
    }
    const deleteUser = async () => {
        await deleteUserId(userId)
        setFlag(!flag)
        setFlagUpdate(!flagUpdate)
    }

    const getGroups = async () => {
        const d = await getAllGroups()
        setGroups(d)
    }

    useEffect(() => {
        getGroups()
    }, [flag])

    return (
        <div className={flag ? "modal1 active1" : "modal1"} onClick={() => {
            setFlag(!flag)
        }}>
            <div className={flag ? "modal_content1 active1" : "modal1"} onClick={event => event.stopPropagation()}>
                <div className={"title"}>{title}</div>
                <div>
                    <div className={'userEmail'}>
                        <label>Email   </label>
                        <input className="group_inputClass" placeholder="email@gmail.com"
                               id="name"
                               type="email"
                               name="name"
                               onChange={changeHandler}
                        />
                    </div>

                    <div className='ageClass'>
                        <label className='labelClass'>Group </label>
                        <select className={'ageInput2'} name="group"
                                onChange={changeHandler}>
                            <option disabled>Choose your option</option>
                            {
                                groups && groups.map((a, index) => <option key={index}>{a.name}</option>)
                            }
                        </select>
                    </div>

                    <div className={'userAdmin'}>
                        <label>Admin </label>
                        <input
                            id="checkbox"
                            type="checkbox"
                            name="admin"
                            checked={data.admin}
                            onChange={changeHandler1}
                        />
                    </div>
                    <div className={'createButton'}>
                        {
                            title === "update" ? <div className={'updateButtons'}>
                                <button className={'updateOrDelete'} id={'update'} onClick={updateUser}>update</button>
                                <button className={'updateOrDelete'} id={'delete'} onClick={deleteUser}>delete</button>
                            </div> : <button className={'createUser'} onClick={create}>create</button>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}