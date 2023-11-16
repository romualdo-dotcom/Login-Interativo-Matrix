document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    let matrixCode = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    matrixCode = matrixCode.split('');

    const font_size = 16;
    const columns = Math.floor(window.innerWidth / font_size);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${font_size}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrixCode[Math.floor(Math.random() * matrixCode.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    function updateMatrix() {
      drawMatrix();
      requestAnimationFrame(updateMatrix);
    }

    updateMatrix();

    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('mouseover', () => {
      matrixCode = matrixCode.map(char => {
        return Math.random() > 0.1 ? char : String.fromCharCode(Math.floor(Math.random() * 94) + 33);
      });
    });
});


