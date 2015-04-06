var http = require('http');
var faker = require('faker');

var port = process.env.PORT || 3000;
var ipAddress = process.env.IP_ADDRESS || '127.0.0.1';

http.createServer(function(req, res) {
  wait(500);
  sendJsonResponse(res, getRandomUserApiUser());
}).listen(port, ipAddress);
console.log('Server running at ' + ipAddress + ':' + port);

function wait(ms) {
  var start = new Date();
  while (new Date() - start < ms) {
  }
}

function getRandomUserApiUser() {
  return {
    results: [
      {user: getRandomUser()}
    ]
  };
}

function getRandomUser() {
  return {
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    },
    username: faker.internet.userName(),
    email: faker.internet.email(),
    picture: {
      medium: Math.random() > .5 ? 'fred.png' : 'ethel.png'
    },
    cell: faker.phone.phoneNumber(),
    location: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode()
    },
    dob: (Math.random() * 515576000) + 94672800
  };
}

function sendJsonResponse(res, data) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}
