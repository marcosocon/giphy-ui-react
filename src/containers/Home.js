import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Input } from 'semantic-ui-react';

import { fetchGifsByKeyword } from '../actions/search';
import { addFavorite, removeFavorite } from '../actions/favorites';
import { fetchTrendingGifs } from '../actions/trending';

import './Home.css';
import GifList from '../components/GifList';

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

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        this.props.fetchGifsByKeyword(this.state.searchStr);
    }

    render() {
        const { trending, search, results, addFavorite, removeFavorite, favorites } = this.props;
        const gifs = search.status === 0 ? trending : results;
        return (
            <Container>
                <GifList
                    title='Favorites'
                    favorites={favorites}
                    gifsToShow={favorites}
                    onAddFavorite={addFavorite}
                    onRemoveFavorite={removeFavorite} />
                <Grid>
                    <Grid.Row className="headerWrapper">
                        <Grid.Column
                            width={3}
                            verticalAlign="middle">
                            <Header
                                as="h1"
                                className="h1">
                                GIPHY UI
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Input
                                icon='search'
                                placeholder='Write a keyword to search a GIF'
                                name='searchStr'
                                onChange = {this.handleChange}
                                loading={search.loading}
                                results={results}
                                value={this.state.searchStr}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <GifList
                    title='Trending'
                    favorites={favorites}
                    gifsToShow={gifs}
                    onAddFavorite={addFavorite}
                    onRemoveFavorite={removeFavorite} />
            </Container>
        );
    }
};

const mapStateToProps = (state) => ({
    favorites: state.gifsReducer.favoriteGifs,
    trending: state.gifsReducer.trendingGifs,
    results: state.gifsReducer.searchResultGifs,
    search: state.searchReducer,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTrendingGifs: () => dispatch(fetchTrendingGifs()),
    fetchGifsByKeyword: (payload) => dispatch(fetchGifsByKeyword(payload)),
    removeFavorite: (payload) => dispatch(removeFavorite(payload)),
    addFavorite: (payload) => dispatch(addFavorite(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);