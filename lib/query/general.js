"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.include = void 0;
const PollData_1 = require("../models/PollData");
const query_1 = require("../query");
function include(including) {
    return (d) => {
        const newData = PollData_1.EmptyPollData;
        for (const dataType of including) {
            switch (dataType) {
                case query_1.DataType.Parliaments:
                    newData.parliaments = d.parliaments;
                    break;
                case query_1.DataType.Institutes:
                    newData.institutes = d.institutes;
                    break;
                case query_1.DataType.Taskers:
                    newData.taskers = d.taskers;
                    break;
                case query_1.DataType.Parties:
                    newData.parties = d.parties;
                    break;
                case query_1.DataType.Surveys:
                    newData.surveys = d.surveys;
                    break;
                default:
                    break;
            }
        }
        return newData;
    };
}
exports.include = include;
