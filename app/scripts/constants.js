define(['app'], function(app) {
    'use strict';

    var API_END_POINT = "";

    app.constant('API_END_POINT', API_END_POINT);
    
    app.constant('AUTH', {
        ACCESS_TOKEN: 'access_token'
    });
});
