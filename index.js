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

    return config;
}

if ( !fs.existsSync( globalConfigPath ) ) {
    writeConfig( );
}
else {
    readConfig( );
}

exports.set = ( name, value ) => {
    value == 'true' && ( value = true );
    value == 'false' && ( value = false );

    config[ name ] = value;

    writeConfig( );
};

exports.get = ( name ) => {
    if ( !name ) {
        return readConfig( );
    }
    else {
        return config[ name ];
    }
};

exports.clean = ( ) => {
    config = defaultConfig;

    writeConfig( );
};
