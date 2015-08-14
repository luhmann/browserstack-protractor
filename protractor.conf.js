exports.config = {
 	specs: ['spec.js'],
	seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    multiCapabilities: [
    {
      name: 'test',
      "real_mobile" : false,
      "device" : "iPad 4th",
      "os" : "ios",
      "browserName": "",
      'browserstack.user': '<browserstack user>',
      'browserstack.key': '<browserstack api-key>'
    }]

}
