const ulSessionLog = document.getElementsByClassName('sessionLogTable')[0];

const sessionList = JSON.parse(localStorage.getItem('sessionList')) || [];
for (const session of sessionList) {
  const liLog = document.createElement('li');
  for (const key in session) {
    const divTime = document.createElement('div');
    divTime.innerHTML = session[key];
    liLog.appendChild(divTime);
  }

  ulSessionLog.appendChild(liLog);
}





