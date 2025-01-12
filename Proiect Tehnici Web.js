window.onload = function (){
    const a = document.querySelector("#RightsReserved p");
    a.style.color = "red";
    var Counter = 0;
    
    localStorage.setItem("Counter", "0");
    
    let footerCounter = document.querySelector("#Counter p");
    
    updateFooterCounter();

    function updateFooterCounter () {
        let counterValue = localStorage.getItem("Counter");
        footerCounter.textContent = `Symbols found: ${counterValue}`;
    };   
    

    const clickableDiv = document.createElement("div");
    clickableDiv.id = "randomDiv";
    clickableDiv.style.width = "100px";
    clickableDiv.style.height = "140px";
    clickableDiv.style.backgroundSize = "cover";
    clickableDiv.style.backgroundImage = "url('./Poze\ Sigle/Symbol.png')";
    clickableDiv.style.backgroundPosition = "center";
    clickableDiv.style.position = "absolute";
    clickableDiv.style.cursor = "pointer";
    clickableDiv.style.zIndex = "9999";


    const positionDivRandomly = () => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); 
        const randomY = Math.floor(Math.random() * (document.documentElement.scrollHeight - 100));
        clickableDiv.style.left = `${randomX}px`;
        clickableDiv.style.top = `${randomY}px`;
    };

    // Position the div initially
    positionDivRandomly();

    // Add the div to the body
    document.body.appendChild(clickableDiv);

    // Add click event listener to the div
    clickableDiv.onclick = (event) => {
        // Increment the value in localStorage
        let currentValue = parseInt(localStorage.getItem("Counter"), 10);
        currentValue += 1;
        localStorage.setItem("Counter", currentValue.toString());

        // Update the footer counter
        updateFooterCounter();

        // Reposition the div randomly
        positionDivRandomly();

        event.stopPropagation();
    };

        // Function to start the rainbow effect on text
        function startRainbowEffect(event) {
            event.stopPropagation(); // Prevent the event from bubbling up further
            const liElement = event.currentTarget; // The clicked li element
            const originalColor = window.getComputedStyle(liElement).backgroundColor; // Access current styles
            let intervalId; // To store the interval ID
    
            // Rainbow colors array
            const colors = ["rgb(138,75,43)", "rgb(103,85,0)", "rgb(100,74,68)", "rgb(105,42,42)", "rgb(90,0,32)", "rgb(89,8,8)", "rgb(85,38,14)" ];
            let colorIndex = 0;
    
            // Start rapidly changing the text color
            intervalId = setInterval(() => {
                liElement.style.backgroundColor = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length; // Cycle through the colors
            }, 100); // Change color every 100ms
    
            // Stop the effect after 5-6 seconds
            setTimeout(() => {
                clearInterval(intervalId);
                liElement.style.backgroundColor = originalColor; // Reset to original text color

            }, 3500); // 5.5 seconds
        }
    
        // Add click event listener to all li elements inside the ul with class "meniu"
        const menuItems = document.querySelectorAll("div.News img");
        menuItems.forEach((img) => {
            img.addEventListener("click", startRainbowEffect);
        });    

    
    
        const form = document.getElementById("registrationForm");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format
            
        
        
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
        
            let isValid = true;
        
        
                // Validate email
                const email = document.getElementById("email");
                const emailError = document.getElementById("emailError");
                if (!emailRegex.test(email.value)) {
                    isValid = false;
                    emailError.textContent = "Adresa de email este invalidă.";
                } else {
                    emailError.textContent = "";
                }
        
                // Validate terms
                const terms = document.getElementById("terms");
                const termsError = document.getElementById("termsError");
                if (!terms.checked) {
                    isValid = false;
                    termsError.textContent = "Trebuie să acceptați termenii și condițiile.";
                } else {
                    termsError.textContent = "";
                }
        
                // If all validations pass
                if (isValid) {
                    alert("Formular trimis cu succes!");
                }
            });
        
        

                const loginForm = document.getElementById("loginForm");
                const logoutSection = document.getElementById("logoutSection");
                const authSection = document.getElementById("authSection");
                const userWelcome = document.getElementById("userWelcome");
            
                // Verifică dacă utilizatorul este deja logat
                if (localStorage.getItem("loggedInUser")) {
                    const loggedInUser = localStorage.getItem("loggedInUser");
                    userWelcome.textContent = loggedInUser;
                    authSection.style.display = "none";
                    logoutSection.style.display = "block";
                }
            
                // Login
                loginForm.addEventListener("submit", function (event) {
                    event.preventDefault();
            
                    const username = document.getElementById("username").value;
                    const password = document.getElementById("password").value;
            
                    // Cerere AJAX pentru validare
                    const xhr = new XMLHttpRequest();
                    xhr.open("GET", "users.json", true);
            
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            const users = JSON.parse(xhr.responseText);
            
                            const user = users.find(
                                u => u.username === username && u.password === password
                            );
            
                            if (user) {
                                // Login reușit
                                localStorage.setItem("loggedInUser", user.username);
                                userWelcome.textContent = user.username;
                                authSection.style.display = "none";
                                logoutSection.style.display = "flex";
                            } else {
                                alert("Utilizator sau parolă greșită!");
                            }
                        } else {
                            console.error("Eroare la încărcarea fișierului JSON.");
                        }
                    };
            
                    xhr.onerror = function () {
                        console.error("Eroare de rețea.");
                    };
            
                    xhr.send();
                });
            
                // Logout
                document.getElementById("logoutButton").addEventListener("click", function () {
                    localStorage.removeItem("loggedInUser");
                    authSection.style.display = "flex";
                    logoutSection.style.display = "none";

                });
            
            
            


    
}
