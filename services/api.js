import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_URL;

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
    }`
    const result = await request(graphqlAPI, query)
    return result
}