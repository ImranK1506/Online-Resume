// Bio info
var bio = { 
	name : "Imran Khan",
	role : "Front-end Developer",
	contacts : {
		phone : "+31637336418",
		mail : "m_imran_khan@me.com",
		github : "https://github.com/ImranK1506",
		location : "Amsterdam, The Netherlands"
	},
	welcome : "Welcome, have a look at my resumé!",
	bioPic : "images/cvpic.png",
	skills : ["| HTML5 |", "| CSS3 |", "| JavaScript |", "| jQuery |"]
};

// Display bio
var name = bio.name;
var role = bio.role;
var bioPic = bio.bioPic;
var welcomeMessage = bio.welcome;
var contactInfoPhone = bio.contacts.phone;
var contactInfoMail = bio.contacts.mail;
var contactInfoGithub = bio.contacts.github;
var contactInfoLocation = bio.contacts.location;

formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
formattedContactInfoPhone = HTMLmobile.replace("%data%", contactInfoPhone);
formattedContactInfoMail = HTMLemail.replace("%data%", contactInfoMail);
formattedContactInfiGithub = HTMLgithub.replace("%data%", contactInfoGithub);
formattedContactLocation = HTMLlocation.replace("%data%", contactInfoLocation);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$(".flex-box").append(formattedContactInfoPhone, formattedContactInfoMail, formattedContactInfiGithub, formattedContactLocation);
$("#header").append(formattedBioPic, formattedWelcomeMessage);

// Education info
var education = {
	schools : [
	{
		school : "Hogeschool INHolland",
		major : "Communication Science",
		degree : " ",
		location : "Diemen",
		dates : "2007-2009",
		url : "https://www.inholland.nl/"
	},
	{
		school : "Hogeschool van Amsterdam",
		major : "Commputer Science",
		degree : " ",
		location : "Amsterdam",
		dates : "2005-2006",
		url : "http://www.hva.nl/"
	}
	],
	courses : [
	{
		 title : "Front-End Web Development Nanodegree",
		 school : "Udacity",
		 dates : "03/2017-present",
		 url : "http://www.udacity.com"
	},
	{
		 title : "Web Development 101",
		 school : "The New York Code and Design Academy",
		 dates : "04/2016-08/2016",
		 url : "https://nycda.com/"
	}]
}

// Display schools
function bundleEducation() {
	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);
		formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].school);
		formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	
		formattedSchoolTitle = formattedSchoolName + formattedSchoolLocation + formattedSchoolMajor + formattedSchoolDate +formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolTitle);
	}
}

bundleEducation();

// Work info
var work = {
	jobs : [
	{
		employer : "KPN BV.",
		title : "Supervisor Service Experience Center",
		location : "Amsterdam",
		dates : "2014-present",
		description : ["Supervising a team of 25", " Coaching", " SPOC to stakeholders"]

	},
	{
		employer : "Telfort",
		title : "Backoffice, fixed services",
		location : "Amsterdam",
		dates : "2011-2014",
		description : ["Resolving incident and issues concerning fixed services", "Writing and exploiting workinstructions", "Lead escalation during major incidents"]
	},
	{
		employer : "Telfort",
		title : "Specialist internet, 2nd line services",
		location : "Amsterdam",
		dates : "2009-2011",
		description : ["Deputy manager of service", "Resolving incident and issues concerning fixed services", "Lead escalation during major incidents"]
	}
	]
};

// Display work
function bundleWork() {
	for (job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);
		formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription;
		$(".work-entry:last").append(formattedEmployerTitle);
	}
}

bundleWork();
