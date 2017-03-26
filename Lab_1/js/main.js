//HTTP GET Request
$(document).ready(function loadXml(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
           // document.getElementById("demo").innerHTML = this.responseText;     //This is for when you want to update the field under id demo
           loadMenu(this);
        }
    }
    //Fetches the xml file to be used in jquery
    xhttp.open("GET", "food_menu.xml", true)
    xhttp.send();
});

    
function loadMenu(xml){
    
    var xmlDoc = xml.responseXML;                           //Assigns the xml document to a variable
    var food = xmlDoc.getElementsByTagName("food")          //Finds and returns the elements with tag 'food'
    //Variables to contain the different food property
    var tempName;
    var tempPrice;
    var tempDesc;
    var tempCal;
    var tempImg;
    var menuObj;

        //Loops according to the size of food[] (How many food tags that were returned) and assign their values to the variables accordingly
        for(var count = 0; count < food.length; count++){
             tempName = food[count].getElementsByTagName("name")[0].childNodes[0].nodeValue;
             tempPrice = food[count].getElementsByTagName("price")[0].childNodes[0].nodeValue;
             tempDesc = food[count].getElementsByTagName("description")[0].childNodes[0].nodeValue;
             tempCal = food[count].getElementsByTagName("calories")[0].childNodes[0].nodeValue;
             tempImg = food[count].getElementsByTagName("image")[0].childNodes[0].nodeValue;
             
             //Make a Food Object to store the attributes of the food
             menuObj = {
                 "name" : tempName,
                 "price" : tempPrice,
                 "desc" : tempDesc,
                 "cal" : tempCal,
                 "img" : tempImg
             };
             
             displayMenu(menuObj);
            //console.log(menuObj);
        }
}   

//Appends the data from the object to the html class 'menu' for display
function displayMenu(menuObj){
   // $("#img").append("<img src=" + menuObj.img + " align='left'/>");      //testing image display
    $("#menu").append(
        "<table>" +
        "<tr> <td> <img src=" + menuObj.img + " class='imageSize' hspace='5' /></td>" + 
        "<td valign='top'><h4>" + menuObj.name + 
        "</h4><p>" + menuObj.price + 
        "<p>" + menuObj.desc + 
        "<p>Calories : " + menuObj.cal + "<p></td></tr>" + 
        "</table>");

}
