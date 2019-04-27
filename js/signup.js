    
  const api = 'https://banktoday.herokuapp.com';
  const form = document.querySelector('#signupForm');
  const message = document.querySelector('.message');
  const alert = document.querySelector('.alert');
  const closeBtn = document.querySelector('#closebtn');

  const validate = () => {
    if(form.firstName.value == "" ) {
      message.innerText = "Please provide your First Name!";
      alert.style.display = 'block';
      form.email.focus() ;
      return false;
    }
    if( form.lastName.value == "" ) {
      message.innerText = "Please provide your Last Name!";
      alert.style.display = 'block';
      form.password.focus() ;
      return false;
    }
    if( form.email.value == "" ) {
      message.innerText = "Please provide your email!";
      alert.style.display = 'block';
      form.password.focus() ;
      return false;
    }
    if( form.password.value == "" ) {
      message.innerText = "Please provide your password!";
      alert.style.display = 'block';
      form.password.focus() ;
      return false;
    }
    if( form.password.value !== form.password2.value) {
      message.innerText = "passwords do not match";
      alert.style.display = 'block';
      form.password.focus() ;
      return false;
    }
  }

  const errorAlert = () => {
    const span = document.querySelector('.closebtn');
    span.parentElement.style.display = 'none';
  }

  const signUp = (e) => {
    e.preventDefault();
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm_password').value;
    const data = {
      firstName,
      lastName,
      email,
      password,
      confirm_password: confirmPassword,
    };
  
    fetch(`${api}/api/v1/auth/signup`, {
      method: 'POST', // or 'PUT'
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
    }).then(res => res.json())
      .then((response) => {
        if (response.status === 422) {
          console.log(21, 'wrong details');
        } else if (response.status === 400) {
          console.log(22, 'email has been taken');
        } else if (response.status === 201) {
          setInterval(() => {
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('email', response.data.email);
            sessionStorage.setItem('id', response.data.id);
            localStorage.setItem('email', response.data.email);
            window.location.replace('./createAccount.html');
          }, 1000);
        }
      })
      .catch(error => console.error('Error:', error));
  };
  form.addEventListener('submit', validate);
  closeBtn.addEventListener('click', errorAlert);
  form.addEventListener('submit', signUp);