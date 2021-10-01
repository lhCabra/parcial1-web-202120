const { response, request } = require('express');
var axios = require('axios');
const getPairsOfPlayers = async (req = request, resp = response, next) => {
    const {data}= await axios(
    `https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players`
  )
 // const num = req.query;
 const num =139;
 var alturas=[];
for (i in data.values)
{
  alturas.push(parseInt(data.values[i].h_in))
}
var alt2=Array.from(new Set(alturas));
var parejas=[];
console.log(alt2.sort());

for(i in data.values)
{
  const pri=parseInt(data.values[i].h_in);
  const sec=num-parseInt(data.values[i].h_in);
  console.log(sec)
  if(alturas.includes(sec))
  {
    console.log('entro')
    parejas.push([sec,pri]);
  }
}

console.log(parejas)
  var result=[];
  for (i in data.values)
  {
    if(data.values[i].h_in==78)
    {
      result.push(data.values[i]);
    }
  }
  resp.json(data);
};

module.exports = { getPairsOfPlayers };
