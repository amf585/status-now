import React from 'react'

interface IStatusItem {
  label: string,
  value: string
}

const StatusItem:React.FC<IStatusItem> = ({label, value}) => {
  return (
    <div className='border border-gray-400 shadow-sm flex justify-between mt-6 p-4 rounded-md'>
        <div>
            {label}
        </div>
        <div className={value === 'Yes' ? 'text-red-600' : ''}>
            <strong>
                {value}
            </strong>
        </div> 
    </div>
  )
}

export default StatusItem