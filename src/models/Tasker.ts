export type RawTasker = {
  [key: string]: {
    Name: string;
  };
};

export type Tasker = {
  id: number;
  name: string;
};

export const EmptyTasker: Tasker = {
  id: -1,
  name: '',
};
