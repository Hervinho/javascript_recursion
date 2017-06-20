//Implementing recursive countdown function with promises.
var value = 10;

var countdown = function(value) {
	return new Promise((resolve, reject) => {
		if(value > 0) {
        console.log('Value: ', value);
        resolve(countdown(value - 1));
		} 
		else{
			reject('Countdown reached zero.');
		}
  });
    
};


countdown(value).then((result)=>{
	
}).catch((error)=>{
	console.log(error);
});
