import React, {useEffect, useState} from 'react'
import {AddGroup} from "../AddGroup/AddGroup";
import "./Groups.css"
import {getAllGroups, getOneGroup} from "../../services/app.service";

export const Groups = () => {
    const [flag, setFlag] = useState(false)
    const [flagUpdate, setFlagUpdate] = useState(false)
    const [updateGroupFlag, setUpdateGroup] = useState(false)

    const [data, setData] = useState([])

    const [groupId, setGroupId] = useState(null)
    const [groupOne, setGroupOne] = useState(null)

    const checkbox = [
        { checked: "dataAnalytics" },
        { checked: "servicesAnalytics" },
        { checked: "voiceAnalytics" },
        { checked: "queueStats" },
        { checked: "voiceStats" },
        { checked: "video" },
        { checked: "smartAccess" },
        { checked: "diagrams" },
    ]

    const nameTables = [
        'Data Analytics',
        'Services Analytics',
        'Voice Analytics',
        'Queue Stats',
        'Voice Stats',
        'Video',
        'Smart Access',
        'Diagrams',
    ]

    const update = async (id) => {
        const group = await getOneGroup(id)
        setGroupOne(group)
        setFlag(!flag)
        setUpdateGroup(true)
    }

    const getAll = async () => {
        const groups = await getAllGroups()
        setData(groups)
    }

    useEffect(() => {
        getAll()
    }, [flag, flagUpdate])

    return (
        <div className={"Group_container"}>
            <div className={"Group_btn"}>
                <div className={"group_btn"} onClick={() => {
                    setFlag(!flag)
                    setUpdateGroup(false)
                    setGroupId(null)
                }}>
                    <AddGroup flag={flag}
                              setFlag={setFlag}
                              flagUpdate={flagUpdate}
                              setFlagUpdate={setFlagUpdate}
                              title={updateGroupFlag ? 'update' : 'create'}
                              groupId={groupId}
                              groupOne={groupOne}
                    ></AddGroup>
                    Add Group
                </div>
            </div>
            <div className={"group_tables"}>
                <div className={'group_tables_tr'}>
                    <div className={"group_tables_id"}>ID</div>
                    <div className={"group_tables_name"}>Name</div>
                    <div className={'tables_checkbox'}>
                        {
                            nameTables.map((m, index) =>
                                <div key={index} className={"group_tables_checkbox"}>{m}</div>
                            )
                        }
                    </div>
                    <div className={"group_tables_actions"}>Actions</div>
                </div>
                {
                    data && data.map((group, index) =>
                        <div key={index}>
                            <div className={'user_tables_tr'}>
                                <div className={"group_tables_id"}>{group.id}</div>
                                <div className={"group_tables_name"}>{group.name}</div>
                                {
                                    checkbox && checkbox.map((status, index) =>
                                        <div className={"group_tables_checkbox"} key={index}>
                                            <div className={"checkbox"}>
                                                <input type="checkbox"
                                                       checked={group.checkbox[status.checked]}
                                                       // defaultChecked={group.checkbox[status.checked]}
                                                />
                                            </div>
                                        </div>
                                    )
                                }

                                <div className={"group_tables_Btn"}>
                                    <div className={"group_tables_btn"}
                                         onClick={() => {
                                             setGroupId(group.id)
                                             update(group.id)
                                         }}>
                                        Edit Group
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}
