/* window.addEventListener('load', (event) => {
    chrome.tabs.executeScript(null, {
      file: 'content.js',}, () => {
        connect()
    });
    });

  function connect() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const port = chrome.tabs.connect(tabs[0].id);
      port.postMessage({ function: 'html' });
      port.onMessage.addListener((response) => {
        html = response.html;
        title = response.title;
        description = response.description;
      });
    });
  } */

  let mute = document.getElementById('mute');
  
  mute.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd > div.q2u11 > div.a1GRr > div > div > div").style.pointerEvents = "none"'});
    });
  };