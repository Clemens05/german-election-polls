import { API } from './api';
import { EmptyInstitute, Institute } from './models/Institute';
import { EmptyParliament, Parliament } from './models/Parliament';
import { EmptyParty, Party } from './models/Party';
import { EmptyPollData, PollData } from './models/PollData';
import { Survey } from './models/Survey';
import { SurveyResult } from './models/SurveyResult';
import { EmptyTasker, Tasker } from './models/Tasker';

export class PollHandler {
  private _data?: PollData;

  get data() {
    return this._data;
  }

  public static shared: PollHandler = new PollHandler();

  public select(queries: ((...data: any) => PollData)[]): PollData {
    if (this.data) {
      let data: PollData = structuredClone(this.data);
      queries.forEach((query) => {
        data = query(data);
      });

      return data;
    } else {
      return EmptyPollData;
    }
  }

  public async update() {
    const rawData = await API.getData();

    if (rawData) {
      const rawParliaments = rawData.Parliaments;
      const rawInstitutes = rawData.Institutes;
      const rawTaskers = rawData.Taskers;
      const rawParties = rawData.Parties;
      const rawSurveys = rawData.Surveys;

      const parliaments: Parliament[] = [];
      for (const key in rawParliaments) {
        if (Object.prototype.hasOwnProperty.call(rawParliaments, key)) {
          const element = rawParliaments[key];
          parliaments.push({
            id: Number(key),
            shortcut: element.Shortcut as unknown as string,
            name: element.Name as unknown as string,
            election: element.Election as unknown as string,
          });
        }
      }

      const institutes: Institute[] = [];
      for (const key in rawInstitutes) {
        if (Object.prototype.hasOwnProperty.call(rawInstitutes, key)) {
          const element = rawInstitutes[key];
          institutes.push({
            id: Number(key),
            name: element.Name as unknown as string,
          });
        }
      }

      const taskers: Tasker[] = [];
      for (const key in rawTaskers) {
        if (Object.prototype.hasOwnProperty.call(rawTaskers, key)) {
          const element = rawTaskers[key];
          taskers.push({
            id: Number(key),
            name: element.Name as unknown as string,
          });
        }
      }

      const parties: Party[] = [];
      for (const key in rawParties) {
        if (Object.prototype.hasOwnProperty.call(rawParties, key)) {
          const element = rawParties[key];
          parties.push({
            id: Number(key),
            shortcut: element.Shortcut as unknown as string,
            name: element.Name as unknown as string,
          });
        }
      }

      const surveys: Survey[] = [];
      for (const key in rawSurveys) {
        if (Object.prototype.hasOwnProperty.call(rawSurveys, key)) {
          const element = rawSurveys[key];
          const rawSurveyPeriod = element.Survey_Period as any;
          const rawResults = element.Results as unknown as { [key: string]: number };
          const results: SurveyResult[] = [];

          for (const k in rawResults) {
            const party = parties.find((p) => {
              return p.id === Number(k);
            });

            results.push({
              party: party ?? EmptyParty,
              result: rawResults[k],
            });
          }

          const parliament = parliaments.find((p) => {
            return p.id === Number(element.Parliament_ID as unknown as string);
          });

          const tasker = taskers.find((t) => {
            return t.id === Number(element.Tasker_ID as unknown as string);
          });

          const institute = institutes.find((i) => {
            return i.id === Number(element.Institute_ID as unknown as string);
          });

          surveys.push({
            id: Number(key),
            release: new Date(element.Date as unknown as string),
            surveyPeriod: {
              start: new Date(rawSurveyPeriod.Date_Start as unknown as string),
              end: new Date(rawSurveyPeriod.Date_End as unknown as string),
            },
            participants: Number(element.Surveyed_Persons as unknown as string),
            parliament: parliament ?? EmptyParliament,
            institute: institute ?? EmptyInstitute,
            tasker: tasker ?? EmptyTasker,
            results,
          });
        }

        this._data = {
          parliaments,
          institutes,
          taskers,
          parties,
          surveys,
        };
      }
    }
  }
}
