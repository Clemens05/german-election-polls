"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allResults = exports.byParticipants = exports.byRelease = exports.Parliament = exports.Institute = exports.Tasker = void 0;
const query_1 = require("../query");
var Tasker;
(function (Tasker) {
    function byID(order = query_1.Order.Asc) {
        let sortFunc;
        switch (order) {
            case query_1.Order.Asc:
                sortFunc = (a, b) => {
                    if (a.tasker.id < b.tasker.id)
                        return -1;
                    else if (a.tasker.id > b.tasker.id)
                        return 1;
                    else
                        return 0;
                };
                break;
            case query_1.Order.Desc:
                sortFunc = (a, b) => {
                    if (a.tasker.id > b.tasker.id)
                        return -1;
                    else if (a.tasker.id < b.tasker.id)
                        return 1;
                    else
                        return 0;
                };
                break;
            default:
                break;
        }
        return (d) => {
            return {
                parliaments: d.parliaments,
                institutes: d.institutes,
                taskers: d.taskers,
                parties: d.parties,
                surveys: d.surveys.sort(sortFunc),
            };
        };
    }
    Tasker.byID = byID;
    function byName(order = query_1.Order.Asc) {
        let sortFunc;
        switch (order) {
            case query_1.Order.Asc:
                sortFunc = (a, b) => {
                    if (a.tasker.name < b.tasker.name)
                        return -1;
                    else if (a.tasker.name > b.tasker.name)
                        return 1;
                    else
                        return 0;
                };
                break;
            case query_1.Order.Desc:
                sortFunc = (a, b) => {
                    if (a.tasker.name > b.tasker.name)
                        return -1;
                    else if (a.tasker.name < b.tasker.name)
                        return 1;
                    else
                        return 0;
                };
                break;
            default:
                break;
        }
        return (d) => {
            return {
                parliaments: d.parliaments,
                institutes: d.institutes,
                taskers: d.taskers,
                parties: d.parties,
                surveys: d.surveys.sort(sortFunc),
            };
        };
    }
    Tasker.byName = byName;
})(Tasker = exports.Tasker || (exports.Tasker = {}));
var Institute;
(function (Institute) {
    function byID(order = query_1.Order.Asc) {
        let sortFunc;
        switch (order) {
            case query_1.Order.Asc:
                sortFunc = (a, b) => {
                    if (a.institute.id < b.institute.id)
                        return -1;
                    else if (a.institute.id > b.institute.id)
                        return 1;
                    else
                        return 0;
                };
                break;
            case query_1.Order.Desc:
                sortFunc = (a, b) => {
                    if (a.institute.id > b.institute.id)
                        return -1;
                    else if (a.institute.id < b.institute.id)
                        return 1;
                    else
                        return 0;
                };
                break;
            default:
                break;
        }
        return (d) => {
            return {
                parliaments: d.parliaments,
                institutes: d.institutes,
                taskers: d.taskers,
                parties: d.parties,
                surveys: d.surveys.sort(sortFunc),
            };
        };
    }
    Institute.byID = byID;
    function byName(order = query_1.Order.Asc) {
        let sortFunc;
        switch (order) {
            case query_1.Order.Asc:
                sortFunc = (a, b) => {
                    if (a.institute.name < b.institute.name)
                        return -1;
                    else if (a.institute.name > b.institute.name)
                        return 1;
                    else
                        return 0;
                };
                break;
            case query_1.Order.Desc:
                sortFunc = (a, b) => {
                    if (a.institute.name > b.institute.name)
                        return -1;
                    else if (a.institute.name < b.institute.name)
                        return 1;
                    else
                        return 0;
                };
                break;
            default:
                break;
        }
        return (d) => {
            return {
                parliaments: d.parliaments,
                institutes: d.institutes,
                taskers: d.taskers,
                parties: d.parties,
                surveys: d.surveys.sort(sortFunc),
            };
        };
    }
    Institute.byName = byName;
})(Institute = exports.Institute || (exports.Institute = {}));
var Parliament;
(function (Parliament) {
    function byID(order = query_1.Order.Asc) {
        let sortFunc;
        switch (order) {
            case query_1.Order.Asc:
                sortFunc = (a, b) => {
                    if (a.parliament.id < b.parliament.id)
                        return -1;
                    else if (a.parliament.id > b.parliament.id)
                        return 1;
                    else
                        return 0;
                };
                break;
            case query_1.Order.Desc:
                sortFunc = (a, b) => {
                    if (a.parliament.id > b.parliament.id)
                        return -1;
                    else if (a.parliament.id < b.parliament.id)
                        return 1;
                    else
                        return 0;
                };
                break;
            default:
                break;
        }
        return (d) => {
            return {
                parliaments: d.parliaments,
                institutes: d.institutes,
                taskers: d.taskers,
                parties: d.parties,
                surveys: d.surveys.sort(sortFunc),
            };
        };
    }
    Parliament.byID = byID;
    function byShortcut(order = query_1.Order.Asc) {
        let sortFunc;
        switch (order) {
            case query_1.Order.Asc:
                sortFunc = (a, b) => {
                    if (a.parliament.shortcut < b.parliament.shortcut)
                        return -1;
                    else if (a.parliament.shortcut > b.parliament.shortcut)
                        return 1;
                    else
                        return 0;
                };
                break;
            case query_1.Order.Desc:
                sortFunc = (a, b) => {
                    if (a.parliament.shortcut > b.parliament.shortcut)
                        return -1;
                    else if (a.parliament.shortcut < b.parliament.shortcut)
                        return 1;
                    else
                        return 0;
                };
                break;
            default:
                break;
        }
        return (d) => {
            return {
                parliaments: d.parliaments,
                institutes: d.institutes,
                taskers: d.taskers,
                parties: d.parties,
                surveys: d.surveys.sort(sortFunc),
            };
        };
    }
    Parliament.byShortcut = byShortcut;
    function byName(order = query_1.Order.Asc) {
        let sortFunc;
        switch (order) {
            case query_1.Order.Asc:
                sortFunc = (a, b) => {
                    if (a.parliament.name < b.parliament.name)
                        return -1;
                    else if (a.parliament.name > b.parliament.name)
                        return 1;
                    else
                        return 0;
                };
                break;
            case query_1.Order.Desc:
                sortFunc = (a, b) => {
                    if (a.parliament.name > b.parliament.name)
                        return -1;
                    else if (a.parliament.name < b.parliament.name)
                        return 1;
                    else
                        return 0;
                };
                break;
            default:
                break;
        }
        return (d) => {
            return {
                parliaments: d.parliaments,
                institutes: d.institutes,
                taskers: d.taskers,
                parties: d.parties,
                surveys: d.surveys.sort(sortFunc),
            };
        };
    }
    Parliament.byName = byName;
    function byElection(order = query_1.Order.Asc) {
        let sortFunc;
        switch (order) {
            case query_1.Order.Asc:
                sortFunc = (a, b) => {
                    if (a.parliament.election < b.parliament.election)
                        return -1;
                    else if (a.parliament.election > b.parliament.election)
                        return 1;
                    else
                        return 0;
                };
                break;
            case query_1.Order.Desc:
                sortFunc = (a, b) => {
                    if (a.parliament.election > b.parliament.election)
                        return -1;
                    else if (a.parliament.election < b.parliament.election)
                        return 1;
                    else
                        return 0;
                };
                break;
            default:
                break;
        }
        return (d) => {
            return {
                parliaments: d.parliaments,
                institutes: d.institutes,
                taskers: d.taskers,
                parties: d.parties,
                surveys: d.surveys.sort(sortFunc),
            };
        };
    }
    Parliament.byElection = byElection;
})(Parliament = exports.Parliament || (exports.Parliament = {}));
function byRelease(order = query_1.Order.Asc) {
    let sortFunc;
    switch (order) {
        case query_1.Order.Asc:
            sortFunc = (a, b) => {
                if (a.release < b.release)
                    return -1;
                else if (a.release > b.release)
                    return 1;
                else
                    return 0;
            };
            break;
        case query_1.Order.Desc:
            sortFunc = (a, b) => {
                if (a.release > b.release)
                    return -1;
                else if (a.release < b.release)
                    return 1;
                else
                    return 0;
            };
            break;
        default:
            break;
    }
    return (d) => {
        return {
            parliaments: d.parliaments,
            institutes: d.institutes,
            taskers: d.taskers,
            parties: d.parties,
            surveys: d.surveys.sort(sortFunc),
        };
    };
}
exports.byRelease = byRelease;
function byParticipants(order = query_1.Order.Asc) {
    let sortFunc;
    switch (order) {
        case query_1.Order.Asc:
            sortFunc = (a, b) => {
                if (a.participants < b.participants)
                    return -1;
                else if (a.participants > b.participants)
                    return 1;
                else
                    return 0;
            };
            break;
        case query_1.Order.Desc:
            sortFunc = (a, b) => {
                if (a.participants > b.participants)
                    return -1;
                else if (a.participants < b.participants)
                    return 1;
                else
                    return 0;
            };
            break;
        default:
            break;
    }
    return (d) => {
        return {
            parliaments: d.parliaments,
            institutes: d.institutes,
            taskers: d.taskers,
            parties: d.parties,
            surveys: d.surveys.sort(sortFunc),
        };
    };
}
exports.byParticipants = byParticipants;
function allResults(order = query_1.Order.Asc) {
    let sortFunc;
    switch (order) {
        case query_1.Order.Asc:
            sortFunc = (a, b) => {
                if (a.result < b.result)
                    return -1;
                else if (a.result > b.result)
                    return 1;
                else
                    return 0;
            };
            break;
        case query_1.Order.Desc:
            sortFunc = (a, b) => {
                if (a.result > b.result)
                    return -1;
                else if (a.result < b.result)
                    return 1;
                else
                    return 0;
            };
            break;
        default:
            break;
    }
    return (d) => {
        d.surveys.forEach((survey) => {
            survey.results.sort(sortFunc);
        });
        return d;
    };
}
exports.allResults = allResults;
