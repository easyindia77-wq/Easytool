// Basic script (future tools ke liye ready)

console.log("EasyTool Website Loaded");

// Example: click tracking
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("click",()=>{
    console.log("Tool Opened:", card.innerText);
  });
});