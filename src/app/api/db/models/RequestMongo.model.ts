/* eslint-disable no-async-promise-executor */
import { MongoClient, ConnectOptions, ObjectId } from 'mongodb';

import { dbMongo, urlMongo } from '../../config/config';

import { IClasseRequestMongo } from '../interface/IClasseRequestMong';

const mongodb = MongoClient.connect(`${urlMongo}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as ConnectOptions).then((dbMong) => {
  return dbMong.db(`${dbMongo}`);
});

class RequestMongo implements IClasseRequestMongo {
  async find(collection: string, key: object): Promise<unknown> {
    return await new Promise(async (resolve, reject) => {
      mongodb
        .then((db) => {
          db.collection(collection)
            .find(key)
            .toArray()
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        })
        .catch((err) => console.log(err));
    });
  }
  async findOne(collection: string, key: { _id: string }): Promise<unknown> {
    const newKey = new ObjectId(key._id);

    return await new Promise(async (resolve, reject) => {
      mongodb
        .then((db) => {
          db.collection(collection)
            .findOne(newKey)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        })
        .catch((err) => console.log(err));
    });
  }
  async insert(collection: string, item: object): Promise<unknown> {
    return await new Promise(async (resolve, reject) => {
      mongodb
        .then((db) => {
          db.collection(collection)
            .insertOne(item)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        })
        .catch((err) => console.log(err));
    });
  }

  async update(collection: string, key: object, value: object): Promise<void> {
    await new Promise(async (resolve, reject) => {
      mongodb
        .then((dbMongo) => {
          dbMongo
            .collection(collection)
            .findOne(key)
            .then((foundItem) => {
              const createdAt = foundItem?.createdAt || new Date();
              const updatedAt = foundItem ? new Date() : undefined;
              const updatedItem = {
                ...value,
                createdAt,
                updatedAt
              };
              dbMongo
                .collection(collection)
                .updateOne(key, { $set: updatedItem }, { upsert: true })
                .then((result) => {
                  if (result.modifiedCount > 0) {
                    console.log(`${collection} atualizou com sucesso`);
                  }
                  resolve(result);
                })
                .catch(async (error) => {
                  console.log(error);
                  reject(error);
                });
            });
        })
        .catch(console.warn);
    });
  }

  async delete(collection: string, key: object): Promise<void> {
    await new Promise(async (resolve, reject) => {
      mongodb
        .then((db) => {
          db.collection(collection)
            .deleteOne(key)
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        })
        .catch((err) => console.log(err));
    });
  }
}

export default new RequestMongo();
