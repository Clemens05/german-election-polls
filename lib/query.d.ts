import { PollData } from './models/PollData';
import * as general from './query/general';
import * as SurveySort from './query/Survey.Sort';
export declare enum DataType {
    Parliaments = 0,
    Institutes = 1,
    Taskers = 2,
    Parties = 3,
    Surveys = 4
}
export declare enum Order {
    Asc = 0,
    Desc = 1
}
export declare namespace Query {
    const include: typeof general.include;
    namespace Survey {
        const Sort: typeof SurveySort;
        namespace Parliament {
            namespace ID {
                function is(ids: number[]): (data: PollData) => PollData;
                function isNot(ids: number[]): (data: PollData) => PollData;
            }
            namespace Shortcut {
                function is(shortcuts: string[]): (data: PollData) => PollData;
                function isNot(shortcuts: string[]): (data: PollData) => PollData;
            }
        }
        namespace Tasker {
            namespace ID {
                function is(ids: number[]): (data: PollData) => PollData;
                function isNot(ids: number[]): (data: PollData) => PollData;
            }
            namespace Name {
                function is(names: string[]): (data: PollData) => PollData;
                function isNot(names: string[]): (data: PollData) => PollData;
            }
        }
        namespace Release {
            function is(dates: Date[]): (data: PollData) => PollData;
            function isNot(dates: Date[]): (data: PollData) => PollData;
            function isGreater(date: Date): (data: PollData) => PollData;
            function isLower(date: Date): (data: PollData) => PollData;
            function isBetween(date1: Date, date2: Date): (data: PollData) => PollData;
        }
        namespace Participants {
            function is(participantsCounts: number[]): (data: PollData) => PollData;
            function isNot(participantsCounts: number[]): (data: PollData) => PollData;
            function isGreater(participantsCount: number): (data: PollData) => PollData;
            function isLower(participantsCount: number): (data: PollData) => PollData;
            function isBetween(participantsCount1: number, participantsCount2: number): (data: PollData) => PollData;
        }
        namespace Institute {
            namespace ID {
                function is(ids: number[]): (data: PollData) => PollData;
                function isNot(ids: number[]): (data: PollData) => PollData;
            }
            namespace Name {
                function is(names: string[]): (data: PollData) => PollData;
                function isNot(names: string[]): (data: PollData) => PollData;
            }
        }
    }
}
