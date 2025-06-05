// Theme toggle + sound
    document.getElementById("theme-toggle").addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
      audio.play();
    });

    // Dark mode styles
    const style = document.createElement('style');
    style.innerHTML = `
      body.dark {
        background: linear-gradient(to right, #1f1c2c, #928dab);
        color: #fff;
      }
      body.dark .card {
        background: #2c2a4a;
        color: white;
      }
      body.dark button {
        background: #e67e22;
      }
    `;
    document.head.appendChild(style);

    // Voice input
    function startListening() {
      const output = document.getElementById("voiceOutput");
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.start();
      recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        output.textContent = `You said: "${text}"`;
      };
      recognition.onerror = (e) => {
        output.textContent = "Could not understand. Try again.";
      };
    }
  </script>
</body>
</html>
