const updateWithAdd = async (event) => {
    const i = document.querySelector('#firstString').value;
    const j = document.querySelector('#secondString').value;
    const k = document.querySelector('#thirdString').value;
    let ans = '';
    if (i.length < j.length && i.length < k.length){
      ans+=i;
    }
    else if((j.length<i.length)&&(j.length<k.length)){
      ans+=j;
    }
    else{
      ans+=k;
    }
    document.getElementById("result").innerHTML = "The smallest string is "+ans;
  }




