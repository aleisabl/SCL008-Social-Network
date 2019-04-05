
export const postRecipe = (title,description,type) =>{
		var user = firebase.auth().currentUser;
		console.log(user.uid);

		  firebase.database().ref('recipe/').push({
	  	user: user.uid, 
	    username: name,
	    titleRecipe : title,
	    recipe : description,
	    tipe: type,
	});
	
	
	
};



export const showRecipeTimeLine = () =>{
 let post = []; 
 		firebase.database().ref('recipe/').on('value', (snapshot) =>{
		snapshot.forEach(function (childsnapshot){
		let childData = childsnapshot.val();
		 post.push(childData);
		})
	})
 return post;
};



export const showRecipeProfile = () => {
	var user = firebase.auth().currentUser;
	

	firebase.database().ref('recipe/').orderByChild('user').equalTo(user.uid);
};
//   firebase.database().ref('recipe/' + user.uid).set({
	//   	user: user.uid, 
	//     username: name,
	//     titleRecipe : title,
	//     recipe : description,
	//     tipe: type,
	// });