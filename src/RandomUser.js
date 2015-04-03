export class RandomUser {
  getUser() {
    var url = 'http://api.randomuser.me';
    return axios.get(url).then(response => response.data.results[0].user);
  }
}
