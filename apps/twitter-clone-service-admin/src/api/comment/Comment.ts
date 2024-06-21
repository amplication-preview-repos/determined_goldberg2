import { Tweet } from "../tweet/Tweet";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  tweet?: Tweet | null;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  user?: User | null;
};
