import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import ItemList from "./ItemList";
import { teaFilter_ua, teaFilter_ru, teaFilter_en } from "./filterConstants";
import { ICatalogList, IFilter } from "../../types/cardType";

interface ICatalog {
    cataloglist: ICatalogList
}

const Catalog: React.FC<ICatalog> = ({ cataloglist }) => {
    const router = useRouter();
    let { t } = useTranslation("cataloglist");
    let teaFilter: IFilter[];

    switch (router.locale) {
        case "ua":
            teaFilter = teaFilter_ua;
            break;
        case "ru":
            teaFilter = teaFilter_ru;
            break;
        case "en":
            teaFilter = teaFilter_en;
            break;
        default:
            teaFilter = teaFilter_ua;
    }

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
            {/* <ItemList
                props={cataloglist?.jamlist}                
                i={i}                
                id={"jam_list"}
                title={t("jam_title")}
                subtitle={t("jam_subtitle")}
            />
            <ItemList
                props={cataloglist?.millslist}                
                i={i}                
                id={"mills_list"}
                title={t("mills_title")}
                subtitle={t("mills_subtitle")}
            /> */}
        </>
    );
};

export default Catalog;
