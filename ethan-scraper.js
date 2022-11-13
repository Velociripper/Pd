const maxApi = require("max-api");


var input = "";


const weather = require('openweather-apis');
weather.setAPPID('9c9a356aa17ca46993c6a1ecef8480ff');
weather.setLang('es');
weather.setUnits('imperial');


maxApi.addHandler("input", (innie) => {
	weather.setCity(innie);
	weather.getAllWeather(function(err, JSONObj) {
		maxApi.outlet(JSONObj);

	})
	maxApi.post(innie);
	maxApi.outlet(innie);
})
	


