export const intervalDate = (date) => {
    const info = getInterval(date);
    const rtf = new Intl.("fr", {
        numeric : "auto"
    });

    return rtf.format(-(Math.ceil(info.elapsed / info.dividedBy)), info.format);
}

export const getInterval = (date) => {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = (new Date()).getTime() - (new Date(date)).getTime();
    let response : any = {elapsed};

    if (elapsed < msPerMinute) {
        response['dividedBy'] = 1000;
        response['format'] = "seconds";
        return response;
    }

    else if (elapsed < msPerHour) {
        response['dividedBy'] = msPerMinute;
        response['format'] = "minutes";
        return response;
    }

    else if (elapsed < msPerDay ) {
        response['dividedBy'] = msPerHour;
        response['format'] = "hours";
        return response;
    }

    else if (elapsed < msPerMonth) {
        response['dividedBy'] = msPerDay;
        response['format'] = "days";
        return response;
    }

    else if (elapsed < msPerYear) {
        response['dividedBy'] = msPerMonth;
        response['format'] = "months";
        return response;
    }

    else {
        response['dividedBy'] = msPerYear;
        response['format'] = "years";
        return response;
    }
}