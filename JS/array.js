const classlist = ["big", 22, "happy", "birthday"]; 
  const ranarr = [22, {name:"sonia"}, [1,2,3,4], "yayyy"]
  
  console.log (ranarr[2]);

  ranarr[2] = "today"
  console.log (ranarr[2]);



  const arr = []
  ranarr[0] = "good day"
  ranarr[1] = "yeah" 
  ranarr[2] = 22

  console.log (ranarr[0]);


  const dob = [1,4,8,6,12];
  

  for (let x in dob)
  {
    console.log(dob[x]*2)
  }

  for (let i = 0; i < dob.length; i++)
  {dob[i] = dob[i]*2}
  console.log(dob)
    
