$(function(){
    $(".devour").on("click", function(event){
        
        let id = $(this).data("id");

        let beenDevoured = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: beenDevoured
        }).then(function(){
            console.log("This burger has been nommed", beenDevoured);

            location.reload();
        })
    });

        $(".submit-burger").on("submit", function(event){
            event.preventDefault();

            let newBurger = {
                burger_name: $("#create-burger").val().trim(),
                devoured: 0
            };

            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function(){
                console.log("Burger made!")

                location.reload();
            });
        })
})