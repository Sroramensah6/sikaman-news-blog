import React from 'react'

export default function Bar({ animationDuration, progress }) {
    return (
        <div
            className='bg-[#b38534] h-1 w-full left-0, top-0 fixed z-50'
            style={{
                marginLeft: `${(-1 + progress) * 100}%`,
                transition: `margin-left ${animationDuration}ms linear`
            }}
        />
    )
}
