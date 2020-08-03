import React, { Component } from 'react';
import SearchBar from '../Forms/SearchBar';
import ReportList from '../Reports/ReportList'
import { connect, } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './ArticlesPageStyles.scss'

class ArticlesPage extends Component {
    constructor() {

        super();
        this.state = {
            searchField: 'search',


        }
    }

    componentDidMount() {
       
      

    }





    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render() {


        
        const { reportInfo } = this.props
        const text = this.state.searchField


        let filterReport = reportInfo && reportInfo.filter(function (item) {
            return item.title.includes(text.toLowerCase());
        });




        if (!filterReport) {
            return <h1>Wait a sec</h1>
        }
        else {
            return (
                <div className='articles-container'>
                    <h1 className='f1'>FIND YOUR REPORT</h1>
                    <SearchBar searchChange={this.onSearchChange} />





                    <ReportList reports={filterReport} />

                </div>
            );
        }

    }

}



    const mapStateToProps = (state) => {

        return {
            reportInfo: state.firestore.ordered.articles
        }
    }




    export default compose(
        connect(mapStateToProps),
            firestoreConnect([
                { collection: 'articles', orderBy: ['title', 'asc'] }
            ])
) (ArticlesPage);