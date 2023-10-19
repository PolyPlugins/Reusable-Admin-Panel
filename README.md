# Description

<img src="https://www.polyplugins.com/plugins/reusable-admin-panel/preview.gif" alt="Reusable Admin Panel Preview" />

Our goal was to create a reuseable admin panel that can be used by various plugins without having to build or include classes of the same code in multiple plugins, while at the same time being quick to setup.

Download the [example plugin](https://www.polyplugins.com/reusable-admin-panel-example-plugin/) to get up and running as quick as possible.

## Is this on the WordPress Repository?
Yes, we do have it listed on the [WordPress Repository](https://wordpress.org/plugins/reusable-admin-panel/). We had a few suggestions come our way and wanted to make it easier for those that wanted to contribute to making Reusable Admin Panel even more awesome.

# Features

* Bootstrap
* Font-Awesome Field Info Buttons and Sidebar Info Helper
* jQuery Dynamic Navigation
* Validation using validator.js
* Automatic sanitization and saving of options
* Method built to easily get individual options
* Settings Grouped Under One Option in Database (Saved as Multi-Dimensional Array)
* Bootstrap Spinner Preloader (Prevents Layout Shifting on Load)
* Removes notices from other plugins when displaying admin panel
* Prevent users from deactivating by displaying a [sweetalert2](https://sweetalert2.github.io) to deactivate the plugin using the dependency.

# Fields

* Switch
* Text
* Email
* URL
* Password
* Number
* Dropdown
* Date
* Time
* Color
* [NEW] Dropdown Toggle - Additional fields can be added under a dropdown which show/hide based on selected option
* [NEW] Button - Add multiple buttons that can link or be targeted in custom JS


# Installation

1. Backup WordPress
1. Upload the plugin files to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


# Frequently Asked Questions

## Who is this built for?

This is purely for developers to help streamline their development process by making it easier to produce a settings page for their plugins.


## Screenshots

1. Plugin Panel
2. Plugin Panel expanded with help sidebar
3. Warning on deactivation

# Changelog

## 1.0.4

* Updated: Label styling to be next to the field for a cleaner look
* Bugfix: Tab indexing
* Bugfix: Handling of multiple fields for dropdown toggle
* Bugfix: Dropdown field not full width

## 1.0.3

* Added: dropdown_toggle field can add additional fields under a dropdown which show/hide based on selected option
* Added: Support for button fields
* Added: Support for custom JS to take advantage of button fields and other custom needs
* Added: Ability to use SweetAlert2 function in custom js
* Added: Plugin name to section titles
* Added: Ability to add classes to fields
* Optimized: Sanitization method
* Bugfix: Scroll to top on info button click

## 1.0.2

* Bugfix: Warning on initial activation
* Bugfix: Bootstrap 5 toggle button not displaying

## 1.0.1

* Bugfix: Default logo not showing if config is not set

## 1.0.0

* Initial Release