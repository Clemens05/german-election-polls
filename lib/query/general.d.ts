import { PollData } from '../models/PollData';
import { DataType } from '../query';
export declare function include(including: DataType[]): (data: PollData) => PollData;
