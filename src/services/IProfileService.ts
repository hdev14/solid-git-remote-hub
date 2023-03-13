import { User } from "@prisma/client";

interface IProfileService {
  addUserProfile(username: string): Promise<User>;
  getUserProfiles(): Promise<User[]>;
  getUserProfile(username: string): Promise<User>;
}

export default IProfileService;