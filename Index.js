const mineflayer = require('mineflayer');

// Hier definieren wir die Bot-Konfiguration
function createBot() {
  const bot = mineflayer.createBot({
    host: 'xxAll.aternos.me',  // Ersetze mit deinem Aternos-Servernamen
    port: 58774,               // Der Port deines Aternos-Servers
    username: 'Salamibrot',    // Der Name des Bots
    version: '1.16.4',         // Minecraft-Version anpassen, wenn nötig
  });

  // Wenn der Bot erfolgreich auf dem Server ist
  bot.on('spawn', () => {
    console.log('Salamibrot hat sich erfolgreich mit dem Server verbunden!');
  });

  // Wenn der Bot einen Fehler hat
  bot.on('error', (err) => {
    console.log('Fehler beim Verbinden: ', err);
  });

  // Wenn der Bot vom Server getrennt wird
  bot.on('end', () => {
    console.log('Salamibrot wurde vom Server getrennt.');
  });
}

// Bot starten
createBot();
