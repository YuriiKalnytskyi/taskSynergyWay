import React, {useEffect, useState} from "react";
import "./AddGroup.css"
import {addGroup, deleteGroupId, updateGroupId} from "../../services/app.service";

export const AddGroup = ({ flag, setFlag, title, flagUpdate, setFlagUpdate, groupId, groupOne }) => {
    const [name, setName] = useState('')
    const [status, setStatus] = useState({
        dataAnalytics: '',
        servicesAnalytics: '',
        voiceAnalytics: '',
        queueStats: '',
        voiceStats: '',
        video: '',
        smartAccess: '',
        diagrams: '',
    })
    const [updateStatus, setUpdateStatus] = useState({
        dataAnalytics: '',
        servicesAnalytics: '',
        voiceAnalytics: '',
        queueStats: '',
        voiceStats: '',
        video: '',
        smartAccess: '',
        diagrams: '',
    })
    const checkbox = [
        { title: "Data Analytics", checked: "dataAnalytics" },
        { title: "Services Analytics", checked: "servicesAnalytics" },
        { title: "Voice Analytics", checked: "voiceAnalytics" },
        { title: "Queue Stats", checked: "queueStats" },
        { title: "Voice Stats", checked: "voiceStats" },
        { title: "Video", checked: "video" },
        { title: "Smart Access", checked: "smartAccess" },
        { title: "Diagrams", checked: "diagrams" },
    ]

    const changeHandler = e => setName(e.target.value)

    const changeHandler1 = e => {
        for (let value in status) {
            if (value === e.target.name) {
                if (title === "update") {
                    setUpdateStatus(updateStatus[value] = !updateStatus[value])
                    setUpdateStatus({ ...updateStatus })
                } else {
                    setStatus(status[value] = !status[value])
                    setStatus({ ...status })
                }
            }
        }
    }

    const updateGroup = async () => {
        setFlag(!flag)
        setFlagUpdate(!flagUpdate)
        await updateGroupId({ name, updateData: updateStatus, groupId })
    }
    const deleteGroup = async () => {
        setFlag(!flag)
        setFlagUpdate(!flagUpdate)
        await deleteGroupId(groupId)
    }
    const create = async () => {
        await addGroup({ name, data2: status })
        setFlag(!flag)
        setFlagUpdate(!flagUpdate)
    }

    useEffect(() => {
        for (let value in status) {
            for (let groupKey in groupOne) {
                if (value === groupKey) {
                    setName(groupOne.name)
                    setUpdateStatus(updateStatus[value] = groupOne[groupKey])
                    setUpdateStatus({ ...updateStatus })
                }
            }
        }
    }, [flag])
    return (
        <div className={flag ? "modal active" : "modal"} onClick={() => {
            setFlag(!flag)
        }}>
            <div className={flag ? "modal_content active" : "modal"} onClick={event => event.stopPropagation()}>
                <div className={"title"}>{title}</div>

                <div className={'input_container'}>
                    <div>Group Name</div>
                    <input className="user_inputClass" placeholder="name"
                           id="email"
                           type="text"
                           name="email"
                           onChange={changeHandler}
                    />
                </div>
                <div className={'checkbox_container'}>
                    {
                        checkbox && checkbox.map((status, index) =>
                            <div key={index} className={'oneCheckbox'}>
                                <input
                                    id={status.checked}
                                    type="checkbox"
                                    name={status.checked}
                                    checked={title === 'create' ? status[status.checked] : updateStatus[status.checked]}
                                    onChange={changeHandler1}
                                />
                                <div className={'oneCheckboxStatus'}>
                                    {status.title}
                                </div>

                            </div>
                        )
                    }
                </div>
                <div className={'buttonsContainer'}>
                    {
                        title === "update" ? <div className={'updateButtons'}>
                                <button className={'updateOrDelete'} id={'update'} onClick={updateGroup}>update</button>
                                <button className={'updateOrDelete'} id={'delete'} onClick={deleteGroup}>delete</button>
                            </div> :
                            <button  className={'createUser'} onClick={create}>create</button>

                    }
                </div>
            </div>
        </div>

    )
}