import { gql, GraphQLClient } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_URL;

const hygraph = new GraphQLClient(graphqlAPI, {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjM0MjAyODAsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2w4M2QwN2wwMHZzaDAxdDM2cW53NHFlMi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZjQ5MjExMDgtMWI4Mi00NzJiLTgzNjItZDZkMWNhMGY0NTg3IiwianRpIjoiY2w4NXhoaWw2MTlzZjAxdDFnNWdpOTdjbCJ9.1yRFw435-sl_04DZ22O08TvMMZj_bSYD3RtZkx0WT2B_kbCs4TRtvEjSVk9eDlqQ899Gzz7U19VkD7WUZUINg4UScoy6LFz7uzjb7Qh67OywcR5T65c2sLnQErHXW21g4f_SObZXZqi-3hjjdRqm1F-kDvG7Vigc8my8Z4H9MSR1qAZKtz1e6Cwn0GRemSebvmF5vfiMuEDosTdGpVOTWTPRh7uZWWq6c6KbRj-Yk_grUdvxqb3Rr_LfpUS74bvRKuMSvAZE_d7lJU_1Ag_kSF_D0m4KKKigEu3LN9MHXmwRdJYu3yGd2w44ZumVhfkHqYPkCHwGQjOQapqP42dk4gLJBsURkdd33ruHJ6xh-OBKF7B41LVSe1aeIfvoJLdm3LHeM4QLqkhA0zz9yOH6MXCQFIW2VkQurr_uYlUCJcnwRirNKx2dX41-WVKNs08RZuVKLK5_ysWHhxSghyFCFc6j3jVBlc_CCI4CY2Rwp3UnPbg2X0xwP8fjsP5xLTD5lG8fEvaIjN65s-qpeGn5ygJN8bjxCxuGQuisW9bIcZFTew-I_NxsYOAY7u1_R3aRJCnticbXGi0vUHiwuCQdSvisi04C70VSqHGU6at24MRDcgFtk_4e8TnZDwpnIsAPQj-BW9IajblPeD2-uixosmryVwukK7Qoo8uEDc5L_AQ'
    }
});

export const GetAllList = async() => {
    const query = gql `
    query GetAllList {
        coffeeList: coffeeListsConnection(orderBy: position_ASC, where: {hide_not: true}) {
            edges {
                node {
                bodyUa {
                    title
                    name
                    description
                    tm
                    country
                }
                bodyRu {
                    title
                    name
                    description
                    tm
                    country
                }
                bodyEn {
                    title
                    name
                    description
                    tm
                    country
                }            
                id
                weight
                price
                order
                hide
                position
                cardImg {
                    url
                }
                listImg {
                    url
                }
                }
            }
        }
        teaList: teaListsConnection(orderBy: position_ASC, where: {hide_not: true}) {
            edges {
                node {
                    bodyUa {
                        title
                        name
                        description
                        tm
                        country
                        sort {
                            key
                            value
                        }
                    }
                    bodyRu {
                        title
                        name
                        description
                        tm
                        country
                        sort {
                            key
                            value
                        }
                    }
                    bodyEn {
                        title
                        name
                        description
                        tm
                        country
                        sort {
                            key
                            value
                        }
                    }      
                    id
                    weight
                    price
                    order
                    hide
                    position
                    cardImg {
                        url
                    }
                    listImg {
                        url
                    }
                }
            }
        }
        jamList: jamListsConnection(orderBy: position_ASC, where: {hide_not: true}) {
            edges {
                node {
                bodyUa {
                    title
                    name
                    description
                    tm
                    country
                }
                bodyRu {
                    title
                    name
                    description
                    tm
                    country
                }
                bodyEn {
                    title
                    name
                    description
                    tm
                    country
                }            
                id
                weight
                price
                order
                hide
                position
                cardImg {
                    url
                }
                listImg {
                    url
                }
                }
            }
        }
    }`
    const result = await hygraph.request(query)
    return result
}