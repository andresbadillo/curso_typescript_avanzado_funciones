export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string;
  role: ROLES;
}

const andresUser: User = {
  username: 'andres',
  role: ROLES.ADMIN,
}
