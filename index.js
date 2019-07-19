const createApp = require('./src/app');

require('dotenv').config();

(async () => {
    const app = await createApp();

    process.on('exit', app.stop);
    app.listen(3000);
})();
