import RequestMongo from '../db/models/RequestMongo.model';

import { ICashRegister } from '../db/interface/ICashRegister';

export class CashRegisterService {
  static async createCashRegister(
    cashRegister: ICashRegister
  ): Promise<unknown> {
    const cashRegisterCreated = await RequestMongo.insert(
      'cashRegister',
      cashRegister
    );
    return cashRegisterCreated;
  }

  static async getAllCashRegister(): Promise<ICashRegister[]> {
    const cashRegisters = await RequestMongo.find('cashRegister', {});
    return cashRegisters as ICashRegister[];
  }

  static async getCashRegisterById(id: string): Promise<ICashRegister> {
    const cashRegister = await RequestMongo.findOne('cashRegister', {
      _id: id
    });
    return cashRegister as ICashRegister;
  }

  static async updateCashRegister(cashRegister: ICashRegister): Promise<void> {
    await RequestMongo.update(
      'cashRegister',
      { _id: cashRegister._id },
      cashRegister
    );
  }
}
