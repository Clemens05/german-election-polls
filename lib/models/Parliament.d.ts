export type RawParliament = {
    [key: string]: {
        Shortcut: string;
        Name: string;
        Election: string;
    };
};
export type Parliament = {
    id: number;
    shortcut: string;
    name: string;
    election: string;
};
export declare const EmptyParliament: Parliament;
