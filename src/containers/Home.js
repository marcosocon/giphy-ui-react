import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Header, Search, Image } from 'semantic-ui-react';
import { uniqueId } from 'lodash';
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
        const { trending, searching, setResultSelect, findResultSelect } = this.props;
        return (
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header as="h1">GIPTHY API TEST</Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Search 
                                isLoading={searching.isLoading}
                                onResultSelect={setResultSelect}
                                onSearchChange={findResultSelect}
                                results={searching.results}
                                value={searching.value}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={5}>
                    <Grid.Row>
                        {trending.map(item => (
                            <Grid.Column key={uniqueId('trending-')}>
                                <Image src={item.images.fixed_height.url} />
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
};

const mapStateToProps = (state) => ({
    trending: state.gifsReducer.trendingGifs,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTrendingGifs: () => dispatch(fetchTrendingGifs()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);