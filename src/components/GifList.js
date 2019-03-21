import React from "react";
import { uniqueId, isEmpty, find } from 'lodash';

import { Container, Grid, Image, Button, Header } from 'semantic-ui-react';

function GifList({ title, favorites, gifsToShow, onAddFavorite, onRemoveFavorite }) {
    const showFavoriteHandler = (item) => {
        const isAlreadyAFavorite = !!find(favorites, (el) => el.id === item.id);
        return (
            <Button
                circular
                icon="heart"
                className="like"
                color={isAlreadyAFavorite ? 'black' : 'red'}
                onClick={() => isAlreadyAFavorite ? onRemoveFavorite(item) : onAddFavorite(item)}
            />
        )
    }

    return gifsToShow && !isEmpty(gifsToShow) ? (
        <Container>
            <Header
                as="h1"
                className="h1">
                {title}
            </Header>
            <Grid columns={4}>
                {gifsToShow.map((item, key) => {
                    return (
                        <Grid.Column key={uniqueId("trending-")}>
                            <Image
                                src={item.images.fixed_height.url}
                                as="a"
                                href={item.images.original.url}
                                target="_blank"
                                bordered
                            />
                            {showFavoriteHandler(item)}
                        </Grid.Column>
                    )
                })}
            </Grid>
        </Container>
    ) : null;
};

export default GifList;