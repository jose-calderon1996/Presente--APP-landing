document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-button');
    const messageElement = document.getElementById('device-message');
  
    if (/Android/i.test(navigator.userAgent)) {
      downloadButton.classList.remove('hidden');
      messageElement.textContent = 'Estás en un dispositivo Android. Descarga la app ahora.';
    } else {
      messageElement.textContent = 'Estás en un dispositivo que no es Android.';
    }
  });
  