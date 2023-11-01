<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyDirtyHobby</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="./styles/style.css">
</head>
<body>
<!-- 5 x 4 can be viewed on 1887px in screen width  -->
<div class="videos_container"></div>
<div class="modal">
    <div class="modal_content">
        <form onsubmit="return onRegister()" method="POST" action="./components/php/user_information.php">
            <h1>Registration Modal</h1>
            <div class="input_container">
                <input 
                    required
                    id="username"
                    type="text" 
                    name="username"
                    placeholder="Username"
                >
                <p id="username-error" class="input-error"></p>
            </div>
            <div class="input_container">
                <input 
                    required
                    id="email"
                    type="text" 
                    name="email"
                    placeholder="Email"
                >
                <p id="email-error" class="input-error"></p>
            </div>
            <div class="input_container">
                <input 
                    required
                    id="password"
                    type="password" 
                    name="password"
                    placeholder="Password"
                >
                <p id="password-error" class="input-error"></p>
            </div>
            <input type="submit" value="Register">
            <span onclick="modalClose()" class="close_modal">
                <img src="./assets/svgs/close.svg" alt="close modal button">
            </span>
        </form>
    </div>
</div>

<script src="./components/js/script.js"></script>
<script src="./components/js/modal.js"></script>
</body>
</html>
 