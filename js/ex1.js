
//fetch JSON file.
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
.then (response =>response.json())//response on JSON
.then(paintings=>{
    //get document ID
    paintingID = document.getElementById("paintings");
    paintings.forEach(painting=>{
        //each Element needs a tr. Table Row
        tableTR = document.createElement("tr");
        //for each row, insert table data. Add a table row for each data point.
        tableTR.innerHTML = `
        <td>${painting.name}</td>
        <td>${painting.year}</td>
        <td>${painting.artist}</td>
        </td>`
        paintingID.appendChild(tableTR);
        });
});
