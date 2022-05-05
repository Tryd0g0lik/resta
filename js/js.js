/*import * as pg from './moduls/pages.js';

window.onload = function(){
  var value_copy = ['header .header__nav', 'header .header__contact']
  var value_ent = ['main .categoryMenu__nav .topBurger', 'main .categoryMenu__phon.header__contact']
  pg.copyPastElement(value_copy, value_ent);

}*/

class AsideMenu{
    constructor(ne) {
	    this.name = ne;
    }
      open_menu(name){


		if ($(name)[0] == document.querySelector('aside[data-id]')){
		/*alert('Hello');*/
			if (document.querySelector('aside[data-id]').getAttribute('data-id') == 'aside_menu'){
				/*alert('Hello word');*/

				$(name).toggleClass('colLeft_activity');
			}
		}
		if ($(name)[0] == document.querySelector('nav[data-id]')){
		/*alert('Hello');*/
			if (document.querySelector('nav[data-id]').getAttribute('data-id') == 'menu'){
				/*alert('Hello word');*/
				/*$(name).toggleClass('cactivity');*/
				$(name).toggleClass('header__nav_activity');
			}
		}
    }
}

let mouseClick = new AsideMenu()
$("aside").on( "click", function(){
	console.log(( $(this)[0]));
	mouseClick.open_menu($(this));
});


class HeaderMenu{
	constructor(sel, data_id){
		this.select = sel;
		this.id = data_id;
	}

	open_head_menu(select, id){

		console.log('select: ', ' 002')
		if (id == 'head_menu'){
			if((document.querySelector('nav.header__nav_activity') != null) &
			(document.querySelector('nav.header__nav_activity') != (document.querySelector('nav.header__nav_activity[data-id=head_menu]') )))
			{
//				document.querySelector('nav.header__nav_activity').remove
				document.querySelector('nav.header__nav_activity').classList.remove('header__nav_activity')
			}

			$(select).toggleClass('header__nav_activity')
		}
		else if (id == 'top_main_menu'){
			if((document.querySelector('nav.header__nav_activity') != null) &
			(document.querySelector('nav.header__nav_activity') != (document.querySelector('nav.header__nav_activity[data-id=top_main_menu]') ))){
//				document.querySelector('nav.header__nav_activity').remove
				document.querySelector('nav.header__nav_activity').classList.remove('header__nav_activity')
			}

			$(select).toggleClass('header__nav_activity')
		}

		else if (id == 'top_offer_menu'){
			if((document.querySelector('nav.header__nav_activity') != null) &
			(document.querySelector('nav.header__nav_activity') != (document.querySelector('nav.header__nav_activity[top_offer_menu]') ))){
//				document.querySelector('nav.header__nav_activity').remove
				document.querySelector('nav.header__nav_activity').classList.remove('header__nav_activity')
			}

			$(select).toggleClass('header__nav_activity')
		}
		else if (id == 'top_info_menu'){
			if((document.querySelector('nav.header__nav_activity') != null) &
			(document.querySelector('nav.header__nav_activity') != (document.querySelector('nav.header__nav_activity[top_info_menu]') ))){
//				document.querySelector('nav.header__nav_activity').remove
				document.querySelector('nav.header__nav_activity').classList.remove('header__nav_activity')
			}

			$(select).toggleClass('header__nav_activity')
		}
		else if (id == 'top_client_menu'){
			if((document.querySelector('nav.header__nav_activity') != null) &
			(document.querySelector('nav.header__nav_activity') != (document.querySelector('nav.header__nav_activity[top_client_menu]') ))){
//				document.querySelector('nav.header__nav_activity').remove
				document.querySelector('nav.header__nav_activity').classList.remove('header__nav_activity')
			}

			$(select).toggleClass('header__nav_activity')
		}
		else if (id == 'top_letters_menu'){
			if((document.querySelector('nav.header__nav_activity') != null) &
			(document.querySelector('nav.header__nav_activity') != (document.querySelector('nav.header__nav_activity[top_letters_menu]') ))){
//				document.querySelector('nav.header__nav_activity').remove
				document.querySelector('nav.header__nav_activity').classList.remove('header__nav_activity')
			}

			$(select).toggleClass('header__nav_activity')
		}

	}
}
let openTopMenu = new HeaderMenu()
/*$("aside").on( "click", function(e){

	console.log(( $(this)[0]));
	if ($(this)[0] == document.querySelector('aside[data-id')){
		alert('Hello');
		if (document.querySelector('aside[data-id]').getAttribute('data-id') == 'aside_menu'){
			alert('Hello word');
			mouseClick.ck($(this));
		}
	}
});*/

$("nav").on( "click", function(){
	let data_id = $(this).attr('data-id')
	console.log('001', 'data_id: ', data_id);
	openTopMenu.open_head_menu($(this), data_id);
});