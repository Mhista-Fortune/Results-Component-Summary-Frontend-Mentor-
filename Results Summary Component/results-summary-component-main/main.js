// const submitBtn = document.getElementsByClassName(summary-section__cont-btn);
const btn = document.getElementById("btn");
btn.addEventListener('click', async () => {
    let url = 'data.json';

    // Define and send request
    const res = await fetch(url);
    const output = await res.json();
    if(output) {
        //  Access the first element of the JSON
        let data = output[0]['category'];
        //console.log(data);
        alert("Successful")
    }else {
        console.log("Data retrieval failed!");
    }
})