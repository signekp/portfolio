import React from 'react'
import SectionHeader from './SectionHeader'
import data from '../projectData'
import ProjectElement from './ProjectElement'

export default function ProjectCards() {

    const item = data.filter(product => product.frontpage === true)
        .map((item) => {
            return <ProjectElement
                key={item.id}
                item={item}
            />
        })

    return (
        <div className='projectsContainer'>
            <SectionHeader className='firstHeader'
                heading="Projects"
            />
            <div className='homeProjects'>
                {item}
            </div>
        </div>
    )
}
