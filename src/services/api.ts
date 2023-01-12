import { gql, GraphQLClient } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_URL || "";
const hygraph = new GraphQLClient(graphqlAPI);

export const GetCatalogList = async () => {
    const query = gql`
        fragment NameParts on Body {
            title
            name
            description
            tm
            country
        }
        fragment DescribeParts on Body {
            sort {
                key
                value
            }
            textA
            textList
            textB
            link {
                title
                value
            }
        }
        query GetAllList {
            coffeeList: coffeeListsConnection(
                orderBy: position_ASC
                where: { hide_not: true }
                first: 20
            ) {
                edges {
                    node {
                        bodyUa {
                            ...NameParts
                        }
                        bodyRu {
                            ...NameParts
                        }
                        bodyEn {
                            ...NameParts
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
            teaList: teaListsConnection(
                orderBy: position_ASC
                where: { hide_not: true }
                first: 25
            ) {
                edges {
                    node {
                        bodyUa {
                            ...NameParts
                            sort {
                                key
                                value
                            }
                        }
                        bodyRu {
                            ...NameParts
                            sort {
                                key
                                value
                            }
                        }
                        bodyEn {
                            ...NameParts
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
            jamList: jamListsConnection(
                orderBy: position_ASC
                where: { hide_not: true }
            ) {
                edges {
                    node {
                        bodyUa {
                            ...NameParts
                        }
                        bodyRu {
                            ...NameParts
                        }
                        bodyEn {
                            ...NameParts
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
            millsList: millsListsConnection(
                orderBy: position_ASC
                where: { hide_not: true }
            ) {
                edges {
                    node {
                        bodyUa {
                            ...NameParts
                            ...DescribeParts
                        }
                        bodyRu {
                            ...NameParts
                            ...DescribeParts
                        }
                        bodyEn {
                            ...NameParts
                            ...DescribeParts
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
            accessoriesList: accessoriesListsConnection(
                orderBy: position_ASC
                where: { hide_not: true }
            ) {
                edges {
                    node {
                        bodyUa {
                            ...NameParts
                            ...DescribeParts
                        }
                        bodyRu {
                            ...NameParts
                            ...DescribeParts
                        }
                        bodyEn {
                            ...NameParts
                            ...DescribeParts
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
        }
    `;
    const result = await hygraph.request(query);
    return result;
};

export const GetMenuList = async () => {
    const query = gql`
        fragment NameParts on MenuBlock {
            title
            subtitle
            body {
                name
                description
                price
            }
        }
        query GetMenuList {
            menuList: menuListsConnection(
                orderBy: position_ASC
                where: { hide_not: true }
                first: 15
            ) {
                edges {
                    node {
                        ua {
                            ...NameParts
                        }
                        ru {
                            ...NameParts
                        }
                        en {
                            ...NameParts
                        }
                        id
                        hide
                        position
                    }
                }
            }
        }
    `;
    const result = await hygraph.request(query);
    return result;
};
