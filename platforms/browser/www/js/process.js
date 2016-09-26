Framework7.prototype.plugins.statistics = function (app, params) {
    
	var math = function(){
		"use strict";
		return {
			plus:function(numbers){
		 		var y = 0;
		 		$.each(numbers,function(a,b){
		 			y = y + b;
		 		})
		 		return y;
			},
            mean: function(num){
		 		var y = 0;
		 		$.each(num,function(a,b){
		 			y = y + b;
		 		})
		 		return y/num.length;
		 	},
		 	median:function(){

		 	},
		 	mode:function(){

		 	}
		}
	}();
	var strings = function(){
		"use strict";
		return {
			count:function(string){
				console.log(string[0]+string[1]+"a");
		 		return string[0]+string[1]+"a";
			}
		}
	}();

    return {
        hooks: {
            appInit: function () {
            	console.log("xxx");
            	$$("#Button").on('click',function(){
	            	var peopleList = $$("input[data-cmd='peopleList']").val().split(',');
	            	console.log(peopleList);
	            	$.each(peopleList,function(a,b){
	            		peopleList[a] = parseInt(peopleList[a]);
	            	});

	            	var mean = math.mean(peopleList);
	            	var median = 34;
	            	var mode = 32;
	            	var content = "Mean: "+mean+"<br/>Median: "+median+"<br/>Mode: "+mode;
	            	$$("#statsHere").html(content);
            		console.log(peopleList);
            	});
            }
        }
    };
};

var $$ = Dom7;
var app = new Framework7({
	statistics:true
});

