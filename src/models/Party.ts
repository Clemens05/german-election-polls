export type RawParty = {
  [key: string]: {
    Shortcut: string;
    Name: string;
  };
};

export type Party = {
  id: number;
  shortcut: string;
  name: string;
};

export const EmptyParty: Party = {
  id: -1,
  shortcut: '',
  name: '',
};
