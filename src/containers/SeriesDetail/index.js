import React, {Component} from 'react'
import Loader from '../../components/Loader'
import {Link} from 'react-router-dom'

class SeriesDetail extends Component{

    state = {
        show: null,
        isFetching: false
    }

    componentDidMount(){
        const {id} = this.props.match.params
        fetch(`http://api.tvmaze.com/shows/${id}?enable-episodes`)
        .then(response => response.json())
        .then(json => {
          this.setState({show: json})
        })
    }
    render() {
        const {show} = this.state
        return (
        <div>
            <h1>Serie info - id: {this.props.match.params.id}</h1>
            {show === null
            &&
            <Loader/>
            }
            {show !== null
            &&
            <div>
                <p>{show.name}</p>
                <p>Premiered - {show.premiered}</p>
                <p>Rating - {show.rating.average}</p>
                <p>Episodes - </p>
                {
                  show.image.medium
                  &&    
                <p>
                    <img
                    alt='Show image'
                    src={show.image.medium}></img>
                </p>
                }
            </div>
            }
            <Link to={'/'}>Go back to all!</Link>
        </div>
        )
    }
}

export default SeriesDetail