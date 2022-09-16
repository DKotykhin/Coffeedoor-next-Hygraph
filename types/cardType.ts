export interface ICatalogList {
    coffeeList: { 
        edges: ICard[]
    };
    jamList: { 
        edges: ICard[]
    };
    teaList: { 
        edges: ICard[]
    };
    millsList: { 
        edges: ICard[]
    };
}

export interface ICard {
    node: {
        id: string;
        bodyUa: IBody;
        bodyRu: IBody;
        bodyEn: IBody;
        cardImg: {
            url: string
        };
        listImg: Array<{url: string}>;
        weight?: number;
        price: number;
        order: boolean;
        hide: boolean;
        position: number;    
    }
}

export interface INewCardData {
    node: {
        bodyUa: IBody;
        bodyRu: IBody;
        bodyEn: IBody;
        cardImg: {
            url: string
        };
        listImg: Array<{url: string}>;
        weight?: number;
        price: number;
        order: boolean;
        hide: boolean;
        position: number;
    }
}

export interface IBody {
    title: string;
    name: string;
    description?: string;
    tm?: string;
    sort?: IFilter;
    country?: string;
    additional_text_1?: string[];
    additional_list?: string[];
    additional_text_2?: string[];
}

export interface IFilter {
    key: string;
    value: string;
}
