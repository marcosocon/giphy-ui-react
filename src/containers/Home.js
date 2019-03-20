import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Search, Image, Button } from 'semantic-ui-react';
import { uniqueId } from 'lodash';
import { fetchOptionsGifts, fetchSearchedGifs } from '../actions/search';
import { addFavorite, removeFavorite } from '../actions/favorites';
import { fetchTrendingGifs } from '../actions/trending';
import './Home.css';

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

    hanldeResultSelect = (evt, { result }) => {
        this.props.fetchSearchedGifs(result.title);
    }
    
    handleSearchChange = (evt, { value }) => {
        console.log({ value });
        this.props.fetchOptionsGifts(value);
    }

    render() {
        const { trending, search, results, addFavorite } = this.props;
        const gifs = search.status === 0 ? trending : results;
        return (
            <Container>
                <Grid>
                    <Grid.Row className="headerWrapper">
                        <Grid.Column width={3} verticalAlign="middle">
                            <Header as="h1" className="h1">GIPTHY API TEST</Header>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Search 
                                loading={search.loading}
                                onResultSelect={this.hanldeResultSelect}
                                onSearchChange={this.handleSearchChange}
                                results={results}
                                value={search.currentSearch}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={4}>
                    {gifs.map((item, key) => (
                        <Grid.Column key={uniqueId('trending-')}>
                            <Image
                                src={item.images.fixed_height.url}
                                as="a"
                                href={item.images.original.url}
                                target="_blank"
                                bordered
                            />
                            <Button
                                circular
                                icon="heart"
                                className="like" 
                                color="red"
                                onClick={() => addFavorite(item)}
                            />
                        </Grid.Column>
                    ))}
                </Grid>
            </Container>
        );
    }
};

const mapStateToProps = (state) => ({
    trending: state.gifsReducer.trendingGifs,
    results: state.gifsReducer.searchResultGifs,
    search: state.searchReducer,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTrendingGifs: () => dispatch(fetchTrendingGifs()),
    fetchOptionsGifts: (payload) => dispatch(fetchOptionsGifts(payload)),
    fetchSearchedGifs: (payload) => dispatch(fetchSearchedGifs(payload)),
    addFavorite: (payload) => dispatch(addFavorite(payload)),
    removeFavorite: (payload) => dispatch(removeFavorite(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);