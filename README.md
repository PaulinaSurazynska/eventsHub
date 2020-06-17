# eventsHub
Repo consist of two folders:
- auth-ap - actual angular application
- server - simple node server to handle API request

## still to do :
 * encrypt the password => don't store the password in DB as simple string
 * do not return the password when returning user details
 * improve registration => check for existing emails
 * error handling
 * create a new event => new view where registered users can create a new events
 * fetch events from the database not from local file
 * events created by specific user => new view and dedicated to it API
 
#### to read more about using rouee guards (as a part of the concept)
https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
