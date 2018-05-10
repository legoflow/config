'use strict';

const os = require('os');
const path = require('path');
const fs = require('fs');

const userRoot = os.homedir( );

const globalConfigPath = path.resolve( userRoot, './.legoflow_config' );

const defaultConfig = {
    user: '',
    autoOpenChrome: true,
    port: 3000,
    editor: 'VSCode',
    lab: false,
    nodeBin: '',
    customProjectPath: '',
};

let config = defaultConfig;

const writeConfig = ( ) => {
    fs.writeFileSync( globalConfigPath, JSON.stringify( config ), 'utf8' );
}

const readConfig = ( ) => {
    config = JSON.parse( fs.readFileSync( globalConfigPath, 'utf8' ) );
}

if ( !fs.existsSync( globalConfigPath ) ) {
    writeConfig( );
}
else {
    readConfig( );
}

exports.getConfig = ( ) => {
    return config;
}

exports.set = ( name, value ) => {
    config[ name ] = value;

    writeConfig( );
};

exports.get = ( name ) => {
    return config[ name ];
};

exports.clean = ( ) => {
    config = defaultConfig;

    writeConfig( );
};
