export enum DaysOfWeek {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export type Agenda = {
  title: string;
  days: DaysOfWeek[];
};
