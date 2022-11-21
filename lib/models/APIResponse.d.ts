import { Institute } from './Institute';
import { Parliament } from './Parliament';
import { Party } from './Party';
import { Survey } from './Survey';
import { Tasker } from './Tasker';
export type PollData = {
  Database: {
    License: {
      Name: string;
      Shortcut: string;
      Link: string;
    };
    Publisher: string;
    Author: string;
    Last_Update: string;
  };
  Parliaments: Parliament[];
  Institutes: Institute[];
  Taskers: Tasker[];
  Parties: Party[];
  Surveys: Survey[];
};
