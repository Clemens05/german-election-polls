import { PollData } from './models/PollData';
export declare class PollHandler {
    private _data?;
    get data(): PollData | undefined;
    static shared: PollHandler;
    select(queries: ((...data: any) => PollData)[]): PollData;
    update(): Promise<void>;
}
