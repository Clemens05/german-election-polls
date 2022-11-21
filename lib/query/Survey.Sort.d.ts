import { PollData } from '../models/PollData';
import { Order } from '../query';
export declare namespace Tasker {
    function byID(order?: Order): (data: PollData) => PollData;
    function byName(order?: Order): (data: PollData) => PollData;
}
export declare namespace Institute {
    function byID(order?: Order): (data: PollData) => PollData;
    function byName(order?: Order): (data: PollData) => PollData;
}
export declare namespace Parliament {
    function byID(order?: Order): (data: PollData) => PollData;
    function byShortcut(order?: Order): (data: PollData) => PollData;
    function byName(order?: Order): (data: PollData) => PollData;
    function byElection(order?: Order): (data: PollData) => PollData;
}
export declare function byRelease(order?: Order): (data: PollData) => PollData;
export declare function byParticipants(order?: Order): (data: PollData) => PollData;
export declare function allResults(order?: Order): (data: PollData) => PollData;
