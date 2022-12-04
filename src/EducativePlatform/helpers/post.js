export const post=async(url,body)=>{
    try {
        const rawResponse = await fetch(url, {
          method: "POST",
          headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"},
          body: JSON.stringify(body)
        });
    
        const res = await rawResponse.json();
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
      }

}