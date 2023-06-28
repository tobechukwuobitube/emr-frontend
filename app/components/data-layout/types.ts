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

export type TeacherAppProps = {
  tabKey: string;
  success: boolean;
  setSuccess: (args: boolean) => void;
};

export type StudentAppProps = {
  tabKey: string;
  success: boolean;
  setSuccess: (args: boolean) => void;
};

export type AppProps = {
  owner: string;
  dataSource: Array<{}>;
  columns: Array<{}>;
  tabKey: string;
  success: boolean;
  setSuccess: (args: boolean) => void;
};
