import { PollData } from './models/PollData';
import { Survey } from './models/Survey';
import * as general from './query/general';
import * as SurveySort from './query/Survey.Sort';

export enum DataType {
  Parliaments,
  Institutes,
  Taskers,
  Parties,
  Surveys,
}

export enum Order {
  Asc,
  Desc,
}

export namespace Query {
  export const include = general.include;

  export namespace Survey {
    export const Sort = SurveySort;

    export namespace Parliament {
      export namespace ID {
        export function is(ids: number[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return ids.includes(survey.parliament.id);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }

        export function isNot(ids: number[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return !ids.includes(survey.parliament.id);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }
      }
      export namespace Shortcut {
        export function is(shortcuts: string[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return shortcuts.includes(survey.parliament.shortcut);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }

        export function isNot(shortcuts: string[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return !shortcuts.includes(survey.parliament.shortcut);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }
      }
    }

    export namespace Tasker {
      export namespace ID {
        export function is(ids: number[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return ids.includes(survey.tasker.id);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }

        export function isNot(ids: number[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return !ids.includes(survey.tasker.id);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }
      }

      export namespace Name {
        export function is(names: string[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return names.includes(survey.tasker.name);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }

        export function isNot(names: string[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return !names.includes(survey.tasker.name);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }
      }
    }

    export namespace Release {
      export function is(dates: Date[]): (data: PollData) => PollData {
        return (d: PollData) => {
          const surveys = d.surveys?.filter((survey: Survey) => {
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
          } as PollData;
        };
      }

      export function isNot(dates: Date[]): (data: PollData) => PollData {
        return (d: PollData) => {
          const surveys = d.surveys?.filter((survey: Survey) => {
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
          } as PollData;
        };
      }

      export function isGreater(date: Date): (data: PollData) => PollData {
        return (d: PollData) => {
          const surveys = d.surveys?.filter((survey: Survey) => {
            return survey.release > date;
          });

          return {
            parliaments: d.parliaments,
            institutes: d.institutes,
            taskers: d.taskers,
            parties: d.parties,
            surveys,
          } as PollData;
        };
      }

      export function isLower(date: Date): (data: PollData) => PollData {
        return (d: PollData) => {
          const surveys = d.surveys?.filter((survey: Survey) => {
            return survey.release < date;
          });

          return {
            parliaments: d.parliaments,
            institutes: d.institutes,
            taskers: d.taskers,
            parties: d.parties,
            surveys,
          } as PollData;
        };
      }

      export function isBetween(date1: Date, date2: Date): (data: PollData) => PollData {
        return (d: PollData) => {
          const surveys = d.surveys?.filter((survey: Survey) => {
            return survey.release > date1 && survey.release < date2;
          });

          return {
            parliaments: d.parliaments,
            institutes: d.institutes,
            taskers: d.taskers,
            parties: d.parties,
            surveys,
          } as PollData;
        };
      }
    }

    export namespace Participants {
      export function is(participantsCounts: number[]): (data: PollData) => PollData {
        return (d: PollData) => {
          const surveys = d.surveys?.filter((survey: Survey) => {
            return participantsCounts.includes(survey.participants);
          });

          return {
            parliaments: d.parliaments,
            institutes: d.institutes,
            taskers: d.taskers,
            parties: d.parties,
            surveys,
          } as PollData;
        };
      }

      export function isNot(participantsCounts: number[]): (data: PollData) => PollData {
        return (d: PollData) => {
          const surveys = d.surveys?.filter((survey: Survey) => {
            return !participantsCounts.includes(survey.participants);
          });

          return {
            parliaments: d.parliaments,
            institutes: d.institutes,
            taskers: d.taskers,
            parties: d.parties,
            surveys,
          } as PollData;
        };
      }

      export function isGreater(participantsCount: number): (data: PollData) => PollData {
        return (d: PollData) => {
          const surveys = d.surveys?.filter((survey: Survey) => {
            return survey.participants > participantsCount;
          });

          return {
            parliaments: d.parliaments,
            institutes: d.institutes,
            taskers: d.taskers,
            parties: d.parties,
            surveys,
          } as PollData;
        };
      }

      export function isLower(participantsCount: number): (data: PollData) => PollData {
        return (d: PollData) => {
          const surveys = d.surveys?.filter((survey: Survey) => {
            return survey.participants < participantsCount;
          });

          return {
            parliaments: d.parliaments,
            institutes: d.institutes,
            taskers: d.taskers,
            parties: d.parties,
            surveys,
          } as PollData;
        };
      }

      export function isBetween(participantsCount1: number, participantsCount2: number): (data: PollData) => PollData {
        return (d: PollData) => {
          const surveys = d.surveys?.filter((survey: Survey) => {
            return survey.participants > participantsCount1 && survey.participants < participantsCount2;
          });

          return {
            parliaments: d.parliaments,
            institutes: d.institutes,
            taskers: d.taskers,
            parties: d.parties,
            surveys,
          } as PollData;
        };
      }
    }

    export namespace Institute {
      export namespace ID {
        export function is(ids: number[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return ids.includes(survey.institute.id);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }

        export function isNot(ids: number[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return !ids.includes(survey.institute.id);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }
      }

      export namespace Name {
        export function is(names: string[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return names.includes(survey.institute.name);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }

        export function isNot(names: string[]): (data: PollData) => PollData {
          return (d: PollData) => {
            const surveys = d.surveys?.filter((survey: Survey) => {
              return !names.includes(survey.institute.name);
            });

            return {
              parliaments: d.parliaments,
              institutes: d.institutes,
              taskers: d.taskers,
              parties: d.parties,
              surveys,
            } as PollData;
          };
        }
      }
    }
  }
}
