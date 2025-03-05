console.log(document.cookie);
document.cookie = 'username=kokos';
document.cookie = 'id=100500';
document.cookie = 'age=23';

let cookies = document.cookie.split(';');
console.log(cookies);
let obj = {}
for (const cookie of cookies) {
  console.log(cookie);
  let separatedCookieArray = cookie
    .trim()
    .split('=');

  console.log(separatedCookieArray);

  obj[separatedCookieArray[0]] = separatedCookieArray[1]
}
console.log(obj);

