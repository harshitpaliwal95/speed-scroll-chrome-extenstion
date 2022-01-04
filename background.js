let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
  document.querySelector("#speed").addEventListener("click", () => {
    console.log("clicked speed");
  });
});
