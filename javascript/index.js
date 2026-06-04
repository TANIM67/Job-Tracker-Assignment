let currentTab = "all";
const active = ["bg-navy", "text-white"];
const inactive = ["bg-white, text-gray"];
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");
const totalStat = document.getElementById("total-stat");
const interviewStat = document.getElementById("interview-stat");
const rejectStat = document.getElementById("reject-stat");

function switchTab(tab)
{
    const allTabs = ["all", "interview", "rejected"];
    currentTab = tab;
    for(let t of allTabs){
        const tabName = document.getElementById(t);
        if(t == tab)
        {
            tabName.classList.add(...active);
        }
        else
        {
            tabName.classList.remove(...active);
        }
    }

    const pages = [allContainer, interviewContainer, rejectContainer];

    for(let p of pages)
    {
        p.classList.add("hidden");
    }

    if(tab == "all")
    {
        allContainer.classList.remove("hidden");
        const jobNumber = document.getElementById("job-number");
        jobNumber.innerText = allContainer.children.length;

        if(allContainer.children.length == 0)
        {
            emptyContainer.classList.remove("hidden");
        }
        else 
        {
            emptyContainer.classList.add("hidden");
        }
    }
    else if(tab == "interview")
    {
        interviewContainer.classList.remove("hidden");
        const jobNumber = document.getElementById("job-number");
        jobNumber.innerText = interviewContainer.children.length;

        if(interviewContainer.children.length == 0)
        {
            emptyContainer.classList.remove("hidden");
        }
        else 
        {
            emptyContainer.classList.add("hidden");
        }
    }
    else
    {
        rejectContainer.classList.remove("hidden");
        const jobNumber = document.getElementById("job-number");
        jobNumber.innerText = rejectContainer.children.length;

        if(rejectContainer.children.length == 0)
        {
            emptyContainer.classList.remove("hidden");
        }
        else 
        {
            emptyContainer.classList.add("hidden");
        }
    }
}

switchTab(currentTab);


totalStat.innerText = allContainer.children.length;
interviewStat.innerText = interviewContainer.children.length;
rejectStat.innerText = rejectContainer.children.length;

document.getElementById("jobs-container").addEventListener("click", function(event){
    const cilckedEvent = event.target;

    if(cilckedEvent.classList.contains("interview"))
    {
        const isInReject = (event.target.closest(".card").closest(".rejectContainer"));
        const isInAll = (event.target.closest(".card").closest(".allContainer"));

        const card = event.target.closest(".card");
        const status = card.querySelector(".status");
        status.innerText = "Interviewed";
        interviewContainer.append(card);

        if(rejectContainer.children.length == 0 && isInReject)
        {
            emptyContainer.classList.remove("hidden");
        }

        if(allContainer.children.length == 0 && isInAll)
        {
            emptyContainer.classList.remove("hidden");
        }
    }
    else if(cilckedEvent.classList.contains("reject"))
    {
        const isInInterview = (event.target.closest(".card").closest(".interviewContainer"));
        const isInAll = (event.target.closest(".card").closest(".allContainer"));

        const card = event.target.closest(".card");
        const status = card.querySelector(".status");
        status.innerText = "Rejected";
        rejectContainer.append(card);
        if(interviewContainer.children.length == 0 && isInInterview)
        {
            emptyContainer.classList.remove("hidden");
        }
        
        if(allContainer.children.length == 0 && isInAll)
        {
            emptyContainer.classList.remove("hidden");
        }
    }
    else if(cilckedEvent.classList.contains("delete"))
    {
        const isInInterview = (event.target.closest(".card").closest(".interviewContainer"));
        const isInAll = (event.target.closest(".card").closest(".allContainer"));
        const isInReject = (event.target.closest(".card").closest(".rejectContainer"));

        console.log(event.target.closest(".card").closest(".rejectContainer"));
        const card = event.target.closest(".card");
        // interviewContainer.append(card);
        card.remove();

        if(interviewContainer.children.length == 0 && isInInterview)
        {
            emptyContainer.classList.remove("hidden");
        }
        else if(allContainer.children.length == 0 && isInAll)
        {
            emptyContainer.classList.remove("hidden");
        }
        else if(rejectContainer.children.length == 0 && isInReject)
        {
            emptyContainer.classList.remove("hidden");
        }
    }

    totalStat.innerText = allContainer.children.length;
    interviewStat.innerText = interviewContainer.children.length;
    rejectStat.innerText = rejectContainer.children.length;
})