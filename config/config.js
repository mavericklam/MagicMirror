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
		  position: 'bottom_right',
		  config: {
				apiai:{
					token:"263f07b05da0462faffa572dc276aa36",
					language: 'zh'
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
		          file: "resources/mjmj.pmdl",
		          sensitivity: 0.3,
		          hotwords : "ASSISTANT" //One of models should be "MIRROR"
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
		      recordProgram: 'rec', //You can use 'rec', 'sox'. But I recommend use 'arecord'.
		      silence: '2' //Ignore this. I think you don't need to change this.
		    },
				recordSpeech: {
					sampleRate    : 16000 , // audio sample rate
					channels      : 1  ,    // number of channels
					threshold     : 1 ,   // silence threshold (rec only)
					thresholdStart: null ,  // silence threshold to start recording, overrides threshold (rec only)
					thresholdEnd  : null ,  // silence threshold to end recording, overrides threshold (rec only)
					silence       : '1.0' , // seconds of silence before ending
					verbose       : false  // log info to the console
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
				baiduVoice:{
					app_id: "10352969",
					api_key :"q88Cw9QvxNuu8iTOBFFBLkLO",
					secret_key:"j6GNAQHSu6NiOYBawruO7VqRTdXauE2z"
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
		    module: 'MMM-forecast-io',
		    position: 'top_right',  // This can be any of the regions.
		    config: {
		      // See 'Configuration options' for more information.
		      apiKey: '7421fe835b70e4f74f12fb3f584fabff', // Dark Sky API key.
		      // Only required if geolocation doesn't work:
					language:'zh',
					units:'metric'
		    }
		},
		{
		    module: 'MMM-LICE',
		    position: 'top_right',                 // Best in left, center, or right regions
		    config: {
					accessKey: "8ecec40c4303b929553b708ec00e5ab4", // Free account & API Access Key at currencylayer.com
					source: "CNY",                    // USD unless you upgrade from free account
					symbols: ["HKD","USD","EUR","GBP"],       // Currency symbols
					useHeader: true,
					header: "实时汇率",
					maxWidth: "500px",
		    }
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "中国假日",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "http://www.google.com/calendar/ical/china__zh_cn@holiday.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
		    module: "MMM-EARTH",
		    position: "bottom_left",
		    config: {
		        mode: "Natural",
		        rotateInterval: 30000,
		        MaxWidth: "17%",
		        MaxHeight: "17%",
						animationSpeed:0
		    }
		},
		{
			module: "newsfeed",
			position: "bottom_center",
			config: {
				feeds: [
					{
						title: "即时新闻-中新网",
						url: "http://www.chinanews.com/rss/scroll-news.xml",
						encoding:"gb2312"
					},
					{
						title: "国内新闻-中新网",
						url: "http://www.chinanews.com/rss/china.xml",
						encoding:"gb2312"
					},
					{
						title: "国际新闻-中新网",
						url: "http://www.chinanews.com/rss/world.xml",
						encoding:"gb2312"
					},
					{
						title: "港澳新闻-中新网",
						url: "http://www.chinanews.com/rss/gangao.xml",
						encoding:"gb2312"
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
