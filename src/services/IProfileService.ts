interface IProfileService {
  addUserProfile(username: string): Promise<any>;
  getUserProfiles(): Promise<any>;
  getUserProfile(username: string): Promise<any>;
}

export default IProfileService;