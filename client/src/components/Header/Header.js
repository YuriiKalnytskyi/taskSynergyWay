import "./Header.css"
import React from 'react'
import {Link} from "react-router-dom";


export const Header = () => {
    return (
        <div className={"Header"}>
            <div className={"users_header"}><Link className={"users_header_link"} to={'/users'}>Users</Link></div>
            <div className={"groups_header"}><Link className={"groups_header_link"} to={'/groups'}>Groups</Link></div>
        </div>
    )
}