

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET'
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('./user.json', { })
    .then(data => {
        if(JSON.parse(localStorage.getItem('data'))){
            let Updated_data = JSON.parse(localStorage.getItem('data'));
            console.log("Updated_data",Updated_data)
            localStorage.setItem('data', JSON.stringify(Updated_data));
        }
        else{
            console.log("generate data",data)
        localStorage.setItem('data', JSON.stringify(data));

        }
    });

// console.log("datainfo",JSON.parse(localStorage.getItem('data')))
