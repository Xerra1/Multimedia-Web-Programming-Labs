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
    xhttp.open("GET", "js/Inventory.xml", true)
    xhttp.send();
});

    
function loadMenu(xml){
    var xmlDoc = xml.responseXML;                           //Assigns the xml document to a variable
    var prod = xmlDoc.getElementsByTagName("product")        //Finds and returns the elements with tag 'product'
    //Variables to contain the different product property
    var tempName;
    var tempDesc;
    var tempPrice;
    var tempImg;
    var prodObj;

        //Loops according to the size of prod[] (How many prod tags that were returned) and assign their values to the variables accordingly
        for(var count = 0; count < prod.length; count++){
             tempName = prod[count].getElementsByTagName("name")[0].childNodes[0].nodeValue;
             tempDesc = prod[count].getElementsByTagName("desc")[0].childNodes[0].nodeValue;
             tempPrice = prod[count].getElementsByTagName("price")[0].childNodes[0].nodeValue;
             tempImg = prod[count].getElementsByTagName("img")[0].childNodes[0].nodeValue;
             
             //Make a prod Object to store the attributes of the prod
             prodObj = {
                 "name" : tempName,
                 "desc" : tempDesc,
                 "price" : tempPrice,
                 "img" : tempImg
             };
             
             displayMenu(prodObj);
            //console.log(prodObj);
        }
}   

//Appends the data from the object to the html class 'menu' for display
function displayMenu(prodObj){
   // $("#img").append("<img src=" + prodObj.img + " align='left'/>");      //testing image
    $("#listing").append(
        "<table>" +
        "<tr><td> <img src=" + prodObj.img + " class='imageSize' hspace='5' /></td>" + 
        "<td valign='top'><h4>" + prodObj.name + 
        "</h4><p class='price'>$" + prodObj.price +
        "<p>" + prodObj.desc + 
        "<p>Mileage : " + prodObj.mile + "<p></td></tr>" + 
        "<tr><td> <hr> </td></tr>" +
        "</table>");

}
