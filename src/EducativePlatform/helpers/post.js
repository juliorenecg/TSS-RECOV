export const post=async(url,body)=>{
    try {
      console.log(JSON.stringify(body));
        const rawResponse = await 
          fetch("http://142.93.203.113:3001/api/register",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(body)
})
        
    console.log(rawResponse)
        const res = await rawResponse.json();
        return res;
      } catch (error) {
        console.error(error);
      }

}