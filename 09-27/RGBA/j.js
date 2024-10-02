$(function() {
    let rValue=$("#r").val();
    let gValue=$("#g").val();
    let bValue=$("#b").val();
    let aValue=$("#a").val();
    function SetRectRBGA(){
        document.getElementById("rect").style.backgroundColor = `rgba(${rValue},${gValue},${bValue},${aValue})`;
    }
    $("#r").on('input',function(){
        rValue=$("#r").val();
        $("#rValue").text(rValue);
        SetRectRBGA();
    })
    $("#g").on('input',function(){
        gValue=$("#g").val();
        $("#gValue").text(gValue);
        SetRectRBGA();
    })
    $("#b").on('input',function(){
        bValue=$("#b").val();
        $("#bValue").text(bValue);
        SetRectRBGA();
    })
    $("#a").on('input',function(){
        aValue=$("#a").val();
        $("#aValue").text(aValue);
        SetRectRBGA();
    })
    SetRectRBGA()
})