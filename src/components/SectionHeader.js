import React from 'react'

export default function SectionHeader({ heading }) {
    return (
        <div>
            <h3 className='sectionHeader'>
                <span className='multicolorHeader'>{heading}</span>
            </h3>
        </div>
    )
}
