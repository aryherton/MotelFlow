import RequestMongo from '../db/models/RequestMongo.model';

import { IBedroom } from '../db/interface/IBedroom';

export class BedroomService {
  static async createBedroom(bedroom: IBedroom): Promise<unknown> {
    const bedroomCreated = await RequestMongo.insert('bedroom', bedroom);
    return bedroomCreated;
  }

  static async getAllBedroom(): Promise<IBedroom[]> {
    const bedrooms = await RequestMongo.find('bedroom', {});
    return bedrooms as IBedroom[];
  }

  static async getBedroomById(id: string): Promise<IBedroom> {
    const bedroom = await RequestMongo.findOne('bedroom', { _id: id });
    return bedroom as IBedroom;
  }

  static async updateBedroom(bedroom: IBedroom): Promise<void> {
    await RequestMongo.update('bedroom', { _id: bedroom._id }, bedroom);
  }
}
