window.addEventListener("DOMContentLoaded", () => {
  ans = prompt("Enter a number", "");

  try {
    if (!ans || isNaN(ans) || ans < 0) {
      throw new Error("Not a valid Number");
    } else if (ans == 0) {
      alert("we dont root ", ans);
      
    } else {
        alert("The square root of " + ans + " is" + Math.sqrt(ans).toFixed(2));
    }
  } catch (err) {
    alert(err.message);
  }
});
