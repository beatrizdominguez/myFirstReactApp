import React, {Component} from 'react'
import SeriesList from '../../components/SeriesList'
import Loader from '../../components/Loader'

class Series extends Component{
// static properties
    state = {
        series: [],
        seriesName: '',
        isFetching: false
      }

      // set properties after rendering component
    // VERSION 1
    // componentDidMount() {
    //   const newSeries = ['one', 'two']
    //   setTimeout(() => {
    //     this.setState({series: newSeries})
    //   }, 200)
    // }
    // load when initialized / static
    // componentDidMount() {
    //     const MONUMENTOS_API_URL = 'https://www.zaragoza.es/sede/servicio/monumento?rf=html&srsname=utm30n&start=0&rows=50&distance=500'
    //     fetch('http://api.tvmaze.com/search/shows?q=vikings')
    //     .then(response => response.json())
    //     .then(json => {
    //       this.setState({series: json})
    //     })
    //   }

    onSeriesInputChange= e => {
      console.log(e)
      console.log(e.target.value)
      const value = e.target.value
      this.setState({seriesName: value, isFetching:true})
      fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
        .then(response => response.json())
        .then(json => {
          this.setState({series: json, isFetching: false})
        })
    }

    render() {
      const {series, seriesName, isFetching} = this.state
        return (
        <div>
            <h1>Series container</h1>
            <input type="text" value={seriesName} onChange={this.onSeriesInputChange}/>
            <p> state:: {this.state.series.length}</p>
            {/* EMPTY STATES */}
            {
              !isFetching && series.length === 0 && seriesName === ''
              && 
              <p>Please enter the value</p>
            }
            {
              !isFetching && series.length === 0 && seriesName !== ''
              && 
              <p>NO DATA FOUND</p>
            }
            {
              isFetching
              && 
              // <p>Loading ...</p>
              <Loader/>
            }
            {
              !isFetching
              && 
              <SeriesList list={series}/>
            }
        </div>
        )
    }
}

export default Series