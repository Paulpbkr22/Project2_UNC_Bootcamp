# Speakeasy
An exclusive, invitation-only application that allows users to share information and comments about companies or organizations. 

# Getting Started
![Screenshot](/public/Images/screenshot.jpg)
To utilize this application, please visit the link below. Please use the following login credentials: email: user@gmail.com password: userpassword. 

# Live Link
[Visit on Heroku](https://floating-harbor-41249.herokuapp.com/)

# Running Locally
- First run <code>npm i</code> to install of the node modules
- Navigate to the <code>db</code> folder within the directory
- Either open MySQL WorkBench or run <code>mysql -u root -p</code> in the command line. 
- Input your password 
- Then while in <code>mysql></code>, run <code>source schema.sql</code> to create the table. 
- Then to create seeds locally, please run the seeders file using node eeders/20191223212251-demo--user.js 
- Feel free to update the seeds with your own data. 
- Run <code>node server.js </code>
- Visit the port utilized in the code (<code> PORT: 3030 </code>) on your local machine and enjoy!

# Built Using
- Node.js
- Express.js
- jQuery
- Passport.js
- shortId npm pacakage
- [BootStrap](http://getbootstrap.com/)
- MySQL
- JawsDB


## Authors
- Jerrica VanAlstyne
- Ceara Owre 
- Paul Baker
- Brandon Rosser
