
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    
    if (username === 'admin' && password === 'password') {
        // Redirecting to frontpage.html after login sucess 
        window.location.href = 'frontpage.html';
    } else {
        
        document.getElementById('loginMessage').textContent = 'Invalid username or password. Please try again.';
    }
});



