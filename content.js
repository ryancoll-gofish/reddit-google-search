let subredditCount = {};

// Function to extract subreddit names
function extractSubreddits() {
  const results = document.querySelectorAll('a[href*="/r/"]');
  results.forEach(result => {
    const subreddit = result.href.match(/\/r\/(\w+)/);
    if (subreddit) {
      const name = subreddit[1];
      subredditCount[name] = (subredditCount[name] || 0) + 1;
    }
  });

  // Save data to local storage
  chrome.storage.local.set({ subreddits: subredditCount });
}

// Run the extraction
extractSubreddits();
