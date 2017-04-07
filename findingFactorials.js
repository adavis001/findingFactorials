/*jshint esversion:6*/


var findingFactorials = function(num){


	if(num === 0){
		return 1;
	}
	if(typeof num !== 'number'){
		return false;
	}

	return num * findingFactorials(num - 1);
};

module.exports=findingFactorials;