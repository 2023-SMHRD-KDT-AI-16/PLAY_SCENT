/**
 *
 */

 $(".top_but").click(
      function(){
            $("html,body").animate({scrollTop:0}, '750');  
      });


$(".all_menu").click(
      function(){
            $("#jin_navwrawp").stop().show();
      }
);     


$(".sub_menubox img").click(
      function(){
            $("#jin_navwrawp").stop().slideUp(300);
      });


$(".jin_mainmenu>li").hover(
      function(){
            $(".jinhee_oh").stop().hide();         
            $(this).find(".jinhee_oh").stop().show();
      }
);


$(".naum_menu1").on("click",function(){
    $(".naum_menu1").css("transform","unset");
    $(this).css("transform", "translate3d( -3px, -3px, -10px)");
});


$(".naum_menu2").on("click",function(){
        $(".naum_menu2").css("transform", "unset");
        $(this).css("transform", "translate3d( 3px, 3px, 10px)");
});




 
    $(".moblie_best_button li a").click(
            function (){            
              var id = $(this).data('id');
            //  console.log($(this).data-id);
              $(".nm_set").stop().hide();
              $("."+id).stop().show();
            }
    );




  
 $(".jin_day a").click(
            function(){
                 $(".jin_day a").css('background','unset');
                 $(".jin_day a").css('color', '#585858');
                 $(".jin_day h5").css('color', '#585858');
                 $(this).css('background','rgba(112, 1, 167, 0.85)');
                 $(this).css('color','white');
                 $(this).closest(".jin_day").children('h5').css('color', '#7001A7');
            }

 );     


 $("#jin_couponzone a").click(
       function(){
             $("#jin_couponzone a").removeClass('add');
             $(this).addClass('add');
       }
 );

 $('.mo_product li a').click(
      function go_detail(){
            $(this).attr('href','./naum_detail_page.html');
     }
 );



$('.moblie_home_bu li a').click(
      function(){
            let jinnum = $(this).data('jin');

            if(jinnum === 3){
                  $(this).attr('href','./A이걸봐주세요_naum_moblie.html');
            }else if(jinnum === 4){
                  $(this).attr('href','./naum_shpping_info.html');
            }           
      }
);


let gumae = document.querySelector(".gumae");
let pocket = document.querySelector("#pocket");
let poit_j = document.querySelector(".poit_j");

   gumae.addEventListener('click', goingup);

       function goingup(){                     
               pocket.style.display  = "block";                 
               pocket.style.transform ="translateY(-264px)";                    
       }     

   poit_j.addEventListener('click', goingdown); 

        function goingdown(){
               pocket.style.transform = 'translateY(274px)';
        }


   function changenum(j, type){
         let paynum = Number($(j).closest('.up_down').children('h4').text());
        //  console.log(paynum);
         let numh4 = $('.up_down').children('h4');
         let tosum = Number($(j).closest('.up_down').parent('.total_price').children('.sum_price').children('.tosum').text());
         let tosum_text = $('.sum_price').children('.haram').children('.tosum');
        //    console.log(tosum);
     
         if( type == '+' ){
            paynum++; 
            numh4.text(paynum);               
         } else if( type == '-' ){
              if( paynum > 1 ){
                  paynum--;      
                  numh4.text(paynum);                  
              }
         }   

      //   console.log(numh4.text());
         let uu = Number( numh4.text() );
         console.log(uu);       
         let origin_price = Number($('#origin_price').val());   
         console.log(origin_price * uu);   
         tosum_text.text( origin_price * uu );      
   }  


  
 
 
 