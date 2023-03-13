export default class ProfileNotFoundError extends Error {
  constructor() {
    super('Profile not found');
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, ProfileNotFoundError.prototype);
  }
}