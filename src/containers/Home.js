import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingGifs } from './../actions/trending';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr: ''
        };
    }

    componentDidMount() {
        this.props.fetchTrendingGifs();
    }

    handleChange(e) {
        let change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    render() {
        const { trending } = this.props;

        return (<div>Works</div>);
    }
};

const mapStateToProps = (state) => {
    return {
        trending: state.gifsReducer.trendingGifs,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTrendingGifs: () => dispatch(fetchTrendingGifs()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);