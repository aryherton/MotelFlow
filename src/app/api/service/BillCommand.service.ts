import RequestMongo from '../db/models/RequestMongo.model';

import { IBillCommand } from '../db/interface/IBillCommand';

export class BillCommandService {
  static async createBillCommand(billCommand: IBillCommand): Promise<unknown> {
    const billCommandCreated = await RequestMongo.insert(
      'billCommands',
      billCommand
    );
    return billCommandCreated;
  }

  static async getAllBillCommand(): Promise<IBillCommand[]> {
    const billCommands = await RequestMongo.find('billCommands', {});
    return billCommands as IBillCommand[];
  }

  static async getBillCommandById(id: string): Promise<IBillCommand> {
    const billCommand = await RequestMongo.findOne('billCommands', { _id: id });
    return billCommand as IBillCommand;
  }

  static async updateBillCommand(billCommand: IBillCommand): Promise<void> {
    await RequestMongo.update(
      'billCommands',
      { _id: billCommand._id },
      billCommand
    );
  }
}
