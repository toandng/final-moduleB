
function Register() {

	return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Register</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                form {
                    width: 400px;
                    padding: 20px;
                    border: 1px solid #bbb;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    margin: 100px auto;
                    background: #fff;
                }
                button {
                    width: 100%;
                }
                h1 {
                    text-align: center;
                }
                .form-text {
                    text-align: center;
                    margin-top: 10px;
                }
                .form-text a {
                    text-decoration: none;
                    color: #007bff;
                }
            </style>
            
        </head>
        <body class="container">
            <form id="registerForm">
                <h1>Register</h1>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" id="password" name="password" class="form-control" placeholder="Password" required>
                </div>
                <button type="submit" class="btn btn-primary">Register now</button>
                <p class="form-text">Already have an account? <a href="/login">Login</a></p>
            </form>


        </body>
        </html>
    `;
}
export default Register;
