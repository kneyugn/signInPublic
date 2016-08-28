<b>The purposes of this application are:</b>

  1) To help a local nonprofit move away from local-server dependent sign-in application to a web application.
  
  2) Selfishly, for me to learn react and redux. 
  The application itself is not naturally a single page application, so it was forced to be one in many ways.

<b>See the app in action:</b> https://signin-c60f1.firebaseapp.com/

  To view sign-in/out logs, please log into the account as admin. 
  
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
