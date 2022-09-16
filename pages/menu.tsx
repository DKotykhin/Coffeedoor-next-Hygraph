import Head from "next/head";
import { GetStaticProps, NextPage } from 'next';

import Accordeon from "../components/accordeon/Accordeon";
import MenuTitle from "../components/menuTitle/MenuTitle";
import ReturnButton from "../components/returnButton/ReturnButton";

import { IMenuList } from "../types/menuType";

interface IMenuPage {
    menulist: IMenuList
}

const MenuPage: NextPage<IMenuPage> = ({ menulist }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Меню кав'ярні" />
                <title>{"Меню кав'ярні"}</title>
            </Head>
            <MenuTitle />
            <Accordeon menulist={menulist} />
            <ReturnButton />
        </>
    );
}

export default MenuPage;

// export const getStaticProps: GetStaticProps = async () => {
//     const { data } = await client.query({
//         query: GET_ALL_MENU,
//         variables: {
//             query: { hide_ne: true }
//         },
//     });
//     return {
//         props: {
//             menulist: data,
//         },
//     };
// }
