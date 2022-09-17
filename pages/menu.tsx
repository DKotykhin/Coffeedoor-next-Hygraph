import Head from "next/head";
import { GetServerSideProps, NextPage } from 'next';

import Accordeon from "../components/accordeon/Accordeon";
import MenuTitle from "../components/menuTitle/MenuTitle";
import ReturnButton from "../components/returnButton/ReturnButton";
import { GetMenuList } from '../services/api';

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

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await GetMenuList()
    return {
        props: {
            menulist: data,
        },
    };
}
