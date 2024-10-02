let text="";

function TextFormatting(text){
    return text.replace('*', 'x');
}

function AddToInput(input){
    text+=input;
    document.getElementById("text").value=TextFormatting(text);
    console.log(text);
}

function Evaluate(){
    text=eval(text);
    document.getElementById("text").value=text;
    console.log(text)
}

function SquareNumber(){
    let num= eval(text);
    text=(num*num).toString();
    document.getElementById("text").value=text;
}

function SquareRoot(){
    let num= eval(text);
    text=Math.sqrt(num).toString();
    document.getElementById("text").value=text; 
}

function LogBase10(){
    let num= eval(text);
    text=Math.log10(num).toString();
    document.getElementById("text").value=text; 
}   

function TenToThePowerOfX(){
    let num= eval(text);
    text=Math.pow(10, num).toString();
    document.getElementById("text").value=text; 
}   

function Sin(){
    let num= eval(text);
    text=Math.sin(num).toString();
    document.getElementById("text").value=text; 
} 

function Cos(){
    let num= eval(text);
    text=Math.cos(num).toString();
    document.getElementById("text").value=text; 
} 

function Tan(){
    let num= eval(text);
    text=Math.tan(num).toString();
    document.getElementById("text").value=text; 
} 

function Clear(){
    text="";
    document.getElementById("text").value=TextFormatting(text);
}

