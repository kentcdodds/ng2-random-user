// This is just stuff to copy/paste during the presentation
// because nobody wants to watch someone type out data...

var userCardTemplate = `
    <div class="user-card">
      <div class="user-avatar-container">
        <img src="fred.png" alt="User Avatar"/>
      </div>
      <div class="user-properties">
        <div>
          <strong>Name:</strong> Fred Mertz
        </div>
        <div>
          <strong>Username:</strong> TheFredMertz
        </div>
        <div>
          <strong>Email:</strong> freddie@aol.com
        </div>
      </div>
    </div>
  `;

var fred = {
  name: {
    first: 'Fred',
    last: 'Mertz'
  },
  username: 'TheFredMertz',
  email: 'freddie@aol.com',
  picture: {
    medium: 'fred.png'
  }
};

var ethel = {
  name: {
    first: 'Ethel',
    last: 'Mertz'
  },
  username: 'maegrl',
  email: 'maebebaby@aol.com',
  picture: {
    medium: 'ethel.png'
  }
};

var buttonTemplate = `
    <div class="new-user-button">
      <button class="ru-button --primary" autofocus>
        <i class="fa fa-user"></i>
        Get New User
      </button>
    </div>
`;

// Random User API URL
var url = 'http://api.randomuser.me';

// just in case there's no internet...
var url = 'http://localhost:3000';





// copy this only if you're running out of time...
this.properties = [
  {
    title: 'Name',
    getVal: user => upperWords(`${user.name.first} ${user.name.last}`)
  },
  {
    title: 'Username',
    getVal: user => user.username
  },
  {
    title: 'Email',
    getVal: user => user.email
  },
  {
    title: 'Address',
    getVal: user => (
      upperWords(`${user.location.street}, ${user.location.city}, ${user.location.state} ${user.location.zip}`)
    )
  },
  {
    title: 'Birthday',
    getVal: user => moment(user.dob * 1000).format('MMMM Do, YYYY')
  },
  {
    title: 'Cell Phone Number',
    getVal: user => user.cell
  }
];

// Function to make the names/addresses be upper case
// use only if there's time...
function upperWords(string) {
  return string.split(' ').map(word => {
    return word.substr(0, 1).toUpperCase() + word.substr(1);
  }).join(' ');
}

