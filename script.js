/* Troll Game Project 8/23/2021 */

//definition of the trollBattle() function which runs the game
function trollBattle(){

//initial prompt for the user which gets stored in a variable
	var action = window.prompt("You're walking through the forest minding your own business and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();

		// Switch statement to handle the player's initial choice
	switch(action){
		case "FIGHT":{
			var skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
			var strong = window.prompt("Are you stronger than a troll?(YES or NO)").toUpperCase();

			//IF statement that analyzes the user responses
			if(skill === "YES" || strong === "YES"){
				// The user responded "YES" to at least one of the prompts

				// Write the winning result to the document
				document.getElementById("result").innerHTML = "You can be either stronger or more skilled than the troll to survive!<br/>You live another day!";
				// Clear any losing messages from the document
				document.getElementById("death").innerHTML = "";
				// Play the winning audio file
				document.getElementById("win").play();
			}else{
				// User answered NO to both prompts
				// Write the negative result to the document
				document.getElementById("death").innerHTML = "You are not skilled or strong? Why did you fight a troll?<br/>You have died!";
				// Clear any positive messages from the document
				document.getElementById("result").innerHTML = "";
				//play the losing audio file
				document.getElementById("lose").play();

			}
			break;

		}
		case "RUN": {
			var fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
			if(fast === "YES"){
				// Write the positive result to the document
				document.getElementById("result").innerHTML = "Your speed has saved you!<br/>But can you live with your cowardice?";
				// Clear any losing messages from the document
				document.getElementById("death").innerHTML = "";
				// Play the winning audio file
				document.getElementById("win").play();
			} else{
				//write the negative result to the document
				document.getElementById("death").innerHTML = "You coward! If you are going to run, at least be fast!<br/>You have died. . .";
				// Clear the positive result from the document
				document.getElementById("result").innerHTML = "";
				// Play the losing audio file
				document.getElementById("lose").play();

			}
			break;

		}//end of switch
		case "BRIBE": {
		var money = window.prompt("You have to pay the troll-toll.\nDo you have any money?(YES or NO)").toUpperCase();
			if(money === "YES"){
				var amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE");
		//convert the string to an integar
		amount = parseInt(amount);
		 if(amount > 50){
		
		// Write the positive result to the document
		document.getElementById("result").innerHTML = "Great job! The troll is happy<br/>You may pass";
		
		// Clear any losing messages from the document
		document.getElementById("death").innerHTML = "";
		
		// Play the winning audio file
		document.getElementById("win").play();

				}else{
		//write the negative result to the document
         document.getElementById("death").innerHTML = "The troll needs more money than that to let you pass!<br/>You have died. . .";

		// Clear the positive result from the document
		document.getElementById("result").innerHTML = "";
		 // Play the losing audio file
		document.getElementById("lose").play();

				}

			} else {
		    // User said NO to having money
			//write the negative result to the document
			document.getElementById("death").innerHTML = "What were you planning on bribing the troll with?<br/>You have died. . .";
			// Clear the positive result from the document
			document.getElementById("result").innerHTML = "";
			// Play the losing audio file
			document.getElementById("lose").play();

			}
			break;

		} //end case "BRIBE"
		default: {
			// The user has not entered a valid choice to the original prompt
			window.alert("You entered: " + action + ".That is not a valid choice, please try again!");
			//run the trollBattle() function again
			trollBattle();
			break;

		}
	}//End of switch
}// End of trollBattle() function