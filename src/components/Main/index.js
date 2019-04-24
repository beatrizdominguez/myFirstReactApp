import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Series from '../../containers/Series'
import SeriesDetail from '../../containers/SeriesDetail'

const Main = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Series}></Route>
            <Route exact path='/serie/:id' component={SeriesDetail}></Route>
        </Switch>
    )
}

export default Main