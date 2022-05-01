import * as pg from '/site/resta/js/moduls/pages.js';


jQuery(document).ready(function () {
// --------------LANGUAGE in header ----------------------
// header__RU_active,
// &.header__EN_active
$('.header__RU').click(function(){
  pg.addRoverClass($('.header__RU_active'), $('.header__RU'), 'header__RU_active', 'header__RU header__RU_active');
});

$('.header__EN').click(function(){
  pg.addRoverClass($('.header__EN_active'), $('.header__EN'), 'header__EN_active', 'header__EN header__EN_active');
});

//$('.header__RU').mouseover(function(){
//  $('.header__RU').addClass('header__RU header__RU_active');
//});
//$('.header__RU').mouseout(function(){
//  $('.header__RU').removeClass('header__RU_active');
//});
//
//$('.header__EN').mouseout(function(){
//  $('.header__EN').addClass('header__EN header__RU_active');
//});
//
//$('.header__RU').mouseout(function(){
//  $('.header__RU').removeClass('header__RU header__RU_active');
//});


// --------------SECTION under header----------------------
  $('.topSection aside.colLeft, .colLeft  aside.colLeft')_.click( function () {// The call touch - The product's catalog
   menu
    pg.addRoverClass($('.colLeft_activity'), $('header .colLeft'), 'colLeft_activity', 'colLeft colLeft_activity');

    //addRoverClass(old_selection, delete_class, selectionElement, data_length)
  });

/* This's a function 'openCloseMenuMouse' for the desktop device  */
 $('.topSection .colLeft, .colLeft  aside.colLeft')_.mouseover( function(){ // The Desktop - The product's catalog menu
    $(this).addClass('colLeft colLeft_activity');
  });

$('.topSection .colLeft, .colLeft  aside.colLeft')_.mouseout( function(){
    $(this).removeClass('colLeft_activity');
  });
// --------------HEADER----------------------
/* The call touch for the click- Top header menu */
$('header .header__nav').click(function(){

  pg.addRoverClass($('.header__nav_activity'), $('header .header__nav'), 'header__nav_activity', 'header__nav header__nav_activity' );
});

/* The Desktop when mouse over elemend DOM- Top header menu */

$('header .header__nav').mouseover( function(){

    $('header .header__nav').addClass('header__nav header__nav_activity');
  });

$('header .header__nav').mouseout( function(){

    $('header .header__nav').removeClass('header__nav_activity');
  });

// --------------MAIN----------------------
/* The call touch for the click- Top header menu */

$('main nav.header__nav').click(function(){
  pg.addRoverClass($('.header__nav_activity'), $('main .header__nav'), 'header__nav_activity', 'header__nav header__nav_activity' );
});

/* The Desktop when mouse over elemend DOM- Top header menu */
$('main .header__nav').mouseover( function(){

    $('main .header__nav').addClass('header__nav header__nav_activity');
  });

$('main .header__nav').mouseout( function(){
    $('main .header__nav').removeClass('header__nav_activity');
  });

// --------------MAIN----------------------
/* CopyPaste upper a menu */


window.onload = function(){
  var value_copy = ['header .header__nav', 'header .header__contact']
  var value_ent = ['main .categoryMenu__nav .topBurger', 'main .categoryMenu__phon.header__contact']
  pg.copyPastElement(value_copy, value_ent);

}
});
/* CopyPaste upper a phone's numbers */


$('.position01 .catalog__foto img').click(function(){
		//e.preventDefault();
		//$(this).toggleClass('look');
//			if $(this).is(':hidden'){ $(this).clone()


		$('.catalog__look.look').html($(this).clone());
//			}
	}

)






/* pop-up windows after click on foto - start */

/* pop-up windows after click on foto - end */

