import { Institute } from './Institute';
import { Parliament } from './Parliament';
import { SurveyResult } from './SurveyResult';
import { Tasker } from './Tasker';
export type RawSurvey = {
    [key: string]: {
        Id: string;
        Date: string;
        Survey_Period: {
            Date_Start: string;
            Date_End: string;
        };
        Surveyed_Persons: string;
        Parliament_ID: string;
        Institute_ID: string;
        Tasker_ID: string;
        Results: {
            [key: string]: number;
        };
    };
};
export type Survey = {
    id: number;
    release: Date;
    surveyPeriod: {
        start: Date;
        end: Date;
    };
    participants: number;
    parliament: Parliament;
    institute: Institute;
    tasker: Tasker;
    results: SurveyResult[];
};
