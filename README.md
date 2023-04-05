# Quote-Download-Box
This JavaScript code selects various elements from the HTML page and adds event listeners to them.

First, it selects the quote and author input fields from the HTML using document.querySelector("[name=quote]") and document.querySelector("[name=author]") respectively. It also selects the app, quote-box, author-box, change-color, and download-jpeg elements using document.getElementById.

It then defines an array of colors and adds an event listener to the changecolor element that changes the background color of app to a random color from the colors array.

Next, it adds event listeners to the quoteinput and authorinput elements that update the text content of quote and author respectively whenever the user types something into the input fields.

Finally, it adds an event listener to the downloadBtn element that downloads the current state of app as a JPEG image when clicked. This is done using the html2canvas library, which takes a screenshot of a web page and returns a canvas element. The canvas is then converted to a data URL and downloaded using the a element's download and href attributes.


<img width="885" alt="Screenshot 2023-04-06 at 12 06 53 AM" src="https://user-images.githubusercontent.com/95907789/230177208-754d167f-4185-424a-ac94-7210be6d7682.png">
