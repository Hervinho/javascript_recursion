//Implementing recursive countdown function with promises.

var countdown = function(value) {
	return new Promise((resolve, reject) => {
		if(value > 0) {
        console.log('Value: ', value);
        resolve(countdown(value - 1));
		} 
		else{
			//console.log('Value: ', value);
			reject('Countdown reached zero.');
		}
  });
    
};


countdown(10).then((result)=>{
	console.log(result);
}).catch((error)=>{
	console.log(error);
});
