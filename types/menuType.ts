export interface IMenuList {
    menu: IMenu[];
}

export interface IMenu extends INewMenu {
    _id: string;
}

export interface INewMenu {
    ua: IItem;
    ru: IItem;
    en: IItem;
    hide: boolean;
    position?: number;
}

export interface ITitle {
    title: string;
}

interface IItem {
    body: IBody[];
    title: string;
}

export interface IBody {
    name: string;
    description?: string;
    price: string;
}
