## [Explaining 8 Popular Network Protocols in 1 Diagram](https://blog.bytebytego.com/p/ep80-explaining-8-popular-network)

Network protocols are standard methods of transferring data between two computers in a network.

![ep80-explaining-8-popular-network.gif](https://raw.githubusercontent.com/duhongming1990/duhongming1990.github.io/master/images/ep80-explaining-8-popular-network.gif)

### HTTP (HyperText Transfer Protocol)

HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the
Web and it is a client-server protocol.

### HTTP/3

HTTP/3 is the next major revision of the HTTP. It runs on QUIC, a new transport protocol designed for mobile-heavy
internet usage. It relies on UDP instead of TCP, which enables faster web page responsiveness. VR applications demand
more bandwidth to render intricate details of a virtual scene and will likely benefit from migrating to HTTP/3
powered by QUIC.

### HTTPS (HyperText Transfer Protocol Secure)

HTTPS extends HTTP and uses encryption for secure communications.

### WebSocket

WebSocket is a protocol that provides full-duplex communications over TCP. Clients establish WebSockets to receive
real-time updates from the back-end services. Unlike REST, which always “pulls” data, WebSocket enables data to be
“pushed”. Applications, like online gaming, stock trading, and messaging apps leverage WebSocket for real-time
communication.

### TCP (Transmission Control Protocol)

TCP is is designed to send packets across the internet and ensure the successful delivery of data and messages over
networks. Many application-layer protocols build on top of TCP.

### UDP (User Datagram Protocol)

UDP sends packets directly to a target computer, without establishing a connection first. UDP is commonly used in
time-sensitive communications where occasionally dropping packets is better than waiting. Voice and video traffic are
often sent using this protocol.

### SMTP (Simple Mail Transfer Protocol)

SMTP is a standard protocol to transfer electronic mail from one user to another.

### FTP (File Transfer Protocol)

FTP is used to transfer computer files between client and server. It has separate connections for the control channel
and data channel.

## [What happens when you type a URL into your browser?](https://blog.bytebytego.com/p/what-happens-when-you-type-a-url)

![what-happens-when-you-type-a-url.gif](https://raw.githubusercontent.com/duhongming1990/duhongming1990.github.io/master/images/what-happens-when-you-type-a-url.gif)

Let’s look at the process step by step.

Step 1: The user enters a URL (www. bytebytego. com) into the browser and hits Enter. The first thing we need to do is
to translate the URL to an IP address. The mapping is usually stored in a cache, so the browser looks for the IP address
in multiple layers of cache: the browser cache, OS cache, local cache, and ISP cache. If the browser couldn’t find the
mapping in the cache, it will ask the DNS (Domain Name System) resolver to resolve it.

Step 2: If the IP address cannot be found at any of the caches, the browser goes to DNS servers to do a recursive DNS
lookup until the IP address is found.

Step 3: Now that we have the IP address of the server, the browser sends an HTTP request to the server. For secure
access of server resources, we should always use HTTPS. It first establishes a TCP connection with the server via TCP
3-way handshake. Then it sends the public key to the client. The client uses the public key to encrypt the session key
and sends to the server. The server uses the private key to decrypt the session key. The client and server can now
exchange encrypted data using the session key.

Step 4: The server processes the request and sends back the response. For a successful response, the status code is 200.
There are 3 parts in the response: HTML, CSS and Javascript. The browser parses HTML and generates DOM tree. It also
parses CSS and generates CSSOM tree. It then combines DOM tree and CSSOM tree to render tree. The browser renders the
content and display to the user.

[How do companies ship code to production?](https://blog.bytebytego.com/p/ep81-how-companies-ship-code-to-production)
![ep81-how-companies-ship-code-to-production.gif](https://raw.githubusercontent.com/duhongming1990/duhongming1990.github.io/master/images/ep81-how-companies-ship-code-to-production.gif)
