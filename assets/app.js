var longestConsecutive = function(nums) {
  let set = new Set();
  for (let ele of nums) {
    set.add(ele);
  }
  let maxCount = 0;
  for (let ele of nums) {
    if (!set.has(ele - 1)) {
      let count = 0;
      while (set.has(ele)) {
        ele++;
        count++;
      }
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
};

document.getElementById("submit").addEventListener("click", function() {
  calculateLongestSequence();
});

document.getElementById("intervalsInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    calculateLongestSequence();
  }
});

function calculateLongestSequence() {
  const input = document.getElementById("intervalsInput").value;
  const nums = JSON.parse(input);
  const longestSequence = longestConsecutive(nums);
  document.getElementById("output").innerText =
    "Length of Longest Consecutive Sequence: " + longestSequence;
}

// Add this script to clear the input field on page load
document.addEventListener('DOMContentLoaded', function() {
  var intervalsInput = document.getElementById('intervalsInput');
  intervalsInput.value = ''; // Set the input value to an empty string
});
