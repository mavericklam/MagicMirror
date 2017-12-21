/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
		  module: 'MMM-Assistant',
		  position: 'bottom_left',
		  config: {
				apiai:{
					token:"2"
				},
		    assistant: {
		      auth: {
		        keyFilePath: "secret.json", //When you want to change the location of this file, set this.
		        savedTokensPath: "resources/tokens.js" //When you want to change the location of this file, set this.
		      },
		      audio: {
		        encodingIn: "LINEAR16", //Ignore this. I think you don't need to change this.
		        sampleRateOut: 16000 //Ignore this. I think you don't need to change this.
		      }
		    },
		    snowboy: {
		      models: [
		        {
		          file: "resources/smart_mirror.umdl",
		          sensitivity: 0.5,
		          hotwords : "MIRROR" //One of models should be "MIRROR"
		        },
		        {
		          file: "resources/snowboy.umdl",
		          sensitivity: 0.5,
		          hotwords : "ASSISTANT" //One of models should be "ASSISTANT"
		        }
		      ]
		    },
		    record: {
		      threshold: 0, //Ignore this. I think you don't need to change this.
		      verbose:false, //true for checking recording status.
		      recordProgram: 'arecord', //You can use 'rec', 'sox'. But I recommend use 'arecord'.
		      silence: 2.0 //Ignore this. I think you don't need to change this.
		    },
		    stt: {
		      auth: [{
		        projectId: '<your google Project ID>', //ProjectId from Google Console
		        keyFilename: '<your google Project Key File>'
		      }], //You can use multi accounts for saving money.
		      request: {
		        encoding: 'LINEAR16', //Ignore this. I think you don't need to change this.
		        sampleRateHertz: 16000, //Ignore this. I think you don't need to change this.
		        languageCode: 'en-US' //See https://cloud.google.com/speech/docs/languages
		      },
		    },
		    speak: {
		      useAlert: true, //If you want to show the text of speech, set this true. But It could be ignored by command of modules directly.
		      language: 'en-US', //If you want to set the default language of speech of command result, set this.
		    },
		    alias: [
		      {
		        "help :command" : ["teach me :command", "what is :command"]
		      }
		    ] // You can use aliases for difficult pronunciation or easy using.
		  }
		},
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Zhuhai,China",
				locationID: "1790437",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "ec2b980fcd79a7402e05369d116dbf71"
			}
		},
		{
			module: "weatherforecast",
			position: "bottom_left",
			header: "Weather Forecast",
			config: {
				location: "",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: ""
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
