import React, {Component} from 'react'
import Loader from '../../components/Loader'

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
                <p>
                    <img
                    alt='Show image'
                    src={show.image.medium}></img>
                </p>
            </div>
            }
        </div>
        )
    }
}

export default SeriesDetail