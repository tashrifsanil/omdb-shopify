import React from 'react';

import {
    Layout,
    MediaCard,
    FormLayout
} from '@shopify/polaris';

const SearchResultCard = (props) => {
    return (
        <Layout.Section oneThird>
            <MediaCard
                title={props.movie.Title}
                primaryAction={{
                    content: 'Learn about getting started',
                    onAction: () => { },
                }}
                description={props.movie.Year}
                popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                portrait={true}
                size={"small"}
            >
                <img
                    alt=""
                    width="100%"
                    height="200"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src={props.movie.Poster}
                />
            </MediaCard>
        </Layout.Section>
    );
}

export default SearchResultCard;