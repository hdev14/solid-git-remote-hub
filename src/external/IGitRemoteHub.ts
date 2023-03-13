
export type UserProfile = {
  id: string;
  name: string;
  username: string;
}

export type UserRepo = {
  name: string;
  link: string;
}

interface IGitRemoteHub {
  getProfile(criteria: string): Promise<UserProfile | null>;
  getProfileRepos(criteria: string): Promise<UserRepo[]>;
}

export default IGitRemoteHub;