$(document).ready(function loadXml(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
           // document.getElementById("demo").innerHTML = this.responseText;                                            //This is for when you want to update the field under id demo
           loadMenu(this);
        }
    }
    xhttp.open("GET", "car_listing.xml", true)
    xhttp.send();
});

    
function loadMenu(xml){
    var xmlDoc = xml.responseXML;
    var car = xmlDoc.getElementsByTagName("car")
    var tempModel;
    var tempPrice;
    var tempDesc;
    var tempMile;
    var tempImg;
    var menuObj;

        for(var count = 0; count < car.length; count++){
             tempModel = car[count].getElementsByTagName("model")[0].childNodes[0].nodeValue;
             tempPrice = car[count].getElementsByTagName("price")[0].childNodes[0].nodeValue;
             tempDesc = car[count].getElementsByTagName("description")[0].childNodes[0].nodeValue;
             tempMile = car[count].getElementsByTagName("mileage")[0].childNodes[0].nodeValue;
             tempImg = car[count].getElementsByTagName("image")[0].childNodes[0].nodeValue;
             
             menuObj = {
                 "model" : tempModel,
                 "price" : tempPrice,
                 "desc" : tempDesc,
                 "mile" : tempMile,
                 "img" : tempImg
             };
             
             displayMenu(menuObj);
            //console.log(menuObj);
        }
}   

function displayMenu(menuObj){
   // $("#img").append("<img src=" + menuObj.img + " align='left'/>");      //testing image
    $("#menu").append(
        "<table>" +
        "<tr><td> <img src=" + menuObj.img + " class='imageSize' hspace='5' /></td>" + 
        "<td valign='top'><h4>" + menuObj.model + 
        "</h4><p class='price'>" + menuObj.price +
        "<p>" + menuObj.desc + 
        "<p>Mileage : " + menuObj.mile + "<p></td></tr>" + 
        "<tr><td> <hr> </td></tr>" +
        "</table>");

}
