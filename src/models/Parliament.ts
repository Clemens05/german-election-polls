export type RawParliament = {
  [key: string]: {
    Shortcut: string;
    Name: string;
    Election: string;
  };
};

export type Parliament = {
  id: number;
  shortcut: string;
  name: string;
  election: string;
};

export const EmptyParliament: Parliament = {
  id: -1,
  shortcut: '',
  name: '',
  election: '',
};
