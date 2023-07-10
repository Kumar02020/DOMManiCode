// Function to fetch data from the JSON Placeholder API
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const userList = document.getElementById('user-list');
        userList.innerHTML = '';

        // Loop through the data and display it
        data.forEach(user => {
          const userElement = document.createElement('div');
          userElement.innerHTML = `
            <h2>${user.name}</h2>
            <p>${user.email}</p>
          `;
          userList.appendChild(userElement);
        });
      })
      .catch(error => console.log(error));
  }

  // Call the fetchData function
  fetchData();