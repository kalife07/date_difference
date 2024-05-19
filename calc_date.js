function date_diff() {
    const date_fin = new Date(document.getElementById("annee2").value, document.getElementById("mois2").value - 1, document.getElementById("jour2").value);
    const date_debut = new Date(document.getElementById("annee1").value, document.getElementById("mois1").value - 1, document.getElementById("jour1").value);
    console.log(date_debut);
    console.log(date_fin);

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
    //var formattedDate = year+"-"+(month<10 ? "0"+month:month)+"-"+(day<10 ? "0"+day:day)
    //var today_txt = document.getElementById("today");
    //today_txt.textContent = formattedDate;
    //Selectionner l’element par id
}

function set_default() {
    const moisDefault = document.getElementById('mois1');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are zero-based
    moisDefault.selectedIndex = currentMonth - 1; // Subtract 1 to match zero-based index

    const anneeDefault = document.getElementById("annee1");
    const currentYear = currentDate.getFullYear();
    for(let i=0;i<anneeDefault.options.length;i++){
        if(anneeDefault.options[i].value == currentYear.toString()){
            anneeDefault.options[i].selected = true;
            break;
        }
    }
    /*
    Vieux code
    anneeDefault.selectedIndex = currentYear;
    console.log(typeof anneeDefault);
    console.log(typeof currentYear);
    */

    const jourDefault = document.getElementById("jour1");
    const currentDay = currentDate.getDate();
    jourDefault.selectedIndex = currentDay - 1;
    console.log(typeof jourDefault);
    console.log(typeof currentDay);
    //console.log(currentDate); 
    
    
    const moisFinDefault = document.getElementById('mois2');
    const currentDate2 = new Date();
    //const currentMonth = currentDate.getMonth() + 1; // JavaScript months are zero-based
    moisFinDefault.selectedIndex = currentMonth - 1; // Subtract 1 to match zero-based index

    const anneeFinDefault = document.getElementById("annee2");
    //const currentYear = currentDate.getFullYear();
    for(let i=0;i<anneeFinDefault.options.length;i++){
        if(anneeFinDefault.options[i].value == currentYear.toString()){
            anneeFinDefault.options[i].selected = true;
            break;
        }
    }
    /*console.log(typeof anneeDefault);
    console.log(typeof currentYear);*/

    const jourFinDefault = document.getElementById("jour2");
    const tmrwDay = currentDate.getDate();
    jourFinDefault.selectedIndex = currentDay;
    /*console.log(typeof jourDefault);
    console.log(typeof currentDay);*/

    
}
set_default();

function start_date() {
    let mois1 = document.getElementById("mois1").value;
    let jour1 = document.getElementById("jour1").value;
    let annee1 = document.getElementById("annee1").value;
    return {mois1, jour1, annee1};
}

function end_date() {
    let mois2 = document.getElementById("mois2").value;
    let jour2 = document.getElementById("jour2").value;
    let annee2 = document.getElementById("annee2").value;
    return {mois2, jour2, annee2};
}

function showDate() {
    var displayTextElement = document.getElementById("displayText");
    displayTextElement.textContent = "Date début: "+start_date().mois1+"/"+start_date().jour1+"/"+start_date().annee1+" Date fin: "+end_date().mois2+"/"+end_date().jour2+"/"+end_date().annee2;
    //document.write("Date début: "+start_date().mois1+"/"+start_date().jour1+"/"+start_date().annee1+" Date fin: "+end_date().mois2+"/"+end_date().jour2+"/"+end_date().annee2)
}

function show_ms() {
    //console.log(date_debut.annee1);
    const date1 = new Date(date_debut.annee1+"-"+date_debut.mois1+"-"+date_debut.jour1);
    let time_ms1 = date1.getTime();
    const date2 = new Date(date_fin.annee2+"-"+date_fin.mois2+"-"+date_fin.jour2);
    let time_ms2 = date2.getTime();
    let diff = time_ms2 - time_ms1;
    var date1_text = document.getElementById("date1_ms");
    var date2_text = document.getElementById("date2_ms");
    var diff_text = document.getElementById("ms_diff");
    var error_text = document.getElementById("error_message");
    var displayTextElement = document.getElementById("displayText");
    var tot_diff_txt = document.getElementById("tot_diff");
    var diff_annee = Math.floor(diff/31536000000);
    var diff_mois = (diff/31536000000-diff_annee)*12;
    const millInMonth = 1000*60*60*24*30.44
    var jours = diff_mois*30;
    //var diff_mois = diff/millInMonth;
    //var diff_mois = Math.abs(document.getElementById("mois1").value-document.getElementById("mois2").value);

    console.log(date_fin.getFullYear());
    console.log(date_debut.getFullYear());
    const diffYears = date_fin.getFullYear() - date_debut.getFullYear();
    const diffMonths = date_fin.getMonth() - date_debut.getMonth();
    const diffDays = date_fin.getDate() - date_debut.getDate();
    
    console.log(diffYears);
    console.log(diffMonths);
    console.log(diffDays);

    if (diff>=0) {
        displayTextElement.textContent = "Date début: "+start_date().mois1+"/"+start_date().jour1+"/"+start_date().annee1+" Date fin: "+end_date().mois2+"/"+end_date().jour2+"/"+end_date().annee2;
        //date1_text.textContent = "Milliseconde 1: "+time_ms1;
        //date2_text.textContent = "Milliseconde 2: "+time_ms2;
        diff_text.textContent = "Difference des millisecondes: "+diff;
        tot_diff_txt.textContent = "Anne: "+diff_annee+", Mois: "+diff_mois+", Jours: "+jours/Math.floor(diff_mois);
        error_message.textContent = "";
    }
    else {
        displayTextElement.textContent = "";
        date1_text.textContent = "";
        date2_text.textContent = "";
        diff_text.textContent = "";
        error_message.textContent = "SVP mettre une date fin apres la date debut";
    }
    
}

function set_today_date() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
    var formattedDate = year+"-"+(month<10 ? "0"+month:month)+"-"+(day<10 ? "0"+day:day)
    var today_txt = document.getElementById("today");
    today_txt.textContent = formattedDate;
}
//set_today_date();

function transformation_date(date_debut, date_fin) {
    const date1 = new Date(date_debut.annee+"-"+date_debut.mois+"-"+date_debut.jour);
    let time_ms1 = date1.getTime();
    const date2 = new Date(date_fin.annee+"-"+date_fin.mois+"-"+date_fin.jour);
    let time_ms2 = date2.getTime();
    let diff = time_ms1 - time_ms2;

    let diffDiv = document.getElementById('diff').innerHTML;
}