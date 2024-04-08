document.addEventListener('DOMContentLoaded', function () {

  // const string = 'this is a string';

  // function reverseString(str) {
  //     return str.split(' ').reverse().join(' ') 
  // }

  // console.log(reverseString(string))




  // const number = +prompt('enter the number')

  // function palindrome(check) {
  //    return check == check.toString().split('').reverse().join('') ? 'palindrome number' : 'not palindrome number'
  // }

  // console.log(palindrome(number))




  // let strCap = 'my name is pankaj and i live in punjab'

  // let newStr = strCap.split(' ').map(firstStr => {
  //     return firstStr[0].toUpperCase() + firstStr.slice(1)
  // })

  // console.log(newStr)




  // let string = 'my name pankaj rawat and i learn javascript and today is my day 3 of learning javascript'

  // function removeDuplicates(str) {
  //     let uniqueChars = '';

  //     for (let char of str) {
  //         if (uniqueChars.indexOf(char) === -1) {
  //             uniqueChars += char;
  //             console.log(222, uniqueChars)
  //         }
  //     }

  //     return uniqueChars;
  // }

  // console.log(removeDuplicates(string)); 




  // let lang = "javascript";
  // let mergeLang = ""

  // for (let i = 0; i < lang.length; i++) {
  //     let newLang = lang[i]
  //     mergeLang += newLang
  // }

  // console.log(mergeLang + ', ' + 'ruby')



  // const bigImg = document.querySelector('.bigImgSec img');
  // const smallImg = document.querySelectorAll('.smallImgContainer img');

  // bigImg.src = smallImg[0].src;
  // smallImg.forEach((img, index) => {
  //     img.addEventListener('click', function(){
  //         console.log(index , img.src)
  //         bigImg.src = img.src
  //     })
  // });



  //     const input = document.getElementById('textInput');
  //     const inputBtn = document.getElementById('inputBtn');

  //     function handleFetch() {
  //         const inputValue = input.value.trim(); 
  //         if (inputValue !== '') {
  //             console.log(inputValue);
  //         } else {
  //             console.log('Input field is empty.');
  //         }
  //     }

  //     inputBtn.addEventListener('click', handleFetch);

  //     input.onchange = handleFetch;

  // let removeFirst = multiArr[0].shift()
  // multiArr[0].push(removeFirst)



  // let names = ['pankaj', 'neelima', 'ankit', 'neetu', 'prikshit'];
  // let i = 0;

  // while (i < names.length) {
  //     console.log(names[i])
  //     i++
  // }


  // const arrayFunc = [1, 5, 10, 8, 6]

  // function callFunc(arr, callback) {
  //     let newArr = []

  //     for (let i = 0; i < arr.length; i++) {
  //         if (callback(arr[i])) {
  //             newArr.push(arr[i])
  //         }
  //     }
  //     return newArr;

  // }

  // const res = callFunc(arrayFunc, callback)

  // function callback(arrNum) {
  //     return arrNum > 5
  // }

  // console.log(res)

  const incre = document.getElementById('incre')
  const decre = document.getElementById('decre')
  const inputVal = document.getElementById('inputVal')

  let value = inputVal.value.trim()

  incre.addEventListener('click', incrementFunc)
  decre.addEventListener('click', decrementFunc)

  function incrementFunc() {
    value++
    inputVal.value = value;
  }

  function decrementFunc() {
    if (value > 0) {
      value--;
      inputVal.value = value;
    } else {
      inputVal.value = 0;
    }
  }

})


// function a(callback) {
//     callback('callback argument value')
// }

// function b(val) {
//     console.log('this is callback function')
//     console.log(val)
// }


// const fetchBtn = document.querySelector('button')

// fetchBtn.addEventListener('click', function(){
//     fetch('https://api.nationalize.io?name=nathaniel')
//     .then((res)=>{
//         console.log(res)
//         return res.json()
//     })
//     .then((result) =>{
//         const dataContainer = document.getElementById('showdata')
//         dataContainer.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
//     })
// })


function isPalindrome (str){
  let strStore = str.split('').reverse().join('')
  return strStore === str;
}
console.log(isPalindrome('snitins'))


function truncateString(str, maxLength) {
    if (str.length <= maxLength){
      return str
    }else {
      return str.slice(0, maxLength) + '...'
    }
}

console.log(truncateString('this is my practice session', 19))



let obj = {
  name : 'pankaj',
  address : {
    city : 'zirakpur',
    state : 'punjab'
  }
}

let {address: {city : cityname }} = obj

console.log('add', cityname)



function removeAsterisk(inputField) {
  var asterisk = inputField.parentElement.querySelector('.asterisk');
  if (inputField.value !== '') {
    asterisk.style.display = 'none';
  } else {
    asterisk.style.display = 'inline';
  }
}
