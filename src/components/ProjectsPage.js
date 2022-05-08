import React from 'react'
import SectionHeader from './SectionHeader'
import data from '../projectData'
import ProjectElement from './ProjectElement'

export default function ProjectPage() {

    const item = data.map((item) => {
        return <ProjectElement
            key={item.id}
            item={item}
        />
    })

    return (
        <div className='projectsContainer'>
            <SectionHeader
                heading="Projects"
            />
            <div className='homeProjects'>
                {item}
            </div>
        </div>
    )
}
