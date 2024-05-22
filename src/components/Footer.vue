<template>
    <div class="footer">
        <div class="footer-texts">
          <span class="span-title">Made by:</span> 
          <span>Russell Shane Navarez</span>
        </div>
        <div class="footer-icons">
            <div class="icon">
                <a href="https://www.linkedin.com/in/russell-shane-navarez/"><img src="../assets/linkedin.png" alt="LinkedIn"></a>
            </div>
            <div class="icon">
                <a href="https://github.com/RussellShaneNavarez"><img src="../assets/github.png" alt="GitHub"></a>
            </div>
            <div class="icon">
                <a href="https://www.instagram.com/russnvrz/"><img src="../assets/instagram.png" alt="Instagram"></a>
            </div>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      name: 'Footer',
      // component logic
    }
    </script>
    
    <style>
        img {
            width: 2.5vw;
        }
    
        .span-title {
            font-weight: bold
        }
    
        .footer-texts {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.25vw;
            padding: 2vw 0;
        }
    
        .footer-icons {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1vw;
        }
    
        @media (max-width: 600px) {
            img {
                width: 8vw;
            }
    
            .footer-texts {
                padding-top: 10vw;
          
                flex-direction: column;
            }
        }
    
    </style>