var bio = {"name" : "Sebastian Ortiz",
    "role" : "web developer",
    "contacts" : { "mobile": "(408)204-1904",
        "email": "sebortiz@gmail.com", 
        "github": "http://www.github/trtg",
        "twitter": "@iamsebortiz",
        "location": "Silicon Valley"},
    "welcomeMessage": "lorem ipsum dolor ait amet etc etc etc.", 
    "skills": ["python","C"],
    "biopic": "stuff",
    "display": function() {
        var phoneNumber = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.email);
        var github = HTMLgithub.replace("%data%", bio.contacts.email);
        var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(phoneNumber).append(email).append(twitter).append(github).append(myLocation);
        
        myName = HTMLheaderName.replace("%data%", bio.name);
        myRole = HTMLheaderRole.replace("%data%",bio.role);
        $("#header").prepend(myRole);
        $("#header").prepend(myName)
            bioPic = HTMLbioPic.replace("%data%","http://placehold.it/320x240");
        $("#header").append(bioPic);
        welcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
        $("#header").append(welcomeMessage);
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(item){
            var oneSkill = HTMLskills.replace("%data%",item);
            $("#skills").append(oneSkill);
        });
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
            "title": "Full stack web dev nanodegree",
            "school": "Udacity",
            "date": 1234,
            "url": "http://www.udacity.com"
        }
    ],
        display: function() {
            //var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            //$(".work-entry:last").append(formattedLocation);
        } 
}
var work = { "jobs":[{"employer": "Agilent/Avago",
        "title": "Field Applications Engineer", 
        "location": "Santa Clara, CA", 
        "dates":"1234-1234", 
        "description": "Solving other companies problems" },
    {"employer": "Applied Signal Technology",
        "title": "Member of technical staff", 
        "location": "Sunnyvale, CA", 
        "dates":"1234-1234", 
        "description": "DSP stuff" },
    {"employer": "Lumo BodyTech",
        "title": "generalist developer", 
        "location": "Palo Alto, CA", 
        "dates":"1234-1234", 
        "description": "backend web development, ecommerce, random low level work" }
    ],
        display: function() {
            for(var job = 0, len = work.jobs.length;job<len;job++){
                $("#workExperience").append(HTMLworkStart);
                var employer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
                var title = HTMLworkTitle.replace("%data%",work.jobs[job].title);
                var description = HTMLworkDescription.replace("%data%",work.jobs[job].description);
                var dates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                $(".work-entry:last").append(employer+title);
                $(".work-entry:last").append(dates);
                $(".work-entry:last").append(formattedLocation);
                $(".work-entry:last").append(description);
            }
        } 
}

var projects = {"projects":[
    { "title": "magic keyboard",
        "dates":"1234-1234", 
        "description": "modified linux kernel module for bluetooth HID to apple trackpads",
        "images": ["http://www.placehold.it/320x240","http://www.placehold.it/320x240"]
    },
    { "title": "bluetooth scale",
        "dates":"1234-1234", 
        "description": "built bluetooth datalogging scale from scratch",
        "images": ["http://www.placehold.it/320x240","http://www.placehold.it/320x240"]
    }
    ],
        "display": function(){
            for(var project = 0, len = projects.projects.length;project<len;project++){
                $("#projects").append(HTMLprojectStart);
                var projectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
                var projectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
                var projectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

                $(".project-entry:last").append(projectTitle);
                $(".project-entry:last").append(projectDates);
                $(".project-entry:last").append(projectDescription);

                for(var image = 0, len = projects.projects[project].images.length;image<len;image++){
                    var projectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                    $(".project-entry:last").append(projectImage);
                }
            }
        }
}


bio.display();
work.display();
projects.display();
education.display();
