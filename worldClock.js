function WorldClockTime() {
    const harare = new Date().toLocaleString('en-US', { timeZone: 'Africa/Harare' });
    document.getElementById("hre").innerHTML= harare ;
    const Abidjan = new Date().toLocaleString('en-US', { timeZone: 'Africa/Abidjan' });
    document.getElementById("abj").innerHTML= Abidjan;
    const London = new Date().toLocaleString('en-US', { timeZone: 'Europe/London' });
    document.getElementById("lnd").innerHTML= London;
    const Amsterdam = new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
    document.getElementById("amst").innerHTML= Amsterdam;
    const Bangkok = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });
    document.getElementById("bangk").innerHTML= Bangkok;
    const Taiwan = new Date().toLocaleString('en-US', { timeZone: 'Asia/Taipei' });
    document.getElementById("taiwn").innerHTML= Taiwan;
}

function refresh() {
    setInterval(WorldClockTime,200);
}

