import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateOrUpdateNoteInput = {
  body?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  pagex?: InputMaybe<Scalars['Int']>;
  pagey?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  removeNote: Scalars['String'];
  saveNote: Note;
  saveNotes: Array<Note>;
};


export type MutationRemoveNoteArgs = {
  id: Scalars['String'];
};


export type MutationSaveNoteArgs = {
  createOrUpdateNoteInput: CreateOrUpdateNoteInput;
};


export type MutationSaveNotesArgs = {
  updateNoteInputs: Array<CreateOrUpdateNoteInput>;
};

export type Note = {
  __typename?: 'Note';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  pagex: Scalars['Int'];
  pagey: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getNote: Note;
  getNotes: Array<Note>;
};


export type QueryGetNoteArgs = {
  id: Scalars['String'];
};

export type SaveNoteMutationVariables = Exact<{
  createOrUpdateNoteInput: CreateOrUpdateNoteInput;
}>;


export type SaveNoteMutation = { __typename?: 'Mutation', saveNote: { __typename?: 'Note', id: string, pagex: number, pagey: number, body: string, createdAt: any, updatedAt: any } };

export type DeleteNoteMutationVariables = Exact<{
  removeNoteId: Scalars['String'];
}>;


export type DeleteNoteMutation = { __typename?: 'Mutation', removeNote: string };

export type SaveNotesMutationVariables = Exact<{
  updateNoteInputs: Array<CreateOrUpdateNoteInput> | CreateOrUpdateNoteInput;
}>;


export type SaveNotesMutation = { __typename?: 'Mutation', saveNotes: Array<{ __typename?: 'Note', id: string, pagex: number, pagey: number, body: string, createdAt: any, updatedAt: any }> };

export type GetNoteQueryVariables = Exact<{
  getNoteId: Scalars['String'];
}>;


export type GetNoteQuery = { __typename?: 'Query', getNote: { __typename?: 'Note', id: string, pagex: number, pagey: number, body: string, createdAt: any, updatedAt: any } };

export type GetNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotesQuery = { __typename?: 'Query', getNotes: Array<{ __typename?: 'Note', id: string, pagex: number, pagey: number, body: string, updatedAt: any, createdAt: any }> };


export const SaveNoteDocument = gql`
    mutation SaveNote($createOrUpdateNoteInput: CreateOrUpdateNoteInput!) {
  saveNote(createOrUpdateNoteInput: $createOrUpdateNoteInput) {
    id
    pagex
    pagey
    body
    createdAt
    updatedAt
  }
}
    `;
export type SaveNoteMutationFn = Apollo.MutationFunction<SaveNoteMutation, SaveNoteMutationVariables>;

/**
 * __useSaveNoteMutation__
 *
 * To run a mutation, you first call `useSaveNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveNoteMutation, { data, loading, error }] = useSaveNoteMutation({
 *   variables: {
 *      createOrUpdateNoteInput: // value for 'createOrUpdateNoteInput'
 *   },
 * });
 */
export function useSaveNoteMutation(baseOptions?: Apollo.MutationHookOptions<SaveNoteMutation, SaveNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveNoteMutation, SaveNoteMutationVariables>(SaveNoteDocument, options);
      }
export type SaveNoteMutationHookResult = ReturnType<typeof useSaveNoteMutation>;
export type SaveNoteMutationResult = Apollo.MutationResult<SaveNoteMutation>;
export type SaveNoteMutationOptions = Apollo.BaseMutationOptions<SaveNoteMutation, SaveNoteMutationVariables>;
export const DeleteNoteDocument = gql`
    mutation DeleteNote($removeNoteId: String!) {
  removeNote(id: $removeNoteId)
}
    `;
export type DeleteNoteMutationFn = Apollo.MutationFunction<DeleteNoteMutation, DeleteNoteMutationVariables>;

/**
 * __useDeleteNoteMutation__
 *
 * To run a mutation, you first call `useDeleteNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNoteMutation, { data, loading, error }] = useDeleteNoteMutation({
 *   variables: {
 *      removeNoteId: // value for 'removeNoteId'
 *   },
 * });
 */
export function useDeleteNoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNoteMutation, DeleteNoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNoteMutation, DeleteNoteMutationVariables>(DeleteNoteDocument, options);
      }
export type DeleteNoteMutationHookResult = ReturnType<typeof useDeleteNoteMutation>;
export type DeleteNoteMutationResult = Apollo.MutationResult<DeleteNoteMutation>;
export type DeleteNoteMutationOptions = Apollo.BaseMutationOptions<DeleteNoteMutation, DeleteNoteMutationVariables>;
export const SaveNotesDocument = gql`
    mutation SaveNotes($updateNoteInputs: [CreateOrUpdateNoteInput!]!) {
  saveNotes(updateNoteInputs: $updateNoteInputs) {
    id
    pagex
    pagey
    body
    createdAt
    updatedAt
  }
}
    `;
export type SaveNotesMutationFn = Apollo.MutationFunction<SaveNotesMutation, SaveNotesMutationVariables>;

/**
 * __useSaveNotesMutation__
 *
 * To run a mutation, you first call `useSaveNotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveNotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveNotesMutation, { data, loading, error }] = useSaveNotesMutation({
 *   variables: {
 *      updateNoteInputs: // value for 'updateNoteInputs'
 *   },
 * });
 */
export function useSaveNotesMutation(baseOptions?: Apollo.MutationHookOptions<SaveNotesMutation, SaveNotesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveNotesMutation, SaveNotesMutationVariables>(SaveNotesDocument, options);
      }
export type SaveNotesMutationHookResult = ReturnType<typeof useSaveNotesMutation>;
export type SaveNotesMutationResult = Apollo.MutationResult<SaveNotesMutation>;
export type SaveNotesMutationOptions = Apollo.BaseMutationOptions<SaveNotesMutation, SaveNotesMutationVariables>;
export const GetNoteDocument = gql`
    query GetNote($getNoteId: String!) {
  getNote(id: $getNoteId) {
    id
    pagex
    pagey
    body
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetNoteQuery__
 *
 * To run a query within a React component, call `useGetNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNoteQuery({
 *   variables: {
 *      getNoteId: // value for 'getNoteId'
 *   },
 * });
 */
export function useGetNoteQuery(baseOptions: Apollo.QueryHookOptions<GetNoteQuery, GetNoteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNoteQuery, GetNoteQueryVariables>(GetNoteDocument, options);
      }
export function useGetNoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNoteQuery, GetNoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNoteQuery, GetNoteQueryVariables>(GetNoteDocument, options);
        }
export type GetNoteQueryHookResult = ReturnType<typeof useGetNoteQuery>;
export type GetNoteLazyQueryHookResult = ReturnType<typeof useGetNoteLazyQuery>;
export type GetNoteQueryResult = Apollo.QueryResult<GetNoteQuery, GetNoteQueryVariables>;
export const GetNotesDocument = gql`
    query GetNotes {
  getNotes {
    id
    pagex
    pagey
    body
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useGetNotesQuery__
 *
 * To run a query within a React component, call `useGetNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNotesQuery(baseOptions?: Apollo.QueryHookOptions<GetNotesQuery, GetNotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
      }
export function useGetNotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotesQuery, GetNotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotesQuery, GetNotesQueryVariables>(GetNotesDocument, options);
        }
export type GetNotesQueryHookResult = ReturnType<typeof useGetNotesQuery>;
export type GetNotesLazyQueryHookResult = ReturnType<typeof useGetNotesLazyQuery>;
export type GetNotesQueryResult = Apollo.QueryResult<GetNotesQuery, GetNotesQueryVariables>;