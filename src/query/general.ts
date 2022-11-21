import { EmptyPollData, PollData } from '../models/PollData';
import { DataType } from '../query';

export function include(including: DataType[]): (data: PollData) => PollData {
  return (d: PollData) => {
    const newData: PollData = EmptyPollData;

    for (const dataType of including) {
      switch (dataType) {
        case DataType.Parliaments:
          newData.parliaments = d.parliaments;
          break;

        case DataType.Institutes:
          newData.institutes = d.institutes;
          break;

        case DataType.Taskers:
          newData.taskers = d.taskers;
          break;

        case DataType.Parties:
          newData.parties = d.parties;
          break;

        case DataType.Surveys:
          newData.surveys = d.surveys;
          break;

        default:
          break;
      }
    }

    return newData;
  };
}
