<b>The purposes of this application are:</b>

  1) To help a local nonprofit move away from being a local server dependent sign-in application to a web application.
  
  2) Selfishly, for me to learn react and redux. 
  The application itself is not naturally a single page application, so it was forced to be one in many ways.

<b>See the app in action:</b> https://signin-c60f1.firebaseapp.com/

  To use the application and view sign-in/out logs, please log into the account. 
  
  The email is my email. 
  
  The password is "password".
  
  Feel free to modify employees, modify programs and search for a specific person.

<b>Main concern:</b> Some have asked if a person can pretend to be a volunteer/employee and sign into the application from anywhere as he/she chooses. The application does require signing into the account in order to be able to sign-in and out thanks to Firebase's feature of read/write authorization. So, although a person can fill out a form without the application being signed in, data is not recorded. In practice, only admin will be able to open the application in a designated device to allow log-in.

<b>Future adjustments/improvements (scheduled for December 2016):</b>
  The forms will be broken into smaller individual components of form types.
  For example, instead of repeating exact same codes in clients and volunteers, 
  I will break the forms into input component, select component etc. Each type of form will then call these components.
  Each component will handle its own validation if applicable.
  
  Volunteer hours will be modified to render correctly.
  
  I will look into smoother transition as feedback for form submission.
  
  Dynamic resizing? 

<b>It takes a Youtube village:</b>
I used the following links to learn Redux.
<ul>
<li><a href="https://www.youtube.com/watch?v=hmwBow1PUuo&list=PLuykYQ1am9zY9-O-Y8w7uISxLjQLcPmN4" target="_blank">Wes Bos's  tutorials</a> 
- Really great series on redux and react that goes through the entire process. I used this as a guide in building the sign-in app.</li>
<li><a href="https://www.youtube.com/watch?v=UHJq5NOtNG4" target="_blank">Rally Coding - Firebase and Redux</a> - There was a major delay in my working with redux/react 
because I was not sure of how to incorporate persistent data into this architecture. This video demystified that for me. Now, I know how to incorporate databases in general into redux. 
The tutorial is using an older version of Firebase. This application is using the newest version of Firebase due to user authentication.</li>
<li><a href="https://www.youtube.com/watch?v=1QI-UE3-0PU" target="_blank">Rally Coding - Redux Thunk</a> - Demystified async actions in redux, which allows for returning of a function instead of payload.</li>
<li><a href="https://www.youtube.com/watch?v=yA1Lw1U5278" target="_blank">React Router</a> - Great tutorial on react-router.</a>
<li>And of course, good ol' vanilla documentation. </li>
</ul>
