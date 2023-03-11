export default class User {
  constructor(
    public readonly id: string,
    public readonly username: string,
    public readonly name: string,
    public readonly addedAt: Date,
  ) { }
}