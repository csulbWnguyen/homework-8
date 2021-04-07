//get userName from form login. 
const gitHubID = document.getElementById("gUserName"); 
//wait for user to submit. 
gitHubID.addEventListener("submit", e=> {
    e.preventDefault();
    //get login information as a variable. 
    const login= gitHubID.elements.login.value;
    //Fetch API for github.
    fetch(`https://api.github.com/users/${login}`)
    .then (response => response.json())
    .then (user =>{
        //get image from API. 
        const photoUser = document.createElement("img");
        photoUser.src = user.avatar_url;
        photoUser.style.height="150px";
        photoUser.style.width="150px";
        const photos = document.getElementById("userPhoto");
        photos.innerHTML="";
        //append to ID
        photos.appendChild(photoUser);
    });
});

//use innerHTML to fill in data points. Checking for photo first. 

/* tableTR = document.createElement("tr");
        //for each row, insert table data. Add a table row for each data point.
        tableTR.innerHTML = `
        <td>${painting.name}</td>
        <td>${painting.year}</td>
        <td>${painting.artist}</td>
        </td>` */
