const exec = require('child_process').exec;

exec('npm run pack', (err, stdout, stderr) => {
    if (stderr) console.log(stderr);
    if (err) console.error(err);
}).on('exit', code => {
    if(code) console.log("Installer exited with code: " + code);
});