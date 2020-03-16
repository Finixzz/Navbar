<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
$(document).ready(function(){
    $(".toggle-button").on("click",function(){
            $(this).toggleClass("toggle .line1");
            $(this).toggleClass("toggle .line2");
            $(this).toggleClass("toggle .line3");
            $(".nav-links").toggleClass("nav-active");
    });
});



