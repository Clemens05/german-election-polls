"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = exports.Order = exports.DataType = void 0;
const general = __importStar(require("./query/general"));
const SurveySort = __importStar(require("./query/Survey.Sort"));
var DataType;
(function (DataType) {
    DataType[DataType["Parliaments"] = 0] = "Parliaments";
    DataType[DataType["Institutes"] = 1] = "Institutes";
    DataType[DataType["Taskers"] = 2] = "Taskers";
    DataType[DataType["Parties"] = 3] = "Parties";
    DataType[DataType["Surveys"] = 4] = "Surveys";
})(DataType = exports.DataType || (exports.DataType = {}));
var Order;
(function (Order) {
    Order[Order["Asc"] = 0] = "Asc";
    Order[Order["Desc"] = 1] = "Desc";
})(Order = exports.Order || (exports.Order = {}));
var Query;
(function (Query) {
    Query.include = general.include;
    let Survey;
    (function (Survey) {
        Survey.Sort = SurveySort;
        let Parliament;
        (function (Parliament) {
            let ID;
            (function (ID) {
                function is(ids) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return ids.includes(survey.parliament.id);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                ID.is = is;
                function isNot(ids) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return !ids.includes(survey.parliament.id);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                ID.isNot = isNot;
            })(ID = Parliament.ID || (Parliament.ID = {}));
            let Shortcut;
            (function (Shortcut) {
                function is(shortcuts) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return shortcuts.includes(survey.parliament.shortcut);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                Shortcut.is = is;
                function isNot(shortcuts) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return !shortcuts.includes(survey.parliament.shortcut);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                Shortcut.isNot = isNot;
            })(Shortcut = Parliament.Shortcut || (Parliament.Shortcut = {}));
        })(Parliament = Survey.Parliament || (Survey.Parliament = {}));
        let Tasker;
        (function (Tasker) {
            let ID;
            (function (ID) {
                function is(ids) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return ids.includes(survey.tasker.id);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                ID.is = is;
                function isNot(ids) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return !ids.includes(survey.tasker.id);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                ID.isNot = isNot;
            })(ID = Tasker.ID || (Tasker.ID = {}));
            let Name;
            (function (Name) {
                function is(names) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return names.includes(survey.tasker.name);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                Name.is = is;
                function isNot(names) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return !names.includes(survey.tasker.name);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                Name.isNot = isNot;
            })(Name = Tasker.Name || (Tasker.Name = {}));
        })(Tasker = Survey.Tasker || (Survey.Tasker = {}));
        let Release;
        (function (Release) {
            function is(dates) {
                return (d) => {
                    const surveys = d.surveys?.filter((survey) => {
                        let exists = false;
                        dates.forEach((date) => {
                            if (survey.release.toISOString() === date.toISOString()) {
                                exists = true;
                            }
                        });
                        return exists;
                    });
                    return {
                        parliaments: d.parliaments,
                        institutes: d.institutes,
                        taskers: d.taskers,
                        parties: d.parties,
                        surveys,
                    };
                };
            }
            Release.is = is;
            function isNot(dates) {
                return (d) => {
                    const surveys = d.surveys?.filter((survey) => {
                        let exists = false;
                        dates.forEach((date) => {
                            if (survey.release.toISOString() === date.toISOString()) {
                                exists = true;
                            }
                        });
                        return !exists;
                    });
                    return {
                        parliaments: d.parliaments,
                        institutes: d.institutes,
                        taskers: d.taskers,
                        parties: d.parties,
                        surveys,
                    };
                };
            }
            Release.isNot = isNot;
            function isGreater(date) {
                return (d) => {
                    const surveys = d.surveys?.filter((survey) => {
                        return survey.release > date;
                    });
                    return {
                        parliaments: d.parliaments,
                        institutes: d.institutes,
                        taskers: d.taskers,
                        parties: d.parties,
                        surveys,
                    };
                };
            }
            Release.isGreater = isGreater;
            function isLower(date) {
                return (d) => {
                    const surveys = d.surveys?.filter((survey) => {
                        return survey.release < date;
                    });
                    return {
                        parliaments: d.parliaments,
                        institutes: d.institutes,
                        taskers: d.taskers,
                        parties: d.parties,
                        surveys,
                    };
                };
            }
            Release.isLower = isLower;
            function isBetween(date1, date2) {
                return (d) => {
                    const surveys = d.surveys?.filter((survey) => {
                        return survey.release > date1 && survey.release < date2;
                    });
                    return {
                        parliaments: d.parliaments,
                        institutes: d.institutes,
                        taskers: d.taskers,
                        parties: d.parties,
                        surveys,
                    };
                };
            }
            Release.isBetween = isBetween;
        })(Release = Survey.Release || (Survey.Release = {}));
        let Participants;
        (function (Participants) {
            function is(participantsCounts) {
                return (d) => {
                    const surveys = d.surveys?.filter((survey) => {
                        return participantsCounts.includes(survey.participants);
                    });
                    return {
                        parliaments: d.parliaments,
                        institutes: d.institutes,
                        taskers: d.taskers,
                        parties: d.parties,
                        surveys,
                    };
                };
            }
            Participants.is = is;
            function isNot(participantsCounts) {
                return (d) => {
                    const surveys = d.surveys?.filter((survey) => {
                        return !participantsCounts.includes(survey.participants);
                    });
                    return {
                        parliaments: d.parliaments,
                        institutes: d.institutes,
                        taskers: d.taskers,
                        parties: d.parties,
                        surveys,
                    };
                };
            }
            Participants.isNot = isNot;
            function isGreater(participantsCount) {
                return (d) => {
                    const surveys = d.surveys?.filter((survey) => {
                        return survey.participants > participantsCount;
                    });
                    return {
                        parliaments: d.parliaments,
                        institutes: d.institutes,
                        taskers: d.taskers,
                        parties: d.parties,
                        surveys,
                    };
                };
            }
            Participants.isGreater = isGreater;
            function isLower(participantsCount) {
                return (d) => {
                    const surveys = d.surveys?.filter((survey) => {
                        return survey.participants < participantsCount;
                    });
                    return {
                        parliaments: d.parliaments,
                        institutes: d.institutes,
                        taskers: d.taskers,
                        parties: d.parties,
                        surveys,
                    };
                };
            }
            Participants.isLower = isLower;
            function isBetween(participantsCount1, participantsCount2) {
                return (d) => {
                    const surveys = d.surveys?.filter((survey) => {
                        return survey.participants > participantsCount1 && survey.participants < participantsCount2;
                    });
                    return {
                        parliaments: d.parliaments,
                        institutes: d.institutes,
                        taskers: d.taskers,
                        parties: d.parties,
                        surveys,
                    };
                };
            }
            Participants.isBetween = isBetween;
        })(Participants = Survey.Participants || (Survey.Participants = {}));
        let Institute;
        (function (Institute) {
            let ID;
            (function (ID) {
                function is(ids) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return ids.includes(survey.institute.id);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                ID.is = is;
                function isNot(ids) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return !ids.includes(survey.institute.id);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                ID.isNot = isNot;
            })(ID = Institute.ID || (Institute.ID = {}));
            let Name;
            (function (Name) {
                function is(names) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return names.includes(survey.institute.name);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                Name.is = is;
                function isNot(names) {
                    return (d) => {
                        const surveys = d.surveys?.filter((survey) => {
                            return !names.includes(survey.institute.name);
                        });
                        return {
                            parliaments: d.parliaments,
                            institutes: d.institutes,
                            taskers: d.taskers,
                            parties: d.parties,
                            surveys,
                        };
                    };
                }
                Name.isNot = isNot;
            })(Name = Institute.Name || (Institute.Name = {}));
        })(Institute = Survey.Institute || (Survey.Institute = {}));
    })(Survey = Query.Survey || (Query.Survey = {}));
})(Query = exports.Query || (exports.Query = {}));
