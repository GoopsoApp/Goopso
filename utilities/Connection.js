'use strict';

let stagingUrl = 'http://xyz.com',
    localUrl = 'http://192.168.0.103:5000/';

let runningUrl = localUrl;

class Connection {

    static getBaseurl() {

        return runningUrl;
    };

    static getResturl() {

        return `${runningUrl}v1/`;
    };
}

module.exports = Connection;
