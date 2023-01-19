export class UserAverageSessionDatas {
  constructor(averageSessions) {
    this._averageSessions = averageSessions.sessions;
  }

  get sessions() {
    return this._averageSessions;
  }

}
