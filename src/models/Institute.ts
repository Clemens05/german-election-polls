export type RawInstitute = {
  [key: string]: {
    Name: string;
  };
};

export type Institute = {
  id: number;
  name: string;
};

export const EmptyInstitute: Institute = {
  id: -1,
  name: '',
};
