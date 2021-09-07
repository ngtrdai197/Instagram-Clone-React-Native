export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AuthResponseDto = {
  __typename?: 'AuthResponseDto';
  refreshToken: Scalars['String'];
  token: Scalars['String'];
  user: UserDto;
};

export type CommentDto = {
  __typename?: 'CommentDto';
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  post: PostDto;
  postId: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  user: UserDto;
  userId: Scalars['String'];
};

export type CommentSubscriptionDto = {
  __typename?: 'CommentSubscriptionDto';
  comment: CommentDto;
  postId: Scalars['String'];
};

export type CreateCommentDto = {
  content: Scalars['String'];
  postId: Scalars['String'];
};

export type CreatePostInput = {
  description?: Maybe<Scalars['String']>;
  photoUrls: Array<Scalars['String']>;
  totalViews?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  videoUrls?: Maybe<Array<Scalars['String']>>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CredentialInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type EditUserDto = {
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  isActive?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CommentDto;
  createPost: PostDto;
  refreshToken: AuthResponseDto;
  removePost: Scalars['Boolean'];
  signIn: AuthResponseDto;
  signOut: Scalars['Boolean'];
  signUp: AuthResponseDto;
  startFollowing: Scalars['Boolean'];
  toggleLikePost: Scalars['Boolean'];
  toggleSavePost: Scalars['Boolean'];
  updateUser: UserDto;
};


export type MutationCreateCommentArgs = {
  createComment: CreateCommentDto;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationRemovePostArgs = {
  postId: Scalars['String'];
};


export type MutationSignInArgs = {
  input: CredentialInput;
};


export type MutationSignUpArgs = {
  input: CreateUserInput;
};


export type MutationStartFollowingArgs = {
  followerId: Scalars['String'];
};


export type MutationToggleLikePostArgs = {
  postId: Scalars['String'];
};


export type MutationToggleSavePostArgs = {
  postId: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  input: EditUserDto;
};

export type PaginatedPostResponseDto = {
  __typename?: 'PaginatedPostResponseDto';
  hasNextPage: Scalars['Boolean'];
  items: Array<PostDto>;
  next_cursor?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type PostDto = {
  __typename?: 'PostDto';
  comments: Array<CommentDto>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  photoUrls: Array<Scalars['String']>;
  postLikeCount: Scalars['Int'];
  postLiked: Scalars['Boolean'];
  postSaved: Scalars['Boolean'];
  totalViews?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  user: UserDto;
  userId: Scalars['String'];
  videoUrls?: Maybe<Array<Scalars['String']>>;
};

export type Query = {
  __typename?: 'Query';
  getInProfile: Array<PostDto>;
  getPostById: PostDto;
  getPosts: PaginatedPostResponseDto;
  getPostsByCurrentUser: Array<PostDto>;
  getPostsSaved: Array<PostDto>;
  getProfile: UserDto;
  getProfileByUserId: UserDto;
};


export type QueryGetInProfileArgs = {
  userId: Scalars['String'];
};


export type QueryGetPostByIdArgs = {
  postId: Scalars['String'];
};


export type QueryGetPostsArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryGetPostsSavedArgs = {
  userId: Scalars['String'];
};


export type QueryGetProfileByUserIdArgs = {
  userId: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  subscribeCommentInPost: CommentSubscriptionDto;
};


export type SubscriptionSubscribeCommentInPostArgs = {
  postId: Scalars['String'];
};

export type UserDto = {
  __typename?: 'UserDto';
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  gender?: Maybe<Gender>;
  hasFollow: Scalars['Boolean'];
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  totalFollower: Scalars['Int'];
  totalFollowing: Scalars['Int'];
  totalPost: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export type SignInMutationMutationVariables = Exact<{
  input: CredentialInput;
}>;


export type SignInMutationMutation = { __typename?: 'Mutation', signIn: { __typename?: 'AuthResponseDto', token: string, refreshToken: string, user: { __typename?: 'UserDto', id: string, email: string, fullName: string, username: string, phoneNumber?: Maybe<string>, bio?: Maybe<string>, dob?: Maybe<any>, gender?: Maybe<Gender>, website?: Maybe<string>, avatarUrl?: Maybe<string>, hasFollow: boolean } } };
