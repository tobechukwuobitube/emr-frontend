export type TeacherType = {
  nationalId: number;
  title: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  teacherNumber: number;
  salary: number;
};

export type StudentType = {
  nationalId: number;
  title: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  teacherNumber: number;
  salary: number;
};

export type AppProps = {
  owner: string;
  dataSource: Array<{}>;
  columns: Array<{}>;
};
