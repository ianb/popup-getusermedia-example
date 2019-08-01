function showStatus(id) {
  for (let el of document.querySelectorAll(".status")) {
    el.style.display = "none";
  }
  document.getElementById(id).style.display = "";
}

function log(...args) {
  let textArgs = args.join(" ");
  console.error(...args);
  document.querySelector("pre").textContent += "\n" + textArgs;
}

async function init() {
  showStatus("permission");
  try {
    log("Requesting audio");
    let stream = await navigator.mediaDevices.getUserMedia({audio: true});
    showStatus("ok");
    log(`Received audio: ${stream}`);
  } catch (e) {
    if (e.name === "NotAllowedError") {
      showStatus("denied");
    } else {
      showStatus("failed");
    }
    console.error("Failed to getUserMedia:", e);
    throw e;
  }
}

init();
