import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import Intro from '../Intro'

const SeriesListItem = (props) => (
    <li key={props.show.id}>
    <Link to={`/serie/${props.show.id}`}>
        {props.show.name}
    </Link>
    </li>
)

// get only some property from properties object
const SeriesListItem2 = ({show}) => (
    <li key={show.id}>
        bbb{show.name}
    </li>
)

const SeriesList = (props) => {
    return (
        // <h1>Series LIst component</h1>
        <div>
        <Intro message='Search for your fav series'/>
        <ul className='series-list'>
        {props.list.map(serie => (
            <SeriesListItem show={serie.show}/>
        ))}
        </ul>
        </div>
    )
}
export default SeriesList