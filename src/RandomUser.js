export class RandomUser {
  getUser() {
    var url = 'http://api.randomuser.me';
    //var url = 'http://localhost:3000'; // just in case there's no internet...
    return axios.get(url).then(response => response.data.results[0].user);
  }
}
