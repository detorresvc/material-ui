import path from 'path';
import Express from 'express';

var app = Express();
var server;

const PATH_SCRIPTS = path.resolve(__dirname, '../../dist/js')
const PATH_STYLES = path.resolve(__dirname, '../../dist/css')

const ASSETS_CONFIG = {
    maxAge: 86400000
}

app.use('/js', Express.static(PATH_SCRIPTS, ASSETS_CONFIG) );
app.use('/css', Express.static(PATH_STYLES, ASSETS_CONFIG) );

app.get('*', (req, res) => {

    res.sendFile(path.resolve('./src/views')+'/index.html');

});

server = app.listen(process.env.PORT || 3040, () => {
    var port = server.address().port;
    console.log('Running at localhost:%s', port);
});
