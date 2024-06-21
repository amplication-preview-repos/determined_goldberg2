import { User } from "../user/User";

export type Follow = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
