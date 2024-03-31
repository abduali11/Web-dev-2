document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("target");

  let currentdate = new Date();

  let datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" + // Kuukaudet alkavat 0:sta
    currentdate.getFullYear() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes();

  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    browserName = "Opera";
    browserVersion = navigator.userAgent.match(/(Opera|OPR)\/(\d+\.\d+)/)[2];
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    browserName = "Chrome";
    browserVersion = navigator.userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    browserName = "Safari";
    browserVersion = navigator.userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    browserName = "Firefox";
    browserVersion = navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    browserName = "IE";
    var versionMatch = navigator.userAgent.match(/(MSIE |rv:)(\d+\.\d+)/);
    if (versionMatch) {
      browserVersion = versionMatch[2];
    }
  } else if (
    navigator.userAgent.indexOf("Trident") != -1 ||
    !!document.documentMode == true
  ) {
    browserName = "IE";
    var versionMatch = navigator.userAgent.match(/(MSIE |rv:)(\d+\.\d+)/);
    if (versionMatch) {
      browserVersion = versionMatch[2];
    }
  } else {
    browserName = "Unknown";
    browserVersion = "Unknown";
  }

  function appendToTarget(teksti) {
    const p = document.createElement("p");
    p.textContent = teksti;
    target.appendChild(p);
  }

  appendToTarget(`Päivämäärä ja aika: ${datetime}`);
  appendToTarget(`Selaimen nimi ja versio: ${browserName} ${browserVersion}`);
  appendToTarget(`Käyttöjärjestelmä: ${navigator.platform}`);
  appendToTarget(
    `Jäljellä olevaaa näytön resoluutiota: ${screen.availWidth}x${screen.availHeight}`
  );
  appendToTarget(
    `Käyttäjän näytön resoluutio: ${screen.width}x${screen.height}`
  );
});
