import React from 'react'
interface Props {
    children: React.ReactNode
}
const Card: React.FC<Props> = ({children}) => {
  return (
    <div className="max-w-sm w-full  m-auto shadow-md rounded-xl p-6 bg-zinc-900 flex flex-col gap-2">
        {children}
    </div>
  )
}

export default Card