const api = 'https://banktoday.herokuapp.com';
const token = sessionStorage.getItem('token');
const email = sessionStorage.getItem('email');
const userId = sessionStorage.getItem('id');
const imageURL = localStorage.getItem('imageURL');


const accountName = document.querySelector('#accountName');
const userEmail = document.querySelector('#email');
const accountBalance = document.querySelector('#accountBalance');
const accountNumber = document.querySelector('#account-number');
const accountStatus = document.querySelector('#status');
const drpDown = document.querySelector('.dropdown-content');
const profileImageForm = document.getElementById('profileImageForm');
const changePasswordForm = document.getElementById('changePasswordForm');
const profilePic = document.querySelector('#profilePic');
const buttonLoader = document.querySelector('.button-loader');
const buttonLoader2 = document.querySelector('.button-loader2');
const uploadBtn = document.querySelector('#imageConfirm');
const changePasswordBtn = document.querySelector('#password-confirm');
const alert = document.querySelector('.alert');
const successMessage = document.querySelector('.successMessage');
const message = document.querySelector('.message');
const closeBtn = document.querySelector('.closebtn');


// Get the modal
const modal = document.getElementById('myModal');
const modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
const btn = document.getElementById('upload-picture');
const btn2 = document.getElementById('change-password');

// Get the button that closes the modal
const closeImage = document.querySelector('#close-image');
const closePassword = document.querySelector('#close-password');

// function that closes the modal
const closeModal = () => {
  modal.style.display = 'none';
  modal2.style.display = 'none';
};

// close the alert message
const errorAlert = () => {
  alert.classList.add('hide');
  successMessage.classList.add('hide');
};

// Get the <span> element that closes the modal
const spansNode = document.querySelectorAll('.close');
const spans = [...spansNode];
spans.map((span) => {
  span.onclick = () => {
    modal.style.display = 'none';
    modal2.style.display = 'none';
  };
  return true;
});


// When the user clicks on the button, open the modal
const openStatusModal = () => {
  modal.style.display = 'block';
};
const openDeleteModal = () => {
  modal2.style.display = 'block';
};


btn.addEventListener('click', openStatusModal);
btn2.addEventListener('click', openDeleteModal);
closeImage.addEventListener('click', closeModal);
closePassword.addEventListener('click', closeModal);

// Show Message
const showMessage = (errors) => {
  if (Array.isArray(errors)) {
    alert.classList.remove('hide');
    alert.style.backgroundColor = '#f44336';
    while (message.firstChild) {
      message.removeChild(message.firstChild);
    }
    return errors.map((error) => {
      const item = document.createElement('li');
      const newContent = document.createTextNode(`${error}`);
      item.appendChild(newContent);
      message.appendChild(item);
      return true;
    });
  }
  alert.classList.remove('hide');
  alert.style.backgroundColor = '#f44336';
  while (message.firstChild) {
    message.removeChild(message.firstChild);
  }
  const item = document.createElement('li');
  const newContent = document.createTextNode(`${errors}`);
  item.appendChild(newContent);
  message.appendChild(item);
};


if (!token) {
  window.location.replace('./signin.html');
}
window.onload = () => {
  profilePic.src = imageURL;
  let foundAccountNumber;
  const getUserDetails = () => {
    fetch(`${api}/api/v1/user/${userId}`, {
      method: 'GET', // or 'PUT'
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
    }).then(res => res.json())
      .then((response) => {
        if (response.status === 403 || response.status === 500) {
          window.location.replace('./signin.html');
        }
        const { firstName, lastName } = response.data.user;
        accountName.textContent = `${firstName} ${lastName}`;

        userEmail.textContent = `Email: ${email}`;

        accountStatus
          .textContent = `Status: ${response.data[0].status.toUpperCase()}`;

        accountBalance.textContent = response.data[0].balance;

        foundAccountNumber = response.data[0].account_number;
        accountNumber
          .textContent = `Account Number: ${response.data[0].account_number}`;
        const { data } = response;

        // deletting the user property from the response data
        delete data.user;
        const accountsNumbers = Object.values(data);
        accountsNumbers.forEach((account, index) => {
          sessionStorage
            .setItem(`accountNumber${index + 1}`, account.account_number);
        });

        const accounts = Object.values(data);
        accounts.map((account) => {
          const item = document.createElement('a');
          const newContent = document
            .createTextNode(`${account.account_number}`);
          item.appendChild(newContent);
          drpDown.appendChild(item);
          return true;
        });
      })
      .catch(err => err);
  };
  const getUserTransactions = () => {
    setTimeout(() => {
      fetch(`${api}/api/v1/accounts/${foundAccountNumber}/transactions`, {
        method: 'GET', // or 'PUT'
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
      }).then(res => res.json())
        .then((response) => {
          if (response.status === 403 || response.status === 500) {
            window.location.replace('./signin.html');
          }
        })
        .catch(err => err);
    }, 5000);
  };
  getUserDetails();
  getUserTransactions();
};

const logoutButton = document.querySelector('#logout');
const logout = () => {
  sessionStorage.clear();
  localStorage.clear();
};

const uploadPic = (e) => {
  e.preventDefault();
  uploadBtn.classList.add('hide');
  buttonLoader.classList.add('loader');
  const profileImage = document.querySelector('#profileImage').files[0];

  const data = new FormData();
  data.append('profileImage', profileImage);

  fetch(`${api}/api/v1/user/upload`, {
    method: 'PATCH', // or 'PUT'
    mode: 'cors',
    cache: 'no-cache',
    body: data,
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    redirect: 'follow',
  }).then(res => res.json())
    .then((response) => {
      buttonLoader.classList.remove('loader');
      uploadBtn.classList.remove('hide');
      if (response.status === 403) {
        window.location.replace('./signin.html');
      }
      if (response.status === 200) {
        profilePic.src = response.data.imageURL;
        localStorage.setItem('imageURL', response.data.imageURL);
        closeModal();
      }
    })
    .catch(err => err);
};

const changePassword = (e) => {
  e.preventDefault();
  changePasswordBtn.classList.add('hide');
  buttonLoader2.classList.add('loader');

  const oldPassword = document.querySelector('#oldPassword').value;
  const password = document.querySelector('#newPassword').value;
  const confirmPassword = document.querySelector('#confirmPassword').value;
  const data = {
    oldPassword,
    password,
    confirmPassword
  };

  fetch(`${api}/api/v1/auth/password`, {
    method: 'PATCH', // or 'PUT'
    mode: 'cors',
    cache: 'no-cache',
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
  }).then(res => res.json())
    .then((response) => {
      buttonLoader2.classList.remove('loader');
      changePasswordBtn.classList.remove('hide');
      if (response.status === 403) {
        window.location.replace('./signin.html');
      }

      if (response.status === 422 || response.status === 400) {
        showMessage(response.error);
      }

      if (response.status === 200) {
        changePasswordForm.reset();
        closeModal();
        successMessage.classList.remove('hide');
        while (message.firstChild) {
          message.removeChild(message.firstChild);
        }
        const item = document.createElement('li');
        const newContent = document.createTextNode(`${response.data}`);
        item.appendChild(newContent);
        message.appendChild(item);
      }
    })
    .catch(err => err);
};


logoutButton.addEventListener('click', logout);
profileImageForm.addEventListener('submit', uploadPic);
closeBtn.addEventListener('click', errorAlert);
changePasswordForm.addEventListener('submit', changePassword);
