# Media-to-ASCII-Converter
Generates ASCII art, animations and video from uploaded files using HTML &amp; Javascript
<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/c84784f3-6862-4acb-80d7-7744a2df36bf" />


## What is this for?
This code allows for ascii art and ascii animations to be generated on the fly in the browser with decent performance, high detail, and colour accuracy.

### Variations
There are two variations of this project:
1. Fully fledged easy to use accurate website that generates ascii art using an image/video file or animations using a horizontal/vertical frame by frame spritesheet.
    - <b>Demo: https://media.nyeku.xyz/ascii</b>

2. Basic use version intended for embeding on any website. (Video conversion comming soon)
    - <b>Demo: https://media.nyeku.xyz</b> _epilepsy warning._

## Installation:
The Option 1 HTML file requires no setup. Just download the file and open it up. Adapting it to fit your needs is up to you.

This guide will focus on setting up Option 2

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
- If you wish to have just a static ascii image then just set `const frames = ;` to `1` and use a normal image.
  
> [!NOTE]
> The ascii image quality is dependant on source image quality. To resize you can put the pre tag in a div/container.

## Option 1 Screenshots 
<img width="1778" height="954" alt="image" src="https://github.com/user-attachments/assets/7568a8e4-24c2-4d99-b2c3-611d8efe5ec5" />
<img width="1776" height="955" alt="image" src="https://github.com/user-attachments/assets/630d9cd2-9442-4ee9-bd7f-7341a09f54be" />


      
