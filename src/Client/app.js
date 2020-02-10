'use strict';

const client = require('./greeter.service');

client
    .sayHello({ name: 'Luiz' })
    .then(res => console.log(res))
    .catch(err => console.error(err));
