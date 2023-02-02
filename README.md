# Tippin
Full Stack Web Solution designed specifically for small service-based businesses. With features including customer database, an efficient check-in process that rewards customer loyalty, and an instant messaging system for open communication.

Link to Project: http://tippin.io/

Login: test@example.com Password: password

![checkin](https://user-images.githubusercontent.com/11216742/173740397-5c3c2fcf-c5a7-44ff-ac22-507332c5db40.png)

# How It's Made:

**Front End**

Tech used: React, Redux, CSS, SASS, Websocket

**Back End** 

Tech used: Node.js, Express, MongoDB, Twilio API, Websocket

Tippin was built using the MERN (MongoDB, Express.js, React, and Node.js) stack. The goal was to create a platform where business owners could store their customer information inside of a database, to reward loyal customers, and to send/receive text messages from inside their web browser.

On the back-end, I set up a Node.js server using Express.js for API routes. The data was stored in a MongoDB database where i utilized Mongoose for access and manipulation of the data. For security measures I implemented JWT authentication, password hashing, and data validation.

The front-end was developed using React and Redux, with a focus on creating an smooth and simple user experience. The interface lets owners manage their customer database, coupons, and allows customers to checkin to their favorite stores. The responsive design made the application accessible on desktop, tablets, and mobile devices.

In addition, I integrated Twilio (third-party API) to allow owners to receive and send text messaging. A Websocket server was used to publish incoming messages to front end subscribers allowing for real time communication. The application was deployed on cloud platforms, using a combination of AWS and Cyclic.

# Optimizations
 1. Asset optimization: Implemented lazy loading where assets are loaded only when needed which reduces loading times.
 
# Lessons Learned:

Developing Tippin taught me several lessons that have helped me grow as a Software Engineer:

1. Importance of planning and organizing: Before starting a project, design your database schema, plan overall architecture and design, and prioritize features. This helps you stay focused and prevents you from getting overwhelmed.
2. API's: Utilizing API's can save alot of development time.
3. Effective error handling: Learn how to troubleshoot and fix issues that come up to maintain a stable and reliable application.
4. Testing: Testing throughout the development process helps catch and resolve bugs early on, improving quality of Software.
5. User Experience: I learned the value of creating more detailed error messages for better user experience.
6. Security: Pay close attention to data that is being passed, only show what is needed to insure privacy and security.

These lessons have helped me grow as a Software Engineer and reminded me of how important it is to continuously learn which allows me to create more value in my work.

Copyright (c) 2021 Jason Le
