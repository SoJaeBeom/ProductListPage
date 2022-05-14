export interface IItemType extends IClubType, ILeadersType, IPartnersType {
  club: IClubType;
  price: number;
  leaders?: ILeadersType[];
  partners?: IPartnersType[];
  createdAt: string;
}

export interface IClubType extends IMeetingsType {
  id: string;
  name: string;
  type: string;
  place: string;
  coverUrl: string;
  meetings: IMeetingsType[];
  description: string;
}

export interface IMeetingsType {
  order: number;
  endedAt: string;
  startedAt: string;
}

export interface ILeadersType {
  name: string;
}

export interface IPartnersType {
  name: string;
}
