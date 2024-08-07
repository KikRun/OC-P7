import "./TextCollapse.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function TextCollapse({ title, content }) {
    let [IsOpen, setOpen] = useState(false)
    return (
        <section className="description">
            <div className="head" onClick={() => setOpen(!IsOpen) + console.log(IsOpen)}>
                <h3 >{title}</h3>
                <FontAwesomeIcon className={(IsOpen ? 'open' : null) + ' arrow'} icon={faAngleDown} />
            </div>
            <div className={(IsOpen ? 'open' : "hide") + " content"} >
                {Array.isArray(content) ? < ul > {content.map((item) => <li>{item}</li>)} </ul> : <p >{content}</p>
                }
            </div>

        </section >
    )
}
