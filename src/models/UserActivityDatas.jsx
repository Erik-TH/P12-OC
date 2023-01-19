export class UserActivityDatas {
  constructor(data) {
    this._activities = data.sessions.map((session) => {
      // console.log(this.selectDate(session.day));
      return {
        name: this.selectDate(session.day),
        ...session,
      };
    });
  }

  selectDate = (date) => {
    const day = new Date(date);
    return day.getDate().toString();
  };

  get initActivity() {
    return this._activities;
  }
}
