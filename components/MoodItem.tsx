import React from 'react'

interface IMoodItem {
  value: string
}

const MoodItem:React.FC<IMoodItem> = ({value}) => {

    const classes = ['Happy', 'Neutral'].includes(value) ? 'bg-green-600 border-green-700' : 'bg-red-600 border-red-700'

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