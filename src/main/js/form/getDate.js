
export default class GetDate {
  static getDate() {
    const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    const date = new Date();
    const mins = `${(date.getMinutes()<10?'0':'')}` + `${date.getMinutes()}`;
    const today = `${date.getDate()} ${months[date.getMonth()]} at ${date.getHours()}:${mins}`;

    return today;
  }
}
