// Create a new blank iframe
var newIframe = document.createElement('iframe');
// Set attributes for iFrame (do whatever suits)
newIframe.width = '100%'; newIframe.height = '100%';
// This for the src makes it 'friendly'
newIframe.src = 'about:blank'; 

// Use whatever method is needed to insert the iframe where you want it 
document.body.appendChild(newIframe);
// Make this reference your hidden div containing the markup you want to insert
var getHTML = $('#HTMLblock').html();
// List any CSS you want to reference within the iframe
var CSS = '<link rel="stylesheet" href="assets/less/style.less">';
// List any JS you want to reference within the iframe
var JS = '<script src="assets/less/less.min.js"></script>';
// Now sticch it all together into one thing to insert into the iframe
var myContent = '<!DOCTYPE html>' + '<html><head><title>Rendered HTML from Pattern</title>' + CSS + '</head><body>' + getHTML + JS + '</body></html>';

// Use the JavaScript methods to write to the iFrame, then close it
newIframe.contentWindow.document.open('text/html', 'replace');
newIframe.contentWindow.document.write(myContent);
newIframe.contentWindow.document.close();