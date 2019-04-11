
export const postRecipe = (title,ingredientes,preparacion,type,file,fileRef) =>{
		let user = firebase.auth().currentUser;

		firebase.database().ref('recipe/').push({
	  	user: user.uid, 
	    username: user.displayName,
	    titleRecipe : title,
			ingredients : ingredientes,
			preparation: preparacion,
			tipe: type,
			file: file,
			fileName: fileRef
		})
		.then(res => {
			// alert subida exitosa
			console.log("fileName:",fileRef);
			// console.log("file:",file);
			console.log("ingredients:",ingredientes);
		
			alert('tu publicación se ha realizado con éxito, ahora puedes ir a verla');
			
			

// window.localtion.ref="/src/assets/views/templateTimeLine.js";
			
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

export const showimageTimeLine = () =>{
	  let fileRef = []; 
		firebase.storage().ref();
		let fileName = storageRef.child(file.name);
		ref.put(fileName).then(function(snapshot) {
			console.log('Uploaded a blob or file!');
		});
};

export const showRecipeProfile = () => {

	let post = []; 
	const user = firebase.auth().currentUser;
			firebase.database().ref('recipe/').orderByChild('user').equalTo(user.uid).once('value', (snapshot) =>{
			snapshot.forEach(function (childsnapshot){
			let childData = childsnapshot.val();
			 post.push(childData);
			})
		})
	 
	 return post;

};

export const showInfoUser = () =>{

	let post = []; 
	    const user = firebase.auth().currentUser;
 		firebase.database().ref('userInfo/'+user.uid).on('value', (snapshot) =>{
		 post.push(snapshot.val());
		})

 
 return post;

}



