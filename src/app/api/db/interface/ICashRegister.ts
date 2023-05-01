export interface ICashRegister {
  _id?: string;
  valueStart?: number;
  valueEnd?: number;
  billCommands?: string[];
  status?: string;
  dateOpen?: Date;
  dateClose?: Date;
  responsibleUserOpen?: string;
  responsibleUserClose?: string;
  employeeResponsible?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
