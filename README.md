# NodeJS-CapStone-project-on-SideHustle_Group-42
# 1st NodeJs Capstone project performed by group 42

We build a server that fulfill the following routes/ : Home route , /about : About route, /sys : System route

When hitting the home route, the server serves back the index.html page with the status code set to 200 and the content type to text/html

When hitting the about route, the server serves back the about.html page with the status code set to 200 and the content type to text/html

When hitting the system route, the server should save information about the os in a file named osinfo.json with the status code set to 201, the content type to text/plain with the message "Your OS info has been saved successfully!" written back to the user. 

The osinfo.json file should contain the following attributes:
hostname: the os host name,
platform: the os platform,
architecture: the os architecture,
numberOfCPUS: the os number of cores,
networkInterfaces: os network interfaces,
uptime: os uptime

Hitting any other route which is not known by our server, we serve back the 404.html page with the status code set to 404

we ensure the logic is inside server.js file
