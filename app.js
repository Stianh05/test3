// Importerer nødvendige biblioteker og oppretter en express-app
const express = require("express");
const sqlite3 = require("better-sqlite3"); // Bedre versjon av SQLite
const db = sqlite3("tickets.db"); // Oppretter en database-tilkobling
const path = require("path"); // Hjelpebibliotek for å håndtere filstier
const hbs = require("hbs"); // Hjelpebibliotek for å generere HTML-templates
const app = express(); // Oppretter en ny express-app

// Setter opp middleware for statiske filer og form-data
const publicDirectoryPath = path.join(__dirname, "/public");
app.use(express.static(publicDirectoryPath));
app.use(express.urlencoded({ extended: true }));
app.use("/savegame", express.json());

// Setter opp templating med Handlebars
const viewPath = path.join(__dirname, "/views");
app.set("view engine", hbs);
app.set("views", viewPath);

/**
 * Rendrer / som er index nettsiden, brukt til å navigere når du har logget inn.
 */
app.get("/", (request, response) => {
	response.render("index.hbs", {
	});
});

app.get("/about", (request, response) => {
	response.render("about.hbs", {
	});
});

app.get("/team", (request, response) => {
	response.render("team.hbs", {
	});
});

app.get("/contact", (request, response) => {
	response.render("contact.hbs", {
	});
});

console.log("test")

// Define a route to handle form submission
app.post("/submit", (request, response) => {
    const { full_name, email, phone_number, message } = request.body;
    console.log("test2")
  
    // Insert the form data into the database
    const insertQuery = "INSERT INTO tickets (full_name, email, phone_number, message) VALUES (?, ?, ?, ?)";
    db.prepare(insertQuery).run(full_name, email, phone_number, message);
    console.log("testaaaaaaa")

    // Log the form data to the console
    console.log("Form data received and saved to the database:");
    console.log("Full Name:", full_name);
    console.log("Email:", email);
    console.log("Phone Number:", phone_number);
    console.log("Message:", message);

    // Redirect to a thank you page or another appropriate page
    response.redirect("/thankyou");
});




app.listen("3000", () => {
	console.log("localhost:3000/login");
});