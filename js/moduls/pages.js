/* The product's catalog menu - start
Function get a click and starts check -
 - is there or not the class colLeft_activity.

 If not it, function adds the it class.
 If is there, function delete it.

 To the class colLeft_activity links property the product's menu 'aside.colLeft'.*/
 //var search_class; //The class which we search. This's a variable
 //var old_selection; // The element to which we will add the selection. This's the variable
 //var selectionElement; //Adds the new class. Type the text
 //var delete_class;//Class which delete. Type the text

//var dt_length;


/* This's a function 'openCloseMenu' for the mobile device. */

export function addRoverClass(dt_length, old_selection, delete_class, add_class) {
  //var valid ;
  //console.log('00', dt_length.length == true);
  //console.log('00', dt_length);
  if (dt_length.length != true){
    console.log('11',  dt_length.length);
    old_selection.addClass(add_class);
    console.log('22',  dt_length.length);
  } else{
    old_selection.removeClass(delete_class);
    console.log('33',  dt_length.length);
  }
};

/* The product's catalog menu - end */

/* CopyPastElement - start
When element DOM duplicating, simply copies the html element DOM and past on the page site */
// export var value_copy = ['value'] // Elemen for copies The type the list
// export var value_ent = ['value'] // the element where paste html The type the list
export function copyPastElement(value_copy, value_ent){
  const elem = {
    copy_element: value_copy,
    enter_element: value_ent
  }
  var cop = elem.copy_element
  var ent = elem.enter_element

  for (var i = 0; i < cop.length; i++ ){
  //console.log('elem.copy_element[i]: ', elem.copy_element[i] )
  //console.log('elem.enter_element[i]: ', elem.enter_element[i] )
    $(elem.enter_element[i]).html($(elem.copy_element[i]).html());
  }
}
// CopyPastElement - end
