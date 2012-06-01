/*
 * File that holds bindings for APIs
 */

var config = {
  fields: [],
};



var apiController = {
	bindings: ['fhgeo', 'fhcam'],

	addApiCalls: function() {
		var neededApis = document.body.getElementsByClassName('$fh');
		debugger;
		for (var i = 0; i < neededApis.length; i++) {
			var classes = neededApis[i].className;
			for (var j = 0; j < this.bindings.length; j++) {
				if (classes.indexOf(this.bindings[j])); {
					var element = neededApis[i].getElementsByTagName('input')[0];
					debugger;
					var fn = this.bindFunction(this.bindings[j]);
					jQuery('#' + element.id).bind('click', fn);
				}
			}
		}
	},

	bindFunction: function(className) {
		switch (className) {
		case 'fhgeo':
			return this.fhGeo;
			break;
		}
	},

	// Returns Lat and Long as sting
	fhGeo: function() {
		$fh.geoip(function(res) {
			console.log('GEO');
			var str = '';
			str += 'Longitude: ' + res.longitude + ', ';
			str += 'Latitude: ' + res.latitude;
			return str;
		}, function(msg, err) {
			console.log('GEO');
			return 'location could not be determined';
		});
	},
}
