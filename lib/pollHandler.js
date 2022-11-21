"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollHandler = void 0;
const api_1 = require("./api");
const Institute_1 = require("./models/Institute");
const Parliament_1 = require("./models/Parliament");
const Party_1 = require("./models/Party");
const PollData_1 = require("./models/PollData");
const Tasker_1 = require("./models/Tasker");
class PollHandler {
    _data;
    get data() {
        return this._data;
    }
    static shared = new PollHandler();
    select(queries) {
        if (this.data) {
            let data = structuredClone(this.data);
            queries.forEach((query) => {
                data = query(data);
            });
            return data;
        }
        else {
            return PollData_1.EmptyPollData;
        }
    }
    async update() {
        const rawData = await api_1.API.getData();
        if (rawData) {
            const rawParliaments = rawData.Parliaments;
            const rawInstitutes = rawData.Institutes;
            const rawTaskers = rawData.Taskers;
            const rawParties = rawData.Parties;
            const rawSurveys = rawData.Surveys;
            const parliaments = [];
            for (const key in rawParliaments) {
                if (Object.prototype.hasOwnProperty.call(rawParliaments, key)) {
                    const element = rawParliaments[key];
                    parliaments.push({
                        id: Number(key),
                        shortcut: element.Shortcut,
                        name: element.Name,
                        election: element.Election,
                    });
                }
            }
            const institutes = [];
            for (const key in rawInstitutes) {
                if (Object.prototype.hasOwnProperty.call(rawInstitutes, key)) {
                    const element = rawInstitutes[key];
                    institutes.push({
                        id: Number(key),
                        name: element.Name,
                    });
                }
            }
            const taskers = [];
            for (const key in rawTaskers) {
                if (Object.prototype.hasOwnProperty.call(rawTaskers, key)) {
                    const element = rawTaskers[key];
                    taskers.push({
                        id: Number(key),
                        name: element.Name,
                    });
                }
            }
            const parties = [];
            for (const key in rawParties) {
                if (Object.prototype.hasOwnProperty.call(rawParties, key)) {
                    const element = rawParties[key];
                    parties.push({
                        id: Number(key),
                        shortcut: element.Shortcut,
                        name: element.Name,
                    });
                }
            }
            const surveys = [];
            for (const key in rawSurveys) {
                if (Object.prototype.hasOwnProperty.call(rawSurveys, key)) {
                    const element = rawSurveys[key];
                    const rawSurveyPeriod = element.Survey_Period;
                    const rawResults = element.Results;
                    const results = [];
                    for (const k in rawResults) {
                        const party = parties.find((p) => {
                            return p.id === Number(k);
                        });
                        results.push({
                            party: party ?? Party_1.EmptyParty,
                            result: rawResults[k],
                        });
                    }
                    const parliament = parliaments.find((p) => {
                        return p.id === Number(element.Parliament_ID);
                    });
                    const tasker = taskers.find((t) => {
                        return t.id === Number(element.Tasker_ID);
                    });
                    const institute = institutes.find((i) => {
                        return i.id === Number(element.Institute_ID);
                    });
                    surveys.push({
                        id: Number(key),
                        release: new Date(element.Date),
                        surveyPeriod: {
                            start: new Date(rawSurveyPeriod.Date_Start),
                            end: new Date(rawSurveyPeriod.Date_End),
                        },
                        participants: Number(element.Surveyed_Persons),
                        parliament: parliament ?? Parliament_1.EmptyParliament,
                        institute: institute ?? Institute_1.EmptyInstitute,
                        tasker: tasker ?? Tasker_1.EmptyTasker,
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
exports.PollHandler = PollHandler;
