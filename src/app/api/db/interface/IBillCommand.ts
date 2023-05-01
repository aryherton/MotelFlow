interface IConsumedProduct {
  _id: string;
  name: string;
  quantity: number;
  priceSale: number;
  total: number;
}

export interface IBillCommand {
  _id?: string;
  bedroomID?: string;
  responsibleUserOpen?: string;
  responsibleUserClose?: string;
  dateOpen?: Date;
  dateClose?: Date;
  totalTime?: number;
  priceTotalTime?: number;
  products?: IConsumedProduct[];
  total?: number;
  status?: string;
  typePayment?: string;
  amountReceived?: number;
  change?: number;
}
