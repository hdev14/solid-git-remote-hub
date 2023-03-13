export default class GitRemoteHubError extends Error {
  constructor() {
    super('Erro ao consultar o hub.');
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, GitRemoteHubError.prototype);
  }
}