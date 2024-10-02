$(function(){
    let fuelPriceGood=false;
    let rendszamGood=false;
    let megtettTavGood=false;

    function EnableSubmit(){
        if(fuelPriceGood && rendszamGood && megtettTavGood){
            $(".btn").prop("disabled",false);
        }
        else{
            $(".btn").prop("disabled",true);
        }

        if(!fuelPriceGood){
            /*Error: Nem jó Üzemanyag árat adott meg*/
        }

        if(!rendszamGood){
            /*Error: Nem jó rendszámot adott meg*/
        }

        if(!megtettTavGood){
            /*Error: Nem jó megtevv távolságot adott meg*/
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
        EnableSubmit();
    })
    let oldRendszamRegex=/^[A-Z]{3}\d{3}$/;
    let newRendszamRegex=/^[A-Z]{4}\d{3}$/;
    $("#rendszam").on("input", function(){
        let rendszam=$(this).val();

        EnableSubmit();
    })

})
