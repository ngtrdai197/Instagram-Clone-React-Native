import { gql } from '@apollo/client';

export const FETCH_POSTS_INDEX = gql`
  query getPostQuery($offset: Int!, $limit: Int!) {
    getPosts(limit: $limit, offset: $offset) {
      items {
        id
        photoUrls
        description
        createdBy
        createdAt
        totalViews
        userId
        videoUrls
        postSaved
        postLiked
        postLikeCount
        # user {
        #   ...User
        # }
        # comments {
        #   ...BaseComment
        # }
      }
      next_cursor
      hasNextPage
      total
    }
  }
`;
