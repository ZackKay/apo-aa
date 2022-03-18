let defaultVars = ["sBoolClearLogsSuccess","sBoolGlobalValuesSuccess","sBoolIsValidatedPreParentValue","sBoolNameCheckSuccess","sBoolParentCheckSuccess","sBoolSetUpLocationsSuccess","sBoolShellVariablesSuccess","sDictClearLogs","sDictErrorEmails","sDictGlobalValues","sDictLoggerOut","sDictNameCheck","sDictParentCheck","sDictSetUpLocations","sDictShellVariables","sNumClearLogsErrorLine","sNumGlobalValuesErrorLine","sNumLogCreateErrorLine","sNumNameCheckErrorLine","sNumParentCheckErrorLine","sNumShellVariablesErrorLine","sStrClearLogsErrorMessage","sStrErrorEmailBCC","sStrErrorEmailCC","sStrErrorEmailTo","sStrGlobalValuesErrorMessage","sStrLogCreateErrorMessage","sStrNameCheckErrorMessage","sStrNotifEmailBCC","sStrNotifEmailCC","sStrNotifEmailTo","sStrParentCheckErrorMessage","sStrSetupBLIsValidated","sStrShellVariablesErrorMessage"];

let storageID = window.location.host + "-FilterList";
let defaultStorageID = window.location.host + "-DefaultList";
let storageItem = null;
let defaultFilters = null;
let botID = -1;
let showingVariables = true;

function loadFilters()
{
	//console.log("loading " + window.location.href);
	if(!((/taskbots\/\d+\/edit/.test(window.location.hash) || /taskbots\/\d+\/view/.test(window.location.hash))))
	{
		return false;
	}
	loadDefaultFilters();
	
	storageItem = JSON.parse(localStorage.getItem(storageID));
	
	if(storageItem === null)
	{
		storageItem = {};
		localStorage.setItem(storageID, JSON.stringify(storageItem));
	}

	botID = /\d+/.exec(window.location.hash)[0];
	
	if(storageItem[botID.toString()] === undefined)
	{
		storageItem[botID.toString()] = defaultFilters;
		localStorage.setItem(storageID, JSON.stringify(storageItem));
	}

	window.filterList = storageItem[botID.toString()];
	return true;
}

function loadDefaultFilters()
{
	defaultFilters = JSON.parse(localStorage.getItem(defaultStorageID));
	if(defaultFilters === null)
	{
		defaultFilters = defaultVars;
		localStorage.setItem(defaultStorageID, JSON.stringify(defaultFilters));
	}
	return true;
}

function toggleListVariables()
{
	if(showingVariables)
		hideListVariables();
	else
		showListVariables();
		
	showingVariables = !showingVariables;
	return showingVariables;
}

function hideListVariables()
{
	if(window.filterList === undefined)
		loadFilters();
	window.filterList.forEach(x => hideVariable(x));
	return true;
}
function showListVariables()
{
	if(window.filterList === undefined)
		loadFilters();
	window.filterList.forEach(x => showVariable(x));
	return true;

}

function getVariableItem(varName)
{
	return document.querySelector("div.editorpalette_item[name='" + varName.toLowerCase() + "']");
}

function showVariable(varName)
{
	var groupDiv = getVariableItem(varName);
	if(groupDiv === null) return false;
	groupDiv.style.display = "";
	return true;
}

function hideVariable(varName)
{
	var groupDiv = getVariableItem(varName);
	if(groupDiv === null) return;
	groupDiv.style.display = "none";
	return true;
}