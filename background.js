chrome.webRequest.onCompleted.addListener(
  function(details) {
    // Handle the Google Search request
    console.log("Search request completed: ", details);
  },
  { urls: ["*://www.google.com/search*"] }
);
