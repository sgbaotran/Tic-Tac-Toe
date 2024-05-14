import { useState } from "react"

export default function Player({ initialName, symbol,isActive, ...props }) {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setPlayerName] = useState(initialName)

    const handleClick = () => {
        setIsEditing((isEditMode) => !isEditMode)
    }
    const handleChange = (event) => {
        setPlayerName(event.target.value)
    }

    let playerName = <span className="player-name">{name}</span>


    if (isEditing) {
        playerName = <input type="text" value={name} required onChange={handleChange} />
    }


    return (

        <li className={isActive ? "active" :undefined} {...props}>
            <span className="player">
                {playerName}
            </span>

            <span className="player-symbol">{symbol}</span>

            <button onClick={handleClick}>{!isEditing ? "Edit" : "Save"}</button>

        </li>
    )
}