import { Institute } from './models/Institute';
import { Parliament } from './models/Parliament';
import { Party } from './models/Party';
import { PollData } from './models/PollData';
import { Survey } from './models/Survey';
import { SurveyResult } from './models/SurveyResult';
import { Tasker } from './models/Tasker';
import { PollHandler } from './pollHandler';
import { DataType, Order, Query } from './query';

export {
  PollHandler as default,
  PollHandler as Polls,
  Query,
  DataType,
  Order,
  Institute,
  Parliament,
  Party,
  PollData,
  Survey,
  SurveyResult,
  Tasker,
};
