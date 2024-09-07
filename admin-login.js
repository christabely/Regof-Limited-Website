document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // This is a basic check. In a real-world scenario, you'd want to use a secure authentication system.
    if (username === 'admin' && password === 'password123') {
        alert('Login successful!');
        // Redirect to an admin dashboard or enable admin features
        window.location.href = 'index.html#admin';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
