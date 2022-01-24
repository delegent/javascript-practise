let json = '{"age":"30"}';
try
{
	let user = JSON.parse(json);
	labala();
	if(!user.name)
	{
		throw new SyntaxError("Incomplete Data : No Name!")
	}

	console.log(user.name);

}catch(err){
	// onsole.log("JSON Error => " + err);

	if(err instanceof SyntaxError){
		console.log("JSON Error " + err.message);
	}else{
		throw err;
	}

}










