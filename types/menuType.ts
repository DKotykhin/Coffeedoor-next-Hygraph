export interface IMenuList {
    menuList: {
        edges: IMenu[]
    }
}

export interface IMenu {
    node: {
        ua: IItem;
        ru: IItem;
        en: IItem;
        hide: boolean;
        position?: number;
    }
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
