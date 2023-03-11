const endDate = "11 March 2023 7:03 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)  //End date which is set on clock
    const now = new Date()  // Current date
    const diff = (end-now) / 1000  // this is in seconds
    
    //when time ends this will not show in negative values
    if(diff<0)
        return

    //convert into days
    const days = Math.floor(diff/3600/24)
    inputs[0].value = days;

    //Convert hours
    const hours = Math.floor(diff/3600)%24
    inputs[1].value = hours

    //convert minutes
    const minutes = Math.floor(diff/60)%60
    inputs[2].value = minutes

    //convert seconds
    const seconds = Math.floor(diff%60)
    inputs[3].value = seconds
}

clock()

//to call clock() function continuously

setInterval(
    () => {
        clock()
    },
    1000
)

// 1 day = 24 hr
// 1hr = 60 min
// 60 min = 3600 sec