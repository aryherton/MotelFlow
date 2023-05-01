export interface IClasseRequestMongo {
  find(collection: string, key: object): Promise<unknown>;
  findOne(collection: string, key: object): Promise<unknown>;
  insert(collection: string, key: object): Promise<unknown>;
  update(collection: string, key: object, value: object): Promise<void>;
  delete(collection: string, key: object): Promise<void>;
}
