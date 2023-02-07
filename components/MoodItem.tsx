import React from 'react'

interface IMoodItem {
    color: "Green" | "Red",
    value: string
}

const MoodItem:React.FC<IMoodItem> = ({color, value}) => {

    const classes = `bg-${color.toLowerCase()}-600 border-${color.toLowerCase()}-700`;

    return (
        <div className={`border-2 p-2 rounded-full shadow text-center text-white ${classes}`}>
            <div>
                <strong>
                    {value}
                </strong>
            </div> 
        </div>
    )
}

export default MoodItem