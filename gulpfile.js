var elixir = require('laravel-elixir');

elixir.config.assetsPath = "src/client"
elixir.config.publicPath="dist";

elixir(function(mix){
    var nodemodules = "node_modules/";
    var bower = "bower_components/";
    var sourceJs = "src/client/js/";
    var sourceCss = "src/client/css/";
    var sourceFont = "src/client/fonts/";
    var distFile = "dist/";
    var inProduction = elixir.config.production;

    var commonStyles = [
        'bootstrap.min.css',
        'font-awesome.min.css'
    ]

    if(inProduction) {
        commonStyles.push('style.css');
    }

    mix
        .copy(bower + 'font-awesome/css/font-awesome.min.css', sourceCss + 'font-awesome.min.css')
        .copy(bower + 'font-awesome/fonts', distFile + 'fonts')
        .copy(bower + 'jquery/dist/jquery.min.js', sourceJs + 'jquery.min.js')
        .copy(bower + 'bootstrap/dist/js/bootstrap.min.js', sourceJs + 'bootstrap.min.js')
        .copy(bower + 'bootstrap/dist/css/bootstrap.min.css', sourceCss + 'bootstrap.min.css')
        .styles(commonStyles,'dist/css/common.min.css')

    .scripts([
            'jquery.min.js',
            'bootstrap.min.js'
        ],'dist/js/common.min.js')    
});
