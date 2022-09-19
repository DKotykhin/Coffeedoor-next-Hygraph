import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import ItemList from "./ItemList";
import { ICatalogList, IFilter } from "../../types/cardType";

interface ICatalog {
    cataloglist: ICatalogList
}

const Catalog: React.FC<ICatalog> = ({ cataloglist }) => {
    const router = useRouter();
    let { t } = useTranslation("cataloglist");    

    const teaFilter: IFilter[] = [
        { button: t("buttonA"), value: t("valueA") },
        { button: t("buttonB"), value: t("valueB") },
        { button: t("buttonC"), value: t("valueC") },
        { button: t("buttonD"), value: t("valueD") },
        { button: t("buttonE"), value: t("valueE") },
    ];

    return (
        <>
            <ItemList
                props={cataloglist.coffeeList.edges}
                lang={router.locale}
                id={"coffee_list"}
                title={t("coffee_title")}
                subtitle={t("coffee_subtitle")}
            />
            <ItemList
                props={cataloglist.teaList.edges}
                lang={router.locale}
                filterArray={teaFilter}
                id={"tea_list"}
                title={t("tea_title")}
                subtitle={t("tea_subtitle")}
            />
            <ItemList
                props={cataloglist.jamList.edges}                
                lang={router.locale}                
                id={"jam_list"}
                title={t("jam_title")}
                subtitle={t("jam_subtitle")}
            />
            <ItemList
                props={cataloglist?.millsList.edges}                
                lang={router.locale}                
                id={"mills_list"}
                title={t("mills_title")}
                subtitle={t("mills_subtitle")}
            />
        </>
    );
};

export default Catalog;
