# apo-aa

The intention of this repo is tocreate a single spot to store ui/ux javascript functions for Automation Anywhere web sites.

## folding.js
This script contains functions to collape and expand folding elements within the Automation Anywhere bot writing environment.

* **foldTop()**: This folds the topmost collapser within the bot
* **unfoldTop()**: This unfolds the topmost folded collapser within the bot
* **foldAll()**: This folds all open collapsers within the bots
* **unfoldAll()**: This unfolds all folded collapsers within the bots

## variable-hiding.js
This script contains functions designed around hiding/showing a predefined set of variables. This script makes use of localStorage, so make sure you have that enabled (not sure if you can even disable it..).

### Local Storage
The script creates/reads/updates two items in localStorage:
* **{window.location.hash}-DefaultList**: This key stores a list which contains the default list of variables (for me really) that will be loaded to hide for a bot. This list is stored for the first time load in defaultVars (see [Variables](#Variables)), then is read in any further calls from localStorage.
* **{window.location.hash}-FilterList**: This key stores a dictionary which contains a list of variables to hide by bot. The first time the script is run on a bot - the default set of variables is loaded into the dictionary.

### Variables
* **defaultVars**: this array is used to hold the default list of variables to be hidden. Only used to initialize the localStorage value if empty.
* **storageID**: control room specific ID used to store values in localStorage
* **defaultStorageID**: control room specific ID used to store default values in localStorage
* **storageItems**: local copy of variables to hide
* **defaultFilters**: local copy of default variables to hide (**_can be different than defaultVars if edited by user_**)
* **botID**: internal automation anywhere identifier for any bot saved to control room
* **window.filterList**: accessible variable of 

### Functions
* **loadDefaultFilters()**: Checks localStorage for _defaultStorageID_ to see if defaults are stored, if not it loads _defaultVars_
* **loadFilters()**: first checks localStorage for _storageID_ dictionary, creating if doesn't exist. Then checks to see if botID of currently loaded bot has a set of filters set, if not, loads defaultFilters into local storage as well as into storageItems[botID]. The current set of filters, regardless of source, is stored into _window.filterList_ for use by other functions
* **hideListVariables()**: checks if _window.filterList_ exists, if so, iterates over list, calling _hideVariable()_ on each variable in list. If _window.filterList_ isn't defined, returns false
* **showListVariables()**: checks if _window.filterList_ exists, if so, iterates over list, calling _showVariable()_ on each variable in list. If _window.filterList_ isn't defined, returns false
* **getVariableItem(_varName_)**: attempts a querySelector to find the menu item for **_varName_**. Returns null if non-existent variable name.
* **showVariable(_varName_)**: calls **_getVariableItem(varName)_**, if element exists then sets _style.display = ""_
* **hideVariable(_varName_)**: calls **_getVariableItem(varName)_**, if element exists then sets _style.display = "none"_