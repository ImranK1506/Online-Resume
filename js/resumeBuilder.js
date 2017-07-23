// Header
var formattedName = HTMLheaderName.replace("%data%", "Imran Khan");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// Bio info
var bio = { 
	name : "Imran Khan",
	role : "Front-end Developer",
	contacts : {
		phone : 0031637336418,
		mail : "m_imran_khan@me.com",
		github : "https://github.com/ImranK1506",
		location : "Amsterdam"
	},
	welcome : "Welcome, have a look at my resumé!",
	bioPic : "images/cvpic.png",
	skills : ["| HTML5 |", "| CSS3 |", "| JavaScript |", "| jQuery |"]
};

// Display bio
var bioPic = bio.bioPic;
var welcomeMessage = bio.welcome;
var contactInfoPhone = bio.contacts.phone;
var contactInfoMail = bio.contacts.mail;
var contactInfoGithub = bio.contacts.github;
var contactInfoLocation = bio.contacts.location;

formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
formattedContactInfoPhone = HTMLmobile.replace("%data%", contactInfoPhone);
formattedContactInfoMail = HTMLemail.replace("%data%", contactInfoMail);
formattedContactInfiGithub = HTMLgithub.replace("%data%", contactInfoGithub);
formattedContactLocation = HTMLlocation.replace("%data%", contactInfoLocation);

$(".flex-box").append(formattedContactInfoPhone, formattedContactInfoMail, formattedContactInfiGithub, formattedContactLocation);
$("#header").append(formattedBioPic, formattedWelcomeMessage);

// Work info

var work = {
	jobs : [
	{
		employer : "KPN BV.",
		title : "Supervisor Service Experience Center",
		location : "Amsterdam",
		dates : "2014-present",
		description : ["Supervising a team of 25", "Coaching", "SPOC to stakeholders"]

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
	},
	]
}