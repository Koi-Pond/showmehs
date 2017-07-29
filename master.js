console.log("\nMehs:\n");
API.getUsers().forEach(function (user)
{
	if (user.vote == -1)
	{
		console.log(user.username + "\n");
	}
});
