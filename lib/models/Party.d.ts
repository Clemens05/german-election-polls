export type RawParty = {
    [key: string]: {
        Shortcut: string;
        Name: string;
    };
};
export type Party = {
    id: number;
    shortcut: string;
    name: string;
};
export declare const EmptyParty: Party;
