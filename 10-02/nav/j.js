$(function(){
    let fuelPriceGood;
    let rendszamGood;
    let megtettTavGood;

    function EnableSubmit(){
        if(fuelPriceGood && rendszamGood && megtettTavGood){
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
        console.log(rendszam);
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
            console.log(tav);
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

})
