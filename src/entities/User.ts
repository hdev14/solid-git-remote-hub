export default class User {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly username: string,
    readonly addedAt: Date,
  ) { }
}