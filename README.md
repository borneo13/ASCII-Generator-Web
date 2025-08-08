# HTML-Ascii-Generator
Generates ascii art and animations using images &amp; sprite sheets in a browser using HTML &amp; Javascript
<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/c84784f3-6862-4acb-80d7-7744a2df36bf" />


## What is this for?
This code allows for ascii art and ascii animations to be generated on the fly in the browser with decent performance, high detail, and colour accuracy.

### Variations
There are two variations of this project:
1. Fully fledged easy to use accurate website that generates ascii art using a static image or animations using a horizontal/vertical frame by frame spritesheet.
    - <b>Demo: https://media.nyeku.xyz/ascii</b>

3. Basic use version intended for embeding on any website.
    - <b>Demo: https://media.nyeku.xyz</b> _epilepsy warning._

## Installation:
The Option 1 HTML file requires no setup. Just download the file and open it up. Adapting it to fit your needs is up to you.

This guide will focus on Option 2

- Within you html file embed this code:
  ```html
  <html>
    <head>
      <style>
        body{background-color:black;} /* optional */
  
        #ascii {font-size: 3px; line-height: 70%;}
        #sprite { display: none; }
        #container { position: relative; z-index: 1;}
      </style>
    </head>
  
  <img src="./yourImage.png" id="sprite" />
      <div id="container">
        <pre id="ascii" style="color: #bebebe;"></pre>
      </div>
      
    <script src="./ascii.js"></script>
  
  </html>
  ```
- Move the `ascii.js` file into your site root
- Generate a sprite sheet, this can be done from a gif on an online converter such as https://ezgif.com/gif-to-sprite . I suggest keeping the resolution something such as 50x50, 100x100, etc per tile and keep it set to `stack horizontal`.
- Once you have your sprite move it into your web root and change the html img tag acordingly.
- Open up ascii.js and look for:
  ```js
  const frames = 8;
  ```
  Edit the fps to fit the fps of your sprite sheet
  <br> In my case ill set it to 8
  <img width="768" height="96" alt="yourImage" src="https://github.com/user-attachments/assets/1af0e143-df6e-43b0-ad47-bbfca4cd879b" />
  Save the file and proceed to open `index.html`

- You should now see an ascii animation based on your spritesheet.
  <br> It is up to you on how you want to implement this within your sites such as https://media.nyeku.xyz/ .

- <b>Common Errors:</b>
    - `yourImage.png' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, chrome-extension, chrome-untrusted, data, http, https, isolated-app.`
    - `Uncaught SecurityError: Failed to execute 'getImageData' on 'CanvasRenderingContext2D': The canvas has been tainted by cross-origin data.`
    <br><br> These errors usually occur when you're not running         these files on a web server.

### Well Done!
- You have now setup an ascii animation.
- If you wish to have just a static ascii image then just set `const frames = ;` to `1` and use a normal image.<img width="784" height="831" alt="Screenshot 2025-08-08 at 07 45 01" src="https://github.com/user-attachments/assets/efa331dc-7ad8-47a5-b082-0295862f3b73" />

> [!NOTE]
> The ascii image quality is dependant on source image quality. To resize you can put the pre tag in a div/container.

## Option 1 Showcase 
<img width="3588" height="1904" alt="image" src="https://github.com/user-attachments/assets/8d26f0c7-dffc-4538-9b1e-e417af8efd2a" />
<br>
<img width="1573" height="921" alt="image" src="https://github.com/user-attachments/assets/067f12d6-64c5-42f2-bc04-8eaa51450ab9" />


      
