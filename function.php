<?php
	function filtr_property(){
		echo'
			<div class="colLeft__filtr filtr-property">
				<div class="filt__price">
					<p>
					  <label for="amount">Price range:</label>
					  <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
					</p>

					<div id="slider-range"></div>
				</div>
				<div class="widget filtr-property__radio">

				  <h3>По типу</h3>
				  <fieldset>
				    <legend>По типу: </legend>
				    <label for="radio-1">барные</label>
				    <input type="radio" name="radio-1" id="radio-1">
				    <label for="radio-2">обеденные</label>
				    <input type="radio" name="radio-1" id="radio-2">
				    <label for="radio-3">банкетные</label>
				    <input type="radio" name="radio-1" id="radio-3">
				    <label for="radio-3">уличные</label>
				    <input type="radio" name="radio-1" id="radio-4">
				    <label for="radio-3">складные</label>
				    <input type="radio" name="radio-1" id="radio-5">
					<label for="radio-3">с мягкой спинкой</label>
				    <input type="radio" name="radio-1" id="radio-6">
					<label for="radio-3">с жестким сиденьем</label>
				    <input type="radio" name="radio-1" id="radio-7">

				  </fieldset>
				  <h3>По материалу</h3>
				  <fieldset>
				    <legend>По материалу</legend>
				    <label for="radio-1">деревянный каркас</label>
				    <input type="radio" name="radio-1" id="radio-8">
				    <label for="radio-2">металлокаркасе</label>
				    <input type="radio" name="radio-1" id="radio-9">
				    <label for="radio-3">пластик</label>
				    <input type="radio" name="radio-1" id="radio-10">

				  </fieldset>
				   <h3>По стилю</h3>
				  <fieldset>
				    <legend>По стилю: </legend>
				    <label for="radio-1">Eames</label>
				    <input type="radio" name="radio-1" id="radio-11">
				    <label for="radio-2">mid-century modern</label>
				    <input type="radio" name="radio-1" id="radio-12">
				    <label for="radio-3">Tolix</label>
				    <input type="radio" name="radio-1" id="radio-13">
				    <label for="radio-3">классический</label>
				    <input type="radio" name="radio-1" id="radio-14">
				    <label for="radio-3">дизайнерский</label>
				    <input type="radio" name="radio-1" id="radio-15">

				  </fieldset>

	                <h3>По типу заведения</h3>
				  <fieldset>
				    <legend>По типу заведения: </legend>
				    <label for="radio-1">банкетный зал</label>
				    <input type="radio" name="radio-1" id="radio-16">
				    <label for="radio-2">конференц-зал</label>
				    <input type="radio" name="radio-1" id="radio-17">
				    <label for="radio-3">ресторан / кафе / бар</label>
				    <input type="radio" name="radio-1" id="radio-18">
				    <label for="radio-3">столовая</label>
				    <input type="radio" name="radio-1" id="radio-4">
				    <label for="radio-3">уличное кафе / терраса</label>
				    <input type="radio" name="radio-1" id="radio-19">
					<label for="radio-3">аппартаменты</label>
				    <input type="radio" name="radio-1" id="radio-20">

				  </fieldset>
				</div>

			</div>';
		};

	function filtr_type(){
		echo'
			<div class="widget">
			  <h4>Сортировать по</h4>
			  <fieldset>
			    <legend>популярности</legend>
			    <div class="controlgroup">
			      <select id="car-type">
			        <option>Compact car</option>
			        <option>Midsize car</option>
			        <option>Full size car</option>
			        <option>SUV</option>
			        <option>Luxury</option>
			        <option>Truck</option>
			        <option>Van</option>
			      </select>
				</div>
		        </fieldset>
				<fieldset>
				    <legend>цене</legend>
				    <div class="controlgroup">
				      <select id="car-type">
				        <option>Compact car</option>
				        <option>Midsize car</option>
				        <option>Full size car</option>
				        <option>SUV</option>
				        <option>Luxury</option>
				        <option>Truck</option>
				        <option>Van</option>
				      </select>
					</div>
		        </fieldset>
		        <fieldset>
				    <legend>алфавиту</legend>
				    <div class="controlgroup">
				      <select id="car-type">
				        <option>Compact car</option>
				        <option>Midsize car</option>
				        <option>Full size car</option>
				        <option>SUV</option>
				        <option>Luxury</option>
				        <option>Truck</option>
				        <option>Van</option>
				      </select>
					</div>
		        </fieldset>
	        </div>
	        ';
	};

/* 	function pagination(){

	}; */
?>