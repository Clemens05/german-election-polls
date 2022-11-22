import { PollData } from './models/PollData';
export declare class PollHandler {
    private _data?;
    get data(): PollData | undefined;
    /**
     * @deprecated This feature will be removed in a future version.
     */
    static shared: PollHandler;
    select(queries: ((...data: any) => PollData)[]): PollData;
    update(): Promise<void>;
}
