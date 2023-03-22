var container = document.createElement("div");
container.className = "container";
var div= document.createElement("div");


var row1 = document.createElement("div");
row1.setAttribute("class","row");
var div= document.createElement("div");
div.className="col-sm-12";
row1.append(div);
var titleh1 = document.createElement("h1");
titleh1.setAttribute("id","title");
titleh1.setAttribute("class","text-center");
titleh1.innerHTML="Restcountries & Weather using fetch API";

var descp = document.createElement("p");
descp.setAttribute("id","description")
descp.innerHTML="Implement the rest countries and Open weather map APIs using fetch() API.";
div.append(titleh1,descp);

var row = document.createElement("div");
row.classList.add("row","m-3");

container.append(row1,row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function map(lat,lon){
    window.open(
        "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat="+lat+"&lon="+lon+"&zoom=5", "_blank");
    
}

function foo(data1){
    //console.log(data1);

    for(var i=0;i<data1.length;i++){
        //var lats = data1[i].latlng.split(",");
        if(data1[i]['latlng']){
        var lat = data1[i]['latlng'][0];
        var lon = data1[i]['latlng'][1];
    }
        row.innerHTML +=`<div class="col-lg-4"><div class="card text-white mb-3 p-3" style="max-width: 18rem;background-image: linear-gradient(to right, #C4B796 , #495956);">
        <div class="card-header bg-dark">${data1[i].name}</div>
        <img class="card-img-top" src="${data1[i].flag}" alt="Card image cap">        
        <div class="card-body">
          <h5 class="card-title">Capital: ${data1[i].capital}</h5>
          <h5 class="card-text">Region: ${data1[i].region}</h5>
          <h5 class="card-text">Country Code: ${data1[i].alpha3Code}</h5> 
          <button type="button" class="btn btn-primary p-2" onclick="map(${lat},${lon})">Click for Weather</button>       
        </div>
      </div></div>`;
            

    }
    document.body.append(container);
}


