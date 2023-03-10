## UMedi
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/81988553/210102036-eeeb784a-b0b1-4956-ae0b-029530d11ee1.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/81988553/210102078-34ee14a4-2f14-4a62-b171-233e94149753.png">
<img width="1436" alt="image" src="https://user-images.githubusercontent.com/81988553/210105275-370a5e62-1810-4a0a-8852-23789f6bbe7f.png">

* [Description](#Description)
* [How to use](#How-to-use)
* [Technologies](#technologies)
* [Contents](#content)
* [Contributors](#Contributors)

## Description
Never forget to take your meds and pills again with the MUST HAVE pill reminder, UMEDI!
## How-to-use
https://comp1800---term-project.web.app/
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* Firebase
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url
├── template.html            # Template file for creating other html files
└── README.md
└── Template.html            # template for all html pages after user signin

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── html                     # Folder for all html that are displaying content.
    /about                   # HTML for the about page of the devs.
    /addmedication           # HTML adding new medications for the user.
    /alarmclock              # HTML for displaying an alarm, setting alarms, and deleting alarms.
    /FAQ                     # HTML for commonly asked questions
    /history                 # HTML for displaying the current medication the user
    /login                   # HTML for when the user is signing up or logging in
    /main                    # HTML for when the user is logging in
    /medication              # HTML editing the current medications that the user has editing
    /result                  # HTML for using when the user has added a new medication.
├── images                   # Folder for images, referenced from https://fonts.google.com/icons
    /alarm.png               # Icon for alarm
    /clock.svg               # Functioning alarm clock displaying current local time
    /medicine.png            # Icon for medicine
    /ringtone.mp3            # Ringtone for alarm
├── scripts                  # Folder for scripts
    /addmedication.js        # JS that grabs the current input from the user, and will store that into a database as well as link
    /alarmclock.js           # JS that makes uses various function to get and delete collections
    /authentication.js       # JS that uses firebase authentication for users to log in
    /history.js              # JS to get document information and show user
    /main.js                 # JS to read daily quote, see who is currently logged in and log-out user
    /medication.js           # JS get and save new information of the user
    /skeleton.js             # JS used to grab nav and footer html
├── styles                   # Folder for styles
    /Aboutstyle.css          # CSS to center text
    /Alarmstyle.css          # CSS for alarm page
    /FAQstyle.css            # CSS center text on FAQ
    /HistoryStyle.css        # CSS for history
    /main.css                # CSS to center text and added icons
    /Resultstyle.css         # CSS to center results
└──

Firebase hosting files: 
├── .firebaserc...

Documentation:
├── https://cloud.google.com/firestore/docs
├── https://devdocs.io/javascript/
├── https://getbootstrap.com/docs/4.1/getting-started/introduction/


```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation

## Contributors
* Helen Liu (https://github.com/schwi1996)
* Sukhraj Sidhu (https://github.com/ssidhu271)
* Eric Cho (https://github.com/chosm7489)
