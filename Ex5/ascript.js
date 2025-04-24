document.getElementById('btnExternal').addEventListener('click', function () {
    const box = document.getElementById('box');
    box.style.backgroundColor = '#2ecc71'; // green
    box.textContent = 'Color changed by External JS';
  });
  