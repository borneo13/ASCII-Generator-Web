const sprite = document.getElementById("sprite");
const ascii = document.getElementById("ascii");

// Safety net: set crossOrigin in JS before image request
sprite.crossOrigin = "anonymous";

// Define the worker code as a string
const workerCode = `
  const getChar = (g) =>
    g > 250 ? " " :
    g > 230 ? "\`" :
    g > 200 ? ":" :
    g > 175 ? "*" :
    g > 150 ? "+" :
    g > 125 ? "#" :
    g > 50  ? "W" : " ";

  self.onmessage = (e) => {
    const { data, width, height } = e.data;
    const d = new Uint8ClampedArray(data);
    let html = '';
    let lastColor = null;

    for (let y = 0; y < height; y++) {
      lastColor = null;
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4;
        const r = d[i], g = d[i + 1], b = d[i + 2];
        const gray = r * 0.2126 + g * 0.7152 + b * 0.0722;
        const char = getChar(gray);
        const color = \`rgb(\${r},\${g},\${b})\`;

        if (color !== lastColor) {
          html += \`</span><span style="color:\${color}">\`;
          lastColor = color;
        }

        html += char;
      }
      html += '\\n';
    }

    self.postMessage(\`<span>\${html}</span>\`);
  };
`;

// Create the worker from the code blob
const blob = new Blob([workerCode], { type: "application/javascript" });
const worker = new Worker(URL.createObjectURL(blob));

// Sprite load and decode
sprite.decode().then(() => {
  const frames = 8;
  const W = sprite.naturalWidth;
  const H = sprite.naturalHeight;
  const frameW = W / frames;

  const canvas = document.createElement("canvas");
  canvas.width = frameW;
  canvas.height = H;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  worker.onmessage = (e) => {
    ascii.innerHTML = e.data;
  };

  let f = 0, t0 = 0, fps = frames, delay = 1000 / fps;
  let rafId;

  const loop = (ts) => {
    rafId = requestAnimationFrame(loop);
    if (ts - t0 >= delay) {
      ctx.clearRect(0, 0, frameW, H);
      ctx.drawImage(sprite, f * frameW, 0, frameW, H, 0, 0, frameW, H);

      // This will only work now if CORS is enabled on the image server
      const imageData = ctx.getImageData(0, 0, frameW, H);

      // Send image data to worker
      worker.postMessage({
        data: imageData.data.buffer,
        width: frameW,
        height: H
      }, [imageData.data.buffer]);

      f = (f + 1) % frames;
      t0 = ts;
    }
  };

  const handleVisibility = () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else {
      t0 = performance.now();
      rafId = requestAnimationFrame(loop);
    }
  };

  document.addEventListener("visibilitychange", handleVisibility);
  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(rafId);
    document.removeEventListener("visibilitychange", handleVisibility);
    worker.terminate();
  });

  rafId = requestAnimationFrame(loop);
}).catch(err => {
  ascii.textContent = "⚠️ Failed to load sprite.";
  console.error("Sprite decode error:", err);
});