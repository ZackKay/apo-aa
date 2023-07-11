let currentTab;

function foldTop()
{
	foldStart();
	
	let collapsers = document.querySelectorAll('div.taskbotlistnode > div.taskbotlistnode-collapser > span.fa-caret-down');
	let i;
	console.log("start foldTop");
	for(i = 0; i<collapsers.length; i++)
	{
		collapsers[i].parentNode.click();
	}
	console.log("done foldTop");
	foldEnd();
}

function unfoldTop()
{
	foldStart();
	
	let collapsers = document.querySelectorAll('div.taskbotlistnode > div.taskbotlistnode-collapser > span.fa-caret-right');
	let i;
	console.log("start unfoldTop");
	for(i = collapsers.length - 1; i>=0; i--)
	{
		collapsers[i].parentNode.click();
	}
	console.log("done unfoldTop");
	foldEnd();

}

function foldAll()
{
	foldStart();
	
	let collapsers = document.querySelectorAll('div.taskbotlistnode > div.taskbotlistnode-collapser > span.fa-caret-down');
	let i;
	console.log("start foldAll");
	for(i = collapsers.length - 1; i>=0; i--)
	{
		collapsers[i].parentNode.click();
	}
	console.log("done foldAll");
	foldEnd();
}

function unfoldAll()
{
	foldStart();
	
	let downFlowpoints = document.querySelectorAll('div.taskbotlistnode-collapser span.fa-caret-right');
	let i;
	let collapsers;
	console.log("start unfoldAll");
	while(downFlowpoints.length > 0)
	{
		collapsers = document.querySelectorAll('div.taskbotlistnode > div.taskbotlistnode-collapser > span.fa-caret-right');
		for(i = collapsers.length - 1; i>=0; i--)
		{
			collapsers[i].parentNode.click();
		}
		downFlowpoints = document.querySelectorAll('div.taskbotlistnode-collapser span.fa-caret-right');
	}
	console.log("done unfoldAll");
	foldEnd();
}

function foldStart()
{
	currentTab = document.querySelector("div.editortabs button.editortabs-tab--active").innerText;
	
	if (currentTab === "List")
	{
		document.querySelector("div.editortabs button[aria-label='Dual']").click();
	}
}

function foldEnd()
{
	if (currentTab === "List")
	{
		document.querySelector("div.editortabs button[aria-label='List']").click();
	}
}

function tabRight()
{
	currentTab = document.querySelector("div.editortabs button.editortabs-tab--active").innerText;
	switch(currentTab)
	{
		case "Flow":
			document.querySelector("div.editortabs button[aria-label='List']").click();
		   break;
		case "List":
			document.querySelector("div.editortabs button[aria-label='Dual']").click();
		   break;
		case "Dual":
			document.querySelector("div.editortabs button[aria-label='Flow']").click();
		   break;
	}
}

function tabLeft()
{
	currentTab = document.querySelector("div.editortabs button.editortabs-tab--active").innerText;
	switch(currentTab)
	{
		case "Flow":
			document.querySelector("div.editortabs button[aria-label='Dual']").click();
		   break;
		case "List":
			document.querySelector("div.editortabs button[aria-label='Flow']").click();
		   break;
		case "Dual":
			document.querySelector("div.editortabs button[aria-label='List']").click();
		   break;
	}
}
