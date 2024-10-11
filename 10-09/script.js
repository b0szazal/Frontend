$(function() {
    let url=`https://jsonplaceholder.typicode.com/todos`;
    let urlAdd;
    $.get(url)
    .done(function(d)
    {
        let size=d.length;
        $("#numid").attr("max", size);
        $("#numid").on("change", function(){
            let num=Number($(this).val());
            urlAdd="/"+num;
            $.ajax({
                url: url+urlAdd,
                method: "GET",
                dataType: "json"})
            .done(function(d)
            {
                $(".content").append(JSON.stringify(d, null, 2)+"<br>")
            })
        })
    })
    .fail(function(xhr){console.error(xhr.statusText)})
})