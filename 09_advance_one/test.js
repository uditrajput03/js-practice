let res = fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
  return response.json();
  console.log(response.json());
})
.then((data) =>  console.log(data))
.catch(() => console.log("Error occured"))
.finally(() => console.log("Fetched Successful"))