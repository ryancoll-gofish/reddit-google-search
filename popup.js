chrome.storage.local.get('subreddits', function(data) {
  const resultsDiv = document.getElementById('results');
  const subreddits = data.subreddits || {};
  
  for (let [subreddit, count] of Object.entries(subreddits)) {
    const div = document.createElement('div');
    div.textContent = `${subreddit}: ${count}`;
    resultsDiv.appendChild(div);
  }
});
