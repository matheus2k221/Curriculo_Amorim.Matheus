const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const waLink = "https://wa.me/5561993011465";
const outputPath = path.join(__dirname, 'qr-code.png');

QRCode.toFile(outputPath, waLink, {
  width: 300,
  margin: 1,
  color: {
    dark: '#0d1b2a',
    light: '#ffffff'
  }
}, function(err) {
  if (err) {
    console.error('Erro ao gerar QR Code:', err);
    process.exit(1);
  }
  console.log('QR Code gerado com sucesso: ' + outputPath);
});
