const { response, request } = require('express');
var axios = require('axios');
const getPairsOfPlayers = async (req = request, resp = response, next,num) => {
    const {data}= await axios(
    `https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`
  )
  
 num =139;
 var alturas=[];
for (i in data.values)
{
  alturas.push(parseInt(data.values[i].h_in))
}
var parejas=[];

for(i in data.values)
{
  const pri=parseInt(data.values[i].h_in);
  const sec=num-parseInt(data.values[i].h_in);
  
  if(alturas.includes(sec))
  {
    parejas.push([sec,pri]);
  }
}
console.log(parejas)
  var result=[];
  for (i in data.values)
  {
    for(j in parejas)
    {
    if(data.values[i].h_in==parejas[j][0])
    {
      
      for (w in data.values)
  {if(data.values[w].h_in==parejas[j][1])
    {
      result.push([data.values[i],data.values[w]]);
    }}
    }
  }
  }
  resp.json(result);
};

module.exports = { getPairsOfPlayers };
