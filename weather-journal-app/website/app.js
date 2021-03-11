//values added together equal http route I believe
let baseURL = '"http://api.openweathermap.org/data/2.5/weather?zip=";'
let apiKey = '1d3069638ea01c21620211ee9ec5ee3d';
const newLocation =  document.getElementById('zip').value;
//when generate button is clicked function to get the value of zip and feelings.
document.getElementById('generate').addEventListener('click', performAction);

//feeling user content box/zip value taken
function performAction(e){
const userText =  document.getElementById('feeling').value;
const newLocation =  document.getElementById('zip').value;

//API CALL('/'?) or (url+zip+apikey?)
getZipWeatherInfo(baseURL+newZip+apiKey)
//using the then keyword we can post our data to server .so we post data and use fetch later to receive it back. to have it appear on page, we need to dynamically update UI to have it on our static webpage.
.then(function(data){
    console.log(data)
    //Add data to POST request(ROUTE AND DATA)/ feeling:feeeling is what user wrote themselves.
    postData('/addNewZip', {date:date.zip, temp: data.zip, feeling:feeling} );
});


//UDATING UI/CHANGING STATIC WEBPAGE! I believe as per below (dynamic UI) code??

updateUI();
});



//async function (async so our code waits to receive back data from server.) which takes base url, zip and API Key.
const getZipWeatherInfo = async (url)=>{
//rebuilding our Url into a Fetch call/ As URL AND ZIP AND KEY all combined together./this let's us query a web API.(fetching data posted to server I believe, previously?)
  const res = await fetch(baseURL+zip+key)
  //below to get data BACK? I think
  const res = await fetch(url);
// try and catch promises/our conditions for it all to pass.
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

//Not sure what below is for...
// Create a new date instance dynamically with JS
//let d = new Date();
//let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


//posting info BACK to JS? (console/terminal) bit confused here. returning it back in JSON format possibly?
const postData = async (url = '', data = {}) => {
    console.log(data)
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch (error) {
        console.log("error", error);
    }
}

//UDATING UI/CHANGING STATIC WEBPAGE! updating page with info posted, fetched, posted/(GET) back?

const updateUI = async () => {
    const request =  await fetch ('/all')
    try{
        const allData = await request.json()
        console.log(allData);
        //selecting elements we want to update (div with date temp and content) variable ALLDATA holds our info in JSON format requested, we want 0 index entry as that is the first entry, we want data, temp, content then :).
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('temp').innerHTML = allData[0].temp;
        document.getElementById('content').innerHTML = allData[0].content;
    }catch(error){
        console.log("error", error);   
    }
} 

//references
//UDACITY. UDACITY video resources. WEB API'S ASYNChRONOUS.
//https://www.youtube.com/watch?v=uxf0--uiX0I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=7&ab_channel=TheCodingTrain