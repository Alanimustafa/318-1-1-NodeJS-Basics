// Part 1: Node Installation | Node has been installed previously.

// Part 2: Node Command Line Interface.
        // Node -v, npm -v, node -e and node -p have been tested on the terminal
        // index.js file has been created. and console.log has been added to the file

            //    console.log ("hello World!");

// Part 3: Node Package Manager - Installed 
        // npm has been itailized in this project.
        // npm start command has been added to the package.json file.
        // nodemon has been installed.

// Part 4: Creating a Server
    const http = require ('http'); // http variable module type (http) has been created using "require" keyword
    const hostname = "127.0.0.1"; // Defining the local address.
    const port = 3000; // defining the port 

    // crating a server for the hpp module using createServer method. 
    const server = http.createServer((req, res) => {
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
        res.write('<button onclick ="window.location.href="https://www.google.com"" >Open Google</button>');
        res.end();
    });

    // Using the listen method to make the http server listen to the communications using the port and the hostname.
    server.listen(port, hostname ,() => {
        console.log(`Server running at http://${hostname}:${port}`);
    });
