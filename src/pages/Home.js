import React from 'react'
import Hero from '../components/Hero'
import ProjectCards from '../components/ProjectCards'
import HomeAbout from '../components/HomeAbout'
import { Link } from 'react-router-dom'


export default function Home() {

    return (
        <div>
            <Hero />

            <ProjectCards />
            <Link to={"/projects"} className='project-link-button'> <button className='project-button'>See more</button > </Link>
            <HomeAbout />
        </div >
    )
}
