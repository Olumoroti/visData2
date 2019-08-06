//storing api result
const url = ('https://randomuser.me/api/?results=100');

//setting up butttons and variables
let first_button = document.getElementById('first');
let ifFirst = false;

let last_button = document.getElementById('last');
let ifLast = false;

let gender_button = document.getElementById('gender');
let ifGender = false;

let submit_button = document.getElementById('submit');


//adding event listeners
first_button.addEventListener("click", firstOnClick);
last_button.addEventListener("click", lastOnClick);
gender_button.addEventListener("click", genderOnClick);
submit_button.addEventListener("click", submitInfo);


//event functions
function firstOnClick (event) {
   ifFirst = !ifFirst;
   first_button.innerText = ("Filter by First Name: " + ifFirst);
}

function lastOnClick (event) {
    ifLast = !ifLast;
    last_button.innerText = ("Filter by Last Name: " + ifLast);
 }

 function genderOnClick (event) {
    ifGender = !ifGender; 
    gender_button.innerText = ("Filter by Gender: " + ifGender);
 }

function submitInfo (event) {
    document.getElementById("main_container").innerHTML = '';
    write();
}

//initial write
write();






function write() {

    fetch(url)

    .then(function (response) {
        return response.json();
    })

    .then(function(jsondata) {
        let index = 0;
        //makes 100 profiles
        for ( ; index < 100; index++) {


            //storing JSON data as variables
            let first_name = jsondata.results[index].name.first;
            let last_name = jsondata.results[index].name.last;
            let gender = jsondata.results[index].gender;
            let image = jsondata.results[index].picture.large;

            //creating DOM elements
            let header = document.createElement('h1');
            let profile_picture = document.createElement('img');
            let profile_first = document.createElement('p');
            let profile_last = document.createElement('p');
            let profile_gender = document.createElement('p');
            let profile_div = document.createElement('div');

            //div element and styling
            profile_div.id = index;
            profile_div.className = "profile";
            document.getElementById("main_container").appendChild(profile_div);
            

            //header element and styling
            header.innerText = ("Person " + (index + 1));
            document.getElementById(index).appendChild(header);

            //picture element and styling
            profile_picture.src = image;
            document.getElementById(index).appendChild(profile_picture);
            profile_picture.style.maxWidth = '10rem';
            profile_picture.style.height = '10rem';

            //if statements to check if buttons were pressed
            if (ifFirst == true) {
                profile_first.innerText = ("First name: " + first_name);
                document.getElementById(index).appendChild(profile_first);
            }

            if (ifLast == true) {
                profile_last.innerText = ("Last name: " + last_name);
                document.getElementById(index).appendChild(profile_last);
            }

            if (ifGender == true) {
                profile_gender.innerText = ("Gender: " + gender);
                document.getElementById(index).appendChild(profile_gender);
            }
        }

        
    });

}