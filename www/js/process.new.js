Framework7.prototype.plugins.statistics = function (app, params) {
    
	var strings = function(){
		"use strict";
		return {
			count:function(string){
				console.log(string[0]+string[1]+"a");
		 		return string[0]+string[1]+"a";
			}
		}
	}();

	var ajax = function(){
		"use strict";
		return{
			get:function(url,data,_function,err){
				$.ajax({
					url:url,
					type:'POST',
					data:data,
					success:function(e){
						_function(e);
					},
					error:function(e){
						if(e.status == 404){
							err(e);
						}
					}
				});
			}
		};
	}();

	var storage = function(){
		'use strict';
		return {
			store:function(name,data){
				console.log(name);
				console.log(data);

				localStorage.setItem(name,data);
			},
			retrieve:function(name){
				return localStorage.getItem(name);
			},
			retrieveFile:function(url){
			}
		};
	}();

    return {
        hooks: {
            appInit: function () {
            	var data = ajax.get('data/file.contacts','',function(e){
            		var data = JSON.parse(e);
            		var content = "";
            		$$.each(data,function(a,b){
            			content += "<ul><li class='list-item'>"+
	                                        "<div class='row'>"+
		                                        "<div class='col-10'>"+
			                                        "<div><img src='img/"+b['image']+"' width='100%'/></div>"+
		                                        "</div>"+
		                                        "<div class='col-90'>"+
			                                        "<div>Name: "+b['name']+"</div>"+
			                                        "<div><a href='pages/"+b['page']+"'>My Story</a></div>"+
		                                        "</div>"+
	                                        "</div>"+
                                        "</li></ul>";
            		});

            		$$("#contactFile").html("<div class='list-block collapsible'>"+content+"</div>");

					var view = app.addView('.view-main')          
					$$("a").on('click',function(){
    		        	var data = ajax.get(this.href,'',function(e){
		            		$$("#contactFile").html(e);

    		        	});

					})
				},
				function(e){
					console.log(e);
				})
            }
        }
    };
};

var $$ = Dom7;
var app = new Framework7({
	statistics:true
});

