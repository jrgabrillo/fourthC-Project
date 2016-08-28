$('document').ready(function(){
	// variable declarations
	// string
		var var_name1 = "value";
		var var_name2 = 'value';

	// number
		var var_name = 143;

	// boolean
		var var_name1 = true;
		var var_name2 = false;

		var var_name3 = 1; // true
		var var_name4 = 0; // false

	// arrays
		var array_name1 = new Array(Name => 'Rufo', Age => 18);
		var array_name2 = [Name => "Rufo", Age => 18];


		console.log(array_name1);
		console.log(array_name1[0]);
		console.log(array_name2[1]);

	// objects JSON (JavaScript Object Notation)
	var object_name = {"Name":"Rufo","Age":18, "dim":{"idim":{"iidim":{"stop":"stop"}}}};
	console.log(object_name);
	console.log(object_name.Name);
	console.log(object_name.Age);

	// functions
		// anymous and named
			var func_name = function(){  //parent function
				'use strict';

				return {
					plus: function(num1,num2){ // child function
						return num1+num2;	
					},
					minus: function(num1,num2){
						return num1-num2;
					},
					devide:function(num1,num2){
						return num1/num2;
					},
					multiply:function(num1,num2){
						return num1*num2;
					},
					modulus:function(num1,num2){
						return num1%num2;
					},
					all:function(){
						var a = 300, b = 500;
						var content = "";
						var res = this.plus(a,b);
						content += a+" + "+b+" = "+res+"<br/>";

						var res = this.minus(a,b);
						content += a+" - "+b+" = "+res+"<br/>";

						var res = this.devide(a,b);
						content += a+" / "+b+" = "+res+"<br/>";

						var res = this.multiply(a,b);
						content += a+" * "+b+" = "+res+"<br/>";

						var res = this.modulus(a,b);
						content += a+" % "+b+" = "+res+"<br/>";

						return content;
					}
				}
			}

func_name();

var content = func_name().all();
console.log(content);

$(".content-block p").html(content);
});