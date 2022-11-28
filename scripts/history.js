//---------------------------------------------------
// Loads the parts of skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton(){
    console.log($('#navbarPlaceholder').load('../text/nav.html'));
    console.log($('#footerPlaceholder').load('../text/footer.html'));
}
loadSkeleton();  //invoke the function

var currentUser;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUser = db.collection("users").doc(user.uid);   //global
        // var currentUser2 =db.collection("users").doc(user.uid).collection("medications").doc(medid)
        console.log(currentUser);

        // the following functions are always called when someone is logged in
        displayCards("users");
    } else {
        // No user is signed in.
        console.log("No user is signed in");
        window.location.href = "../html/login.html";
    }
});

//-----------------------------------------------------------------------------
// This function is called whenever the user clicks on the "add" icon.
// It adds the medication to the "history" array
//-----------------------------------------------------------------------------
// function addMedication(MedID) {
//     currentUser.set({
//             bookmarks: firebase.firestore.FieldValue.arrayUnion(MedID)
//         }, {
//             merge: true
//         })
//         .then(function () {
//             console.log("medication has been saved for: " + currentUser);
//             var iconID = 'save-' + hikeID;
//             //console.log(iconID);
// 						//this is to change the icon of the hike that was saved to "filled"
//             document.getElementById(iconID).innerText = 'medication';
//         });
// }

function writeMedication() {
    //define a variable for the collection you want to create in Firestore to populate data
    var MedRef = db.collection("history");

    MedRef.add({
        code:"AM01",
        name: "Amoxicillin",    //replace with your own medication
        city: "Burnaby",
        province: "BC",
        Intake_Frequency: "2 times a day",
        details: "No Special details",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  
    });
    MedRef.add({
        code:"BM02",
        name: "Metformin",    //replace with your own medication
        city: "Abbotsford",
        province: "BC",
        Intake_Frequency: "3 times a day",
        details: "No Special details",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
   });
   MedRef.add({
        code:"CM03",
        name: "Ibuprofen",    //replace with your own medication?
        city: "North Vancouver",
        province: "BC",
        Intake_Frequency: "As needed",
        details: "Take whenever in pain.",
        last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
   });
   MedRef.add({
        code:"DM04",
        name: "Naproxen",    //replace with your own medication?
        city: "White Rock",
        province: "BC",
        Intake_Frequency: "1 times a day",
        details: "No Special details",
        last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
});
}

function displayCards(collection) {
    let cardTemplate = document.getElementById("MedicationCardTemplate");
    firebase.auth().onAuthStateChanged(user => { 
        db.collection("users").doc(user.uid).collection("medications").get()
        .then(snap => {
            //var i = 1;  //if you want to use commented out section
            snap.forEach(doc => { //iterate thru each doc
                var title = doc.data().name;        // get value of the "name" key
                var details = doc.data().details;   // get value of the "details" key
                var Intake = doc.data().Intake_Frequency; // get value of the "intake" key
				var MedID = doc.data().code;    //get unique ID to each hike to be used for fetching right image
                var URL = doc.data().picture;
                // let picUrl = userDoc.data().profilePic;
                let newcard = cardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-image').src = URL;
                // newcard.querySelector('.card-image').src = `./images/${MedID}.png`; Example: NV01.jpg
                newcard.querySelector('a').onclick = () => setMedData(MedID);

                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById("history-go-here").appendChild(newcard);
                //i++;   //if you want to use commented out section
            })
        })
    })
}
    


function setMedData(id){
    localStorage.setItem ('MedID', id);
}