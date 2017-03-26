//HTTP GET Request
$(document).ready(function loadXml(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
           // document.getElementById("demo").innerHTML = this.responseText;                                            //This is for when you want to update the field under id demo
           loadMenu(this);
        }
    }
    //Fetches the xml file to be used in jquery
    xhttp.open("GET", "car_listing.xml", true)
    xhttp.send();
});

    
function loadMenu(xml){
    var xmlDoc = xml.responseXML;                    //Assigns the xml document to a variable
    var car = xmlDoc.getElementsByTagName("car")        //Finds and returns the elements with tag 'car'
    //Variables to contain the different car property
    var tempModel;
    var tempPrice;
    var tempDesc;
    var tempMile;
    var tempImg;
    var carObj;

        //Loops according to the size of car[] (How many car tags that were returned) and assign their values to the variables accordingly
        for(var count = 0; count < car.length; count++){
             tempModel = car[count].getElementsByTagName("model")[0].childNodes[0].nodeValue;
             tempPrice = car[count].getElementsByTagName("price")[0].childNodes[0].nodeValue;
             tempDesc = car[count].getElementsByTagName("description")[0].childNodes[0].nodeValue;
             tempMile = car[count].getElementsByTagName("mileage")[0].childNodes[0].nodeValue;
             tempImg = car[count].getElementsByTagName("image")[0].childNodes[0].nodeValue;
             
             //Make a Car Object to store the attributes of the car
             carObj = {
                 "model" : tempModel,
                 "price" : tempPrice,
                 "desc" : tempDesc,
                 "mile" : tempMile,
                 "img" : tempImg
             };
             
             displayMenu(carObj);
            //console.log(carObj);
        }
}   

//Appends the data from the object to the html class 'menu' for display
function displayMenu(carObj){
   // $("#img").append("<img src=" + carObj.img + " align='left'/>");      //testing image
    $("#listing").append(
        "<table>" +
        "<tr><td> <img src=" + carObj.img + " class='imageSize' hspace='5' /></td>" + 
        "<td valign='top'><h4>" + carObj.model + 
        "</h4><p class='price'>" + carObj.price +
        "<p>" + carObj.desc + 
        "<p>Mileage : " + carObj.mile + "<p></td></tr>" + 
        "<tr><td> <hr> </td></tr>" +
        "</table>");

}
