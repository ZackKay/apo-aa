let currentTab;

function foldTop()
{
	foldStart();
	
	let flowpoints = document.querySelectorAll('div.taskbotflowpoint');
	let collapser;
	let flowpoint;
	let i;
	
	for(i = 0; i<flowpoints.length; i++)
	{
		flowpoint = flowpoints[i];
		collapser = flowpoint.querySelector('div.taskbotflowpoint-collapser span.fa-caret-down');
		if(collapser !== null) flowpoint.querySelector('div.taskbotflowpoint-collapser').click();
	}
	
	foldEnd();
}

function unfoldTop()
{
	foldStart();
	
	let flowpoints = document.querySelectorAll('div.taskbotflowpoint');
	let collapser;
	let flowpoint;
	let i;
	
	for(i = flowpoints.length - 1; i>=0; i--)
	{
		flowpoint = flowpoints[i];
		collapser = flowpoint.querySelector('div.taskbotflowpoint-collapser span.fa-caret-right');
		if(collapser !== null) flowpoint.querySelector('div.taskbotflowpoint-collapser').click();
	}
	
	foldEnd();

}

function foldAll()
{
	foldStart();
	
	let flowpoints = document.querySelectorAll('div.taskbotflowpoint');
	let collapser;
	let flowpoint;
	let i;
	
	for(i = flowpoints.length - 1; i>=0; i--)
	{
		flowpoint = flowpoints[i];
		collapser = flowpoint.querySelector('div.taskbotflowpoint-collapser span.fa-caret-down');
		if(collapser !== null) flowpoint.querySelector('div.taskbotflowpoint-collapser').click();
	}
	
	foldEnd();
}

function unfoldAll()
{
	foldStart();
	
	let downFlowpoints = document.querySelectorAll('div.taskbotflowpoint-collapser span.fa-caret-right');
	let flowpoints;
	let i;
	let flowpoint;
	let collapser;
	while(downFlowpoints.length > 0)
	{
		flowpoints = document.querySelectorAll('div.taskbotflowpoint');
		for(i = flowpoints.length - 1; i>=0; i--)
		{
			flowpoint = flowpoints[i];
			collapser = flowpoint.querySelector('div.taskbotflowpoint-collapser span.fa-caret-right');
			if(collapser !== null) flowpoint.querySelector('div.taskbotflowpoint-collapser').click();
		}
		downFlowpoints = document.querySelectorAll('div.taskbotflowpoint-collapser span.fa-caret-right');
	}
	
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