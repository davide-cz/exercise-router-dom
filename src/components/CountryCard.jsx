import { NavLink, useParams } from "react-router-dom";

export default function ({nation}){


    return (
        <>
        <div>
            <NavLink>
                <h4>{nation.name.common}</h4>
                <img src={nation.flags.png} alt=""/>
            </NavLink>
        </div>
        </>
    )
}