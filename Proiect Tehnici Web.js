localStorage.setItem("symbols", "0");
window.onload = function (){
    const a = document.querySelector("#RightsReserved p");
    a.style.color = "red";
    var Counter = 0;
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

    
    positionDivRandomly();

    
    document.body.appendChild(clickableDiv);

   
    clickableDiv.onclick = (event) => {
      
        let currentValue = parseInt(localStorage.getItem("Counter"), 10);
        currentValue += 1;
        localStorage.setItem("Counter", currentValue.toString());

     
        updateFooterCounter();

        positionDivRandomly();

        event.stopPropagation();
    };

     
        function startRainbowEffect(event) {
            event.stopPropagation(); 
            const liElement = event.currentTarget; 
            const originalColor = window.getComputedStyle(liElement).backgroundColor; 
            let intervalId; 
    
       
            const colors = ["rgb(138,75,43)", "rgb(103,85,0)", "rgb(100,74,68)", "rgb(105,42,42)", "rgb(90,0,32)", "rgb(89,8,8)", "rgb(85,38,14)" ];
            let colorIndex = 0;
    

            intervalId = setInterval(() => {
                liElement.style.backgroundColor = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length;
            }, 100);
    
        
            setTimeout(() => {
                clearInterval(intervalId);
                liElement.style.backgroundColor = originalColor; 

            }, 3500);
        }
    

        const menuItems = document.querySelectorAll("div.News img");
        menuItems.forEach((img) => {
            img.addEventListener("click", startRainbowEffect);
        });    

    
    
        const form = document.getElementById("registrationForm");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
        
        
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 
        
            let isValid = true;
        
        
             
                const email = document.getElementById("email");
                const emailError = document.getElementById("emailError");
                if (!emailRegex.test(email.value)) {
                    isValid = false;
                    emailError.textContent = "Adresa de email este invalidă.";
                } else {
                    emailError.textContent = "";
                }
        
           
                const terms = document.getElementById("terms");
                const termsError = document.getElementById("termsError");
                if (!terms.checked) {
                    isValid = false;
                    termsError.textContent = "Trebuie să acceptați termenii și condițiile.";
                } else {
                    termsError.textContent = "";
                }
      
                if (isValid) {
                    alert("Formular trimis cu succes!");
                }
            });
        
        

                const loginForm = document.getElementById("loginForm");
                const logoutSection = document.getElementById("logoutSection");
                const authSection = document.getElementById("authSection");
                const userWelcome = document.getElementById("userWelcome");
            
         
                if (localStorage.getItem("loggedInUser")) {
                    const loggedInUser = localStorage.getItem("loggedInUser");
                    userWelcome.textContent = loggedInUser;
                    authSection.style.display = "none";
                    logoutSection.style.display = "block";
                }
            
            
                loginForm.addEventListener("submit", function (event) {
                    event.preventDefault();
            
                    const username = document.getElementById("username").value;
                    const password = document.getElementById("password").value;
            
             
                    const xhr = new XMLHttpRequest();
                    xhr.open("GET", "users.json", true);
            
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            const users = JSON.parse(xhr.responseText);
            
                            const user = users.find(
                                u => u.username === username && u.password === password
                            );
            
                            if (user) {
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
            
        
                document.getElementById("logoutButton").addEventListener("click", function () {
                    localStorage.removeItem("loggedInUser");
                    authSection.style.display = "flex";
                    logoutSection.style.display = "none";

                });
            
                var c = document.getElementById("Canvas");
                var ctx = c.getContext("2d");
                ctx.lineWidth = 5;
                ctx.strokeStyle = "red";
                ctx.moveTo(100, 0);
                ctx.lineTo(100, 200);
                ctx.lineTo(50,110);
                ctx.lineTo(100, 200);
                ctx.lineTo(150, 110);
                ctx.moveTo(10,0);
                ctx.lineTo(10, 160);
                ctx.moveTo(10,200);
                ctx.lineTo(10,190);
                ctx.moveTo(190,0);
                ctx.lineTo(190, 160);
                ctx.moveTo(190,200);
                ctx.lineTo(190,190);
                ctx.stroke();
                


    
}
