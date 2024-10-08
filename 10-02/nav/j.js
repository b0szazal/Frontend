$(function(){
    let fuelPriceGood;
    let rendszamGood;
    let megtettTavGood;
    let hengerSizeGood;
    let amortDij=18;
    let hengerSize;
    let benzin=[
        {
            value: 0,
            text: 'Kérem válasszon'
        },
        {
            value: 7.6,
            text: '1000 cm3-ig'
        },
        {
            value: 8.6,
            text: '1001-1500 cm3-ig'
        },
        {
            value: 9.5,
            text: '1501-2000 cm3-ig'
        },
        {
            value: 11.4,
            text: '2001-3000 cm3-ig'
        },
        {
            value: 13.3,
            text: '3001 cm3 felett'
        },
    ]
    let diesel=[
        {
            value: 0,
            text: 'Kérem válasszon'
        },
        {
            value: 5.7,
            text: '1500 cm3-ig'
        },
        {
            value: 6.7,
            text: '1501-2000 cm3-ig'
        },
        {
            value: 7.6,
            text: '2001-3000 cm3-ig'
        },
        {
            value: 9.5,
            text: '3001 cm3 felett'
        },
    ]
    $("form").submit(function(e){
        e.preventDefault();
    })
    $("input[name='benzinType']").change(function(){
        $("#hengerSize").empty();
        let benzinType=$(this).val();
        if(benzinType==="diesel"){
            diesel.forEach(function(item){
                $("#hengerSize").append(`<option value="${item.value}">${item.text}</option>`)
            })
        }
        else{
            benzin.forEach(function(item){
                $("#hengerSize").append(`<option value="${item.value}">${item.text}</option>`)
            })
        }
    });
    $("input[name='AmortDij']").change(function(){
        amortDij=Number($(this).val());
    });
    function EnableSubmit(){
        if(fuelPriceGood && rendszamGood && megtettTavGood && hengerSizeGood){
            $(".btn").prop("disabled",false);
        }
        else{
            $(".btn").prop("disabled",true);
        }
    }

    $("#benzinAr").on("input", function(){
        try{
            let fuelPrice=Number($(this).val());
            if(fuelPrice>0 && fuelPrice<1000){
                fuelPriceGood=true;
            }
            else{
                fuelPriceGood=false;
            }
        }
        catch(e){
            fuelPriceGood=false;
        }

        if(!fuelPriceGood){
            $("#benzinError").text("Rossz benzinárat adott meg");
        }
        else{
            $("#benzinError").text("");
        }
        EnableSubmit();
    })
    let oldRendszamRegex=/^[A-Z]{3}\d{3}$/;
    let newRendszamRegex=/^[A-Z]{4}\d{3}$/;
    $("#rendszam").on("input", function(){
        let rendszam=$(this).val();
        if(oldRendszamRegex.test(rendszam) || newRendszamRegex.test(rendszam)){
            rendszamGood=true;
        } 
        else{
            rendszamGood=false;
        }

        if(!rendszamGood){
            $("#rendszamError").text("Rossz rendszámot adott meg");
        }
        else{
            $("#rendszamError").text("");
        }
        EnableSubmit();
    })
    $("#tav").on("input", function(){
        try{
            let tav=Number($(this).val());
            if(tav>0){
                megtettTavGood=true;
            }
            else{
                megtettTavGood=false;
            }
        }
        catch(e){
            megtettTavGood=false;
        }
        if(!megtettTavGood){
            $("#tavError").text("Rossz távolságot adott meg");
        }
        else{
            $("#tavError").text("");
        }
        EnableSubmit();
    })
    $("#hengerSize").on("change", function(){
        try{
            hengerSize=Number($(this).find(":selected").val());
            if(hengerSize===0){
                hengerSizeGood=false;
            }
            else{
                hengerSizeGood=true;
            }
        }
        catch(e){
            hengerSizeGood=false;
        }
        EnableSubmit();
    })
    $("form").on("submit", function(){
        let tav=Number($("#tav").val());
        let fuelPrice=Number($("#benzinAr").val());
        $("#result").text(`Térített összeg: ${Math.round(((tav/100)*hengerSize*fuelPrice)+amortDij*tav)} Ft`);
    });
})
