var navigation = responsiveNav(".nav-collapse", {
  animate: true,                    // Boolean: Use CSS3 transitions, true or false
  transition: 500,                  // Integer: Speed of the transition, in milliseconds
  label: "Menu",                    // String: Label for the navigation toggle
  insert: "after",                 // String: Insert the toggle before or after the navigation
  customToggle: "#nav-toggle",                 // Selector: Specify the ID of a custom toggle
  enableFocus: true,
	enableDropdown: true,
	openDropdown: '<svg class="icon"><use xlink:href="#icon-plus" /></svg><span class="sr-text">Open sub menu</span>',
	closeDropdown: '<span class="sr-text">Close sub menu</span>',
  closeOnNavClick: true,            // Boolean: Close the navigation when one of the links are clicked
  openPos: "relative",              // String: Position of the opened nav, relative or static
  navClass: "nav-collapse",         // String: Default CSS class. If changed, you need to edit the CSS too!
  navActiveClass: "js-nav-active",  // String: Class that is added to <html> element when nav is active
  jsClass: "js-nav",                // String: 'JS enabled' class which is added to <html> element
});


var navicon = document.getElementById('#nav-toggle');

    navicon.onmousedown = function() {
    navicon.setAttribute("class", "active");
};