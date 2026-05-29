let currentTab = "all";
const active = ["bg-navy", "text-white"];
const inactive = ["bg-white, text-gray"];
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectContainer = document.getElementById("reject-container");

function switchTab(tab)
{
    const allTabs = ["all", "interview", "rejected"];
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
    }
    else if(tab == "interview")
    {
        interviewContainer.classList.remove("hidden");
    }
    else
    {
        rejectContainer.classList.remove("hidden");
    }
}

switchTab(currentTab);

const totalStat = document.getElementById("total-stat");
const interviewStat = document.getElementById("interview-stat");
const rejectStat = document.getElementById("reject-stat");

totalStat.innerText = allContainer.children.length;
interviewStat.innerText = interviewContainer.children.length;
rejectStat.innerText = rejectContainer.children.length;

document.getElementById("jobs-container").addEventListener("click", function(event){
    const cilckedEvent = event.target;
    // console.log(cilckedEvent);
    if(cilckedEvent.classList.contains("interview"))
    {
        const card = event.target.closest(".card");
        interviewContainer.append(card);
    }
    if(cilckedEvent.classList.contains("reject"))
    {
        const card = event.target.closest(".card");
        rejectContainer.append(card);
    }
    if(cilckedEvent.classList.contains("delete"))
    {
        const card = event.target.closest(".card");
        // interviewContainer.append(card);
        card.remove();
    }

    
})