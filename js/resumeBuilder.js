var bio = {"name" : "Sebastian Ortiz",
    "role" : "web developer",
    "contacts" : { "mobile": "(408)204-1904",
        "email": "sebortiz@gmail.com", 
        "github": "http://www.github/trtg",
        "twitter": "@iamsebortiz",
            "location": "Silicon Valley"},
    "welcomeMessage": "", 
    "skills": ["python","C"],
    "biopic": "stuff",
    "display": function() {
        var phoneNumber = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.email);
        var github = HTMLgithub.replace("%data%", bio.contacts.email);
        var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(phoneNumber).append(email).append(twitter).append(github).append(myLocation);
    } 
} 

var education = {
    "schools":[
    { 
        "name": "MIT",
        "location": "Cambridge, MA",
        "degree": "BS",
        "majors": ["EECS"],
        "dates":1234, 
        "url": "http://www.mit.edu"
    },
    { 
        "name": "Cornell",
        "location": "Ithaca,NY",
        "degree": "MEng",
        "majors": ["ECE"],
        "dates":1234, 
        "url": "http://www.cornell.edu"
    }
    ],
        "onlineCourses": [ 
        {
            "title": "Front-end web dev nanodegree",
            "school": "Udacity",
            "date": 1234,
            "url": "http://www.udacity.com"
        },
        {
            "title": "Front-end web dev nanodegree",
            "school": "Udacity",
            "date": 1234,
            "url": "http://www.udacity.com"
        }
    ],
        display: function() {
            /*var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);*/
        } 
}

/*var work = {
    [{"employer": "Agilent/Avago",
        "title": "Field Applications Engineer", 
        "location": "Santa Clara, CA", 
        "dates":"1234-1234", 
        "description": "Solving other companies problems" },
    {"employer": "Applied Signal Technology",
        "title": "Member of technical staff", 
        "location": "Sunnyvale, CA", 
        "dates":"1234-1234", 
        "description": "DSP stuff" }
    ],
display: function() {
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);
        } 
}
*/
myName = HTMLheaderName.replace("%data%", bio.name);
myRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(myRole);
$("#header").prepend(myName)

bio.display();
$( function() {
education.display();
//work.display();
//projects.display();
}
);
