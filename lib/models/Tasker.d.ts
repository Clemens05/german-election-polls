export type RawTasker = {
    [key: string]: {
        Name: string;
    };
};
export type Tasker = {
    id: number;
    name: string;
};
export declare const EmptyTasker: Tasker;
