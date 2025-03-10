
function Login() {
	return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Document</title>
</head>
<style>
    form {
      width: 400px;
      padding: 10px;
      border: 1px solid #bbb;
      border-radius: 5px;
      box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
      margin: 100px auto;
    }
    button{
      margin: 0 auto;

    }
    h1{
      text-align: center;
    }
    a{
      text-decoration: none;
      color: #333;
      text-align: center;
      margin: 10px auto;
      padding: 10px 52px;
    }
  </style>
<body class="container">
    <form id="loginForm">
        <h1>Login</h1>
        <div class="mb-3">
            <label for="">Email</label>
            <input type="text" class="form-control" placeholder="Email">
        </div>
        <div class="mb-3">
            <label for="">Password</label>
            <input type="password" class="form-control" placeholder="Password">
        </div>
       
        <button class="btn btn-primary" style="width: 100%; margin-top: 10px;">Login</button>
        <div>
          <a href="/register"><p>I don't have account? Register now</p></a>
        </div>
    </form>
  
</body>
</html>
    `
}
export default Login;