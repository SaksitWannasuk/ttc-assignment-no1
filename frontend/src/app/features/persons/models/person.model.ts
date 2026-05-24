export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    birthDate: string;
    isActive: boolean;
    createdTime?: string;
    updatedTime?: string;
}

export interface CreatePersonRequest {
  firstName: string;
  lastName: string;
  birthDate: Date;
  address: string;
}