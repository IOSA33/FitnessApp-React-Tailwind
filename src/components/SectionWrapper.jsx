import React from 'react'

export default function SectionWrapper(props) {
    const { children, header, title, id } = props
    return (
        <div>{children}</div>
    )
}