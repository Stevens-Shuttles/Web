const API_BASE = "https://utf6x57ke7.execute-api.us-east-1.amazonaws.com/release/"


async function postData(endpoint, data) {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(endpoint, options)
    return await response.json()
}


async function getTimes(line) {
    const endpoint = API_BASE + "times"

    const data = {
        route_id: line
    }
    return await postData(endpoint, data)
}


async function getStatus() {
    const endpoint = API_BASE + "times"

    const data = {
        service: "status"
    }

    return await postData(endpoint, data)
}


function setNameAndStatus(line, isRunning) {
    const lineStatus = $('#' + line + '-line-status')
    const lineName = $('#' + line + "-line-name")

    lineName.text(line + " Line")

    if (isRunning) {
        lineStatus.text("Running Normally 👍")
        lineStatus.removeClass("badge-danger")
        lineStatus.addClass("badge-success")
    } else {
        lineStatus.text("Not running 👎")
        lineStatus.addClass("badge-danger")
        lineStatus.removeClass("badge-success")
    }
}


function populateTimes() {


    getStatus().then(status => {
        console.log(status)
        for (let line in status) {
            if (status.hasOwnProperty(line) && status[line] === true) {
                setNameAndStatus(line, true)
                getTimes(line).then(data => {
                    console.log(data)
                    for (let stop of data["stops"]) {
                        const markup = makeRowMarkup(stop["id"], stop["times"], 3)
                        $('#' + line).after(markup)
                    }
                })
            }
            else {
                setNameAndStatus(line, false)
            }
        }
    })
}


function makeRowMarkup(lineName, times, previewLen) {
    let rowMarkup = '<div class="row m-0 time-row">' +
        '                <div class="col border">' + lineName + '</div>' +
        '                <div class="col border">'

    let sentinel = Math.min(times.length, previewLen)
    for (let a = 0; a < sentinel; a++) {

        rowMarkup += (a + 1 === sentinel) ? toTimeStr(times[a]) + "..." : toTimeStr(times[a]) + ", "
    }
    rowMarkup += '</div></div>' +  // Close preview column and row
        '<div style="display: none" class="container">'
    for (let utcSeconds of times) {
        rowMarkup += '<div class="row m-0 text-white bg-dark">' +
            '             <div class="col border"></div>' +
            '             <div class="col border">' + toTimeStr(utcSeconds) + '</div>' +
            '         </div>'
    }
    rowMarkup += '</div>'  // Close sublist container

    return rowMarkup
}


function toTimeStr(utcSeconds) {
    let time = new Date(0)
    time.setUTCSeconds(utcSeconds)
    const options = {timeStyle: "short"}
    return time.toLocaleString('en-US', options)
}



$(document).ready(() => {

    $('.row.m-0').not(".text-white").filter(":odd").addClass("bg-light")

    $('.time-row').click((event) => {
        $(event.currentTarget).next().toggle()
    })

    $('#info-modal').modal()

    populateTimes()
})
