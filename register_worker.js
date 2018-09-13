 // Check that service workers are registered
 if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./build/sw.js');
  });
  // navigator.serviceWorker.register('/sw.js').then(function(){
  //   console.log("service worker is working");
  // });
}