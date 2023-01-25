/**
 * Represents the datas of an app User
 *
 */
export class UserDatas {
  /**
   *
   * @param {string} firstName user's firstname
   * @param {string} lastName user's lastname
   * @param {number} age user's age
   * @param {number} score user's score
   * @param {number} calorie user's calorie count
   * @param {number} protein user's protein count
   * @param {number} carbohydrate user's carbohydrate count
   * @param {number} lipid user's lipid count
   */

  constructor(
    firstName,
    lastName,
    age,
    score,
    calorie,
    protein,
    carbohydrate,
    lipid
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._score = score;
    this._calorie = calorie;
    this._protein = protein;
    this._carbohydrate = carbohydrate;
    this._lipid = lipid;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  get score() {
    return this._score;
  }

  get arrayOfPercentScore() {
    return this.calculateScore();
  }

  /**
   * Used to calculate the user's score in percentqge from its score data
   * @property {function} calculateScore calculate and print the score in percentage
   * @returns {(number|array)}
   */
  calculateScore() {
    return [
      { name: "score", value: this.score * 100 },
      { name: "total", value: 100 - this.score * 100 }, //second part of the PieChart - in transparent
    ];
  }

  get calorie() {
    return this._calorie;
  }
  get protein() {
    return this._protein;
  }
  get carbohydrate() {
    return this._carbohydrate;
  }
  get lipid() {
    return this._lipid;
  }
}
