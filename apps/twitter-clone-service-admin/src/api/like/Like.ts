import { Tweet } from "../tweet/Tweet";
import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  tweet?: Tweet | null;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  user?: User | null;
};
