import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavDrawer from "../components/drawer/Drawer";
import FirstBlock from "../components/firstBlock/FirstBlock";
import InfoBlock from "../components/infoBlock/InfoBlock";
import Catalog from "../components/catalog/Catalog";
import AboutBlock from "../components/aboutblock/AboutBlock";
import Basket from "../components/basket/Basket";
import { GetCatalogList } from '../services/api';

import { ICatalogList } from '../types/cardType';

const theme = createTheme({
    palette: {
        primary: {
            main: "#00a1b6",
        },
    },
});

interface ICatalog {
    cataloglist: ICatalogList
}

const Home: NextPage<ICatalog> = ({ cataloglist }) => {

    return (
        <>
            <Head>
                <title>
                    {"CoffeeDoor - кав'ярня та магазин свіжообсмаженої кави"}
                </title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="CoffeeDOOR – це кавовий бренд, який по'єднує в собі свіжообсмажену каву рівня Speciality, кращі кавові технології, стильний дизайнерський інтер'єр, швидкий і дружній сервіс"
                />
                <meta name="keywords" content="кава в зернах, кавомолка, кофе, кофемолка" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.luckycat.pp.ua/" />
                <meta property="og:title" content="CoffeeDoor - кав'ярня та магазин свіжообсмаженої кави" />
                <meta property="og:description" content="CoffeeDOOR – це кавовий бренд, який по'єднує в собі свіжообсмажену каву рівня Speciality, кращі кавові технології, стильний дизайнерський інтер'єр, швидкий і дружній сервіс" />
                <meta property="og:image" content="https://i.ibb.co/x7YYbNk/logo-1285x670.jpg" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo/logo_192x192.webp" />
            </Head>
            <ThemeProvider theme={theme}>
                <NavDrawer />
                <FirstBlock />
                <InfoBlock />
                <Catalog cataloglist={cataloglist} />
                <AboutBlock />
                <Basket />
            </ThemeProvider>
        </>
    )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await GetCatalogList()
    return {
        props: {
            cataloglist: data,
        },
    };
}
