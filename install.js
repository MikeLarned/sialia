const exec = require('child_process').exec;

exec('npm run pack', (err, stdout, stderr) => {
    if (stderr) console.error(stderr);
    if (err) console.error(err);
}).on('exit', code => {
    process.exitCode = code;
});