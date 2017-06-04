resource.menu_builder.setupMenu(3);

let panel1 = resource.menu_builder.createPanel(0, 1, 1, 2, 2, false, "Class Menu");
let panel2 = resource.menu_builder.createPanel(1, 1, 1, 2, 2, false, "Skin Menu");
let panel3 = resource.menu_builder.createPanel(2, 1, 1, 2, 2, false, "Location Menu");

let button1 = resource.menu_builder.createButton(0, 16, 11, 4, 1, 0, "Next Page");
let button2 = resource.menu_builder.createButton(1, 10, 11, 4, 1, 0, "Previous Page");
let button3 = resource.menu_builder.createButton(1, 16, 11, 4, 1, 0, "Next Page");
let button4 = resource.menu_builder.createButton(2, 10, 11, 4, 1, 0, "Previous Page");

let civilbutton = resource.menu_builder.createButton(0, 10, 11, 4, 1, 0, "Civil Class");
let militarybutton = resource.menu_builder.createButton(0, 16, 11, 4, 1, 0, "Military Class");
let stuntbutton = resource.menu_builder.createButton(0, 10, 11, 4, 1, 0, "Stunt Class");
let rescuebutton = resource.menu_builder.createButton(0, 16, 11, 4, 1, 0, "Rescue Class");
let repairbutton = resource.menu_builder.createButton(0, 10, 11, 4, 1, 0, "Mechanic Class");
let medicbutton = resource.menu_builder.createButton(0, 16, 11, 4, 1, 0, "Medic Class");
let firebutton = resource.menu_builder.createButton(0, 10, 11, 4, 1, 0, "Fire Fighter Class");
let securitybutton = resource.menu_builder.createButton(0, 16, 11, 4, 1, 0, "Security Class");
let hostbutton = resource.menu_builder.createButton(0, 16, 11, 4, 1, 0, "Air Host Class");
let passengerbutton = resource.menu_builder.createButton(0, 16, 11, 4, 1, 0, "Passenger Class");

args = [1];
buttons.addArgs(args);
button.function(resource.menu_builder.nextPage);

resource.menu_builder.openMenu(true, false, false, true, false);