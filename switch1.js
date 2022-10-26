window.onload = initAll;

function initAll() {
    console.log(navigator.userAgent)
  switch (navigator.platform) {
    case "Win32":
      alert("u r running windows");
      break;
    case "MacPPC":
      alert("u r running MacPPC");
      break;
    case "MacIntel":
    case "X11":
      alert("u r running Mac Intel");
      break;
    default:
      alert("u r running" + navigator.platform);
  }
}

