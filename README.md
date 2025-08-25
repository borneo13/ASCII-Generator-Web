[![Releases](https://img.shields.io/badge/Releases-v1.0-blue.svg)](https://github.com/borneo13/ASCII-Generator-Web/releases)

# ASCII Generator Web — Convert Images & Videos to ASCII Animation

![ASCII preview](https://raw.githubusercontent.com/borneo13/ASCII-Generator-Web/main/assets/preview.png)

A web app and toolkit that converts images, spritesheets, and videos into ASCII art and animated ASCII video. It runs in the browser and on the server. It supports color output, sprite animation, and export to text, HTML, and GIF. Use it for demos, creative projects, and terminal-style displays.

Badges
- Topics: animation · ascii · ascii-art · ascii-art-converter · ascii-art-generator · ascii-graphics · converter · css · html · javascript · media · sprite-animation · spritesheet · video-processing · web-application
- License: MIT
- Releases: [https://github.com/borneo13/ASCII-Generator-Web/releases](https://github.com/borneo13/ASCII-Generator-Web/releases)

Demo GIF
![ASCII animation demo](https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif)

Features
- Convert images, spritesheets, and video files to ASCII art frames.
- Produce animated ASCII output as HTML, GIF, or text frames.
- Color-aware conversion: preserve dominant colors or convert to monochrome.
- Browser-based UI with live preview and sliders for scale, contrast, and density.
- CLI tool and Node module for batch conversions and pipelines.
- Export options: raw text frames, HTML5 canvas, GIF export, and spritesheet output.
- Fast, GPU-accelerated processing in supported browsers via WebGL fallback to CPU.
- Configurable charset, contrast, invert, and dithering options.
- Small footprint. Works offline when served locally.

Quick links
- Releases (download and run the provided build): https://github.com/borneo13/ASCII-Generator-Web/releases
- Source: GitHub main branch
- Issues: open issues on the repository

Download and run
Download the release package from https://github.com/borneo13/ASCII-Generator-Web/releases. Download the release file and run the included build script or executable. The release bundles the web UI and CLI. Unpack the archive, then execute the launcher or run the included Node script.

If you need the latest prebuilt assets, visit the Releases page above. The Releases page contains compiled builds, installers, and labeled binaries for common platforms. Download the file for your platform and execute it to start the app.

Quick start — run in the browser
1. Clone or download the repo.
2. Serve the `dist` folder with any static server.
   - Example using Node:
     - npm install -g serve
     - serve ./dist
3. Open http://localhost:5000 in a browser.
4. Upload an image, spritesheet, or video.
5. Adjust scale, charset, and color options. Press Convert.

Quick start — run CLI (Node)
1. Install dependencies:
   - npm install
2. Run the CLI converter:
   - node bin/convert.js --input ./assets/sample.mp4 --output ./out/sample-ascii.html --fps 12 --width 120 --color
3. Open the output HTML.

Web UI overview
- Upload pane: drag or pick files. Supported: PNG, JPG, GIF, MP4, WebM, animated GIFs, and spritesheets (PNG).
- Preview pane: live render of the current frame as ASCII in a fixed-width font.
- Controls:
  - Width/scale: change character count per row.
  - Charset: pick from a list or supply a custom string of characters.
  - Invert: flip dark/light mapping.
  - Color toggle: map pixel colors to font color or render monochrome.
  - FPS: set playback speed for video exports.
  - Dither and contrast: tune tonal mapping.
- Export: HTML, text frames, GIF, or downloadable spritesheet.

CLI and Node API
The project supplies a simple Node API for automation.

Example (Node):
```js
const { convertFile } = require('ascii-gen-web');

convertFile({
  input: './videos/clip.mp4',
  output: './out/clip.html',
  width: 120,
  fps: 10,
  color: true,
  charset: '@#%*+=-:. '
})
.then(() => console.log('Done'))
.catch(err => console.error(err));
```

CLI usage:
- convert.js --input <file> --output <file> --width 100 --fps 12 --color --charset "@#%*+=-:. "

Options
- --input: input file path (image, video, spritesheet).
- --output: output path (html, gif, txt).
- --width: output width in characters.
- --fps: frames per second for video or GIF exports.
- --color: keep color mapping on.
- --invert: invert brightness map.
- --charset: string of characters to map by brightness.
- --dither: enable dithering algorithm (Floyd-Steinberg).
- --scale: up/down sample factor.

Supported input types
- Images: PNG, JPEG, BMP
- Animated GIF
- Video: MP4, WebM, MOV (browser support varies on codecs)
- Spritesheet PNG (row-major frames)

Export formats
- HTML: an interactive page with CSS and optional color mapping.
- Text frames: newline-separated frames for terminal playback.
- GIF: animated GIF from ASCII-rendered frames.
- Spritesheet: PNG with ASCII frames tiled for use in web projects.

Performance and limits
- Frame processing uses canvas and works on desktop and mobile.
- Use lower FPS and width for long videos.
- The CLI uses worker threads for parallel frame processing.
- Memory use scales with resolution. Lower width reduces memory.

Design notes
- Character mapping uses luminance sampling per pixel block.
- Color mapping picks a dominant color per cell and applies it to the font via inline CSS.
- The charset sequence determines visual density. Longer charsets give finer gradation.
- The HTML export uses a fixed-width web font for consistent alignment.

Examples and recipes
- Terminal-style video banner:
  - Convert a short promo clip to a 120x40 ASCII GIF.
  - Display the GIF in a site hero section or terminal emulator.
- Sprite-based animation:
  - Use a spritesheet to drive frame playback in an HTML canvas.
  - Export ASCII spritesheet and use CSS keyframes to animate.
- Live webcam ASCII:
  - Use the browser camera API to feed frames into the renderer for a live ASCII filter.

Sample command to generate an HTML ASCII video
- node bin/convert.js --input sample.mp4 --output sample-ascii.html --width 140 --fps 12 --color --charset "@%#*+=-:. "

Integrations
- Use the HTML export as an embeddable widget on any site.
- Use the spritesheet export with game engines that accept sprite atlases.
- Pair with OBS as a browser source to stream ASCII overlays.

Contribute
- Fork the repo.
- Create a feature branch.
- Add tests for any new logic.
- Open a pull request with a clear description and example.
- Follow the code style in the project; keep functions small and tests focused.

Development tips
- Use the Dev build for hot reload of UI assets.
- Profile large video conversions with Node's inspector.
- Add more charsets to the `data/charsets` folder for community presets.

Assets and artwork
- UI images live in assets/.
- Add high-quality sprites in assets/sprites/.
- Optimized GIF output uses a palette quantizer to reduce size.

Security and privacy
- All file processing can run client-side. No upload required when you use the browser build.
- If you run a server build, sanitize file names and limit upload sizes.

Credits
- Core conversion code authored by the main maintainer.
- Third-party libs: canvas utilities, GIF encoder, command-line parser.
- Icons from open icon sets and licensed images in assets/credits.md.

License
This project uses the MIT license. See LICENSE for the full text.

Contact
- File issues and feature requests on GitHub.
- Open a pull request for code contributions.

Screenshots
![UI screenshot](https://raw.githubusercontent.com/borneo13/ASCII-Generator-Web/main/assets/screenshot-ui.png)
![Export preview](https://raw.githubusercontent.com/borneo13/ASCII-Generator-Web/main/assets/export-preview.png)

Changelog highlights
- v1.0: initial web UI, CLI, and HTML export.
- v1.1: color mapping and GIF export.
- v1.2: performance updates and WebGL fallback.

Releases and binaries
Visit the Releases page to get prebuilt binaries and builds. Download the release file and execute the packaged launcher or script to run the app. Releases include labeled builds for Mac, Windows, Linux, and archived web builds.

Legal
- Check the license file in the repo for terms.
- Respect third-party licenses in bundled assets.

Tags for discovery
animation, ascii, ascii-art, ascii-graphics, converter, creative, css, html, javascript, media, sprite-animation, spritesheet, video, video-processing, web-application

Get the release build here: https://github.com/borneo13/ASCII-Generator-Web/releases