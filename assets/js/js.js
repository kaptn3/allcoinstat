$(document).ready(function(){
	
	var cache = {};
	$( "#bs" ).autocomplete({
		minLength: 2,
		select: function( event, ui ) {
			var lang = 'en';
			if(window.siteLang){
				lang = window.siteLang;
			}
			window.location = '/'+lang+'/currency/' + ui.item.id;
		},
		appendTo: "#results",
		open: function() {
			
			var position = $("#results").position(),
				left = position.left, top = position.top;
		
				var w = $('#results').width();

			$("#results > ul").css({left: left -15 + "px",
									top: top + 10 + "px", width: w+30 + 'px' });

		},
		source: function( request, response ) {
			var term = request.term;
			if ( term in cache ) {
				response( cache[ term ] );
				return;
			}

			$.getJSON( "/", request, function( data, status, xhr ) {
				cache[ term ] = data;
				response( data );
			});
		}
	});
	
	$('.table-main-row-th').hover(function(){
		$(this).addClass('hover');
		var classes = $('.table-main-row-td').eq($(this).index()).attr('class').split(' ');
		$('.' + classes.join('.')).addClass('hover');
	}, function(){
		$(this).removeClass('hover');
		var classes = $('.table-main-row-td').eq($(this).index()).attr('class').split(' ');
		$('.' + classes.join('.')).removeClass('hover');
	});
	
	
	
	$('body').on('click', '.table-main-row.data-row', function(){
		//mainTableClick(this);
	});
	
	$('body').on('click', '.footer-mobile-menu', function(){
		if($('.mobile-menu-bottom').length == 0){
			var menu = $('<div class="mobile-menu-bottom"></div>');
			menu.css({
				left: $(this).position().left - 70,
				top: $(this).position().top - 250
			});
			
			menu.append($('.footer-menu').clone());
			menu.find('.footer-mobile-menu').remove();
			menu.find('.choose-lang').remove();
			$('body').append(menu);
		}
		if(!$('.mobile-menu-bottom').is(':visible')){
			$('.mobile-menu-bottom').fadeIn(300);
		}else{
			$('.mobile-menu-bottom').fadeOut(300);
		}
	});
	
	
	$('body').on('click', '.choose-lang', function(){
		if($('.mobile-lang-bottom').length == 0){
			var menu = $('<div class="mobile-lang-bottom"></div>');
			menu.css({
				left: $(this).position().left ,
				top: $(this).position().top - 90
			});
			
			menu.append($('.choose-lang > ul').clone());
			
			$('body').append(menu);
		}
		if(!$('.mobile-lang-bottom').is(':visible')){
			$('.mobile-lang-bottom').fadeIn(300);
		}else{
			$('.mobile-lang-bottom').fadeOut(300);
		}
	});
	
	$('body').on('click', '.close-link', function(){
		$('.mobile-menu-main').fadeOut(300);
	});
	
	
	$('body').on('click', '.info-block-content-info-label', function(){
		$('.currency-choose').fadeIn(300);
	});
	
	$('body').on('click', '.mobile-menu', function(){
		if($('.mobile-menu-main').length == 0){
			var menu = $('<div class="mobile-menu-main"></div>');
			menu.css({
				left: 0 ,
				top: 0,
				height: $(document).height()
			});
			menu.append('<div class="close-link" onclick="$(\'.mobile-menu-main\').fadeOut(300);"></div>');
			menu.append('<div class="mobile-row-cell"><a href="/"><img src="/img/logo.svg" class="LOGO"></a></div>');
			menu.append($('.top-menu-items').clone());
			
			$('body').append(menu);
		}
		if(!$('.mobile-menu-main').is(':visible')){
			$('.mobile-menu-main').fadeIn(300);
		}else{
			$('.mobile-menu-main').fadeOut(300);
		}
	});
	
	$('body').on('click', '.table-main-row-th, .link-more', function(){
		
		var sortBy = $(this).attr('data-sort');
		var slice = $(this).attr('data-slice');
		if(typeof(sortBy) == 'undefined' && typeof(slice) == 'undefined'){
			return;
		}
		
		
		if(typeof(slice) == 'undefined'){
			slice = 0;
			$('.link-more').attr('data-slice', slice);
		}else{
			slice = parseInt(slice);
			slice += 100;
			$(this).attr('data-slice', slice);
			$.ajax({
				//url:
				dataType: 'html',
				type: 'get',
				data: {
					sort_by: sortByGlobal,
					sort_type: sortTypeGlobal,
					slice: slice
				},
				error: function(){

				},
				success: function(response) {
					$('.table-main').append(response);
				}
			});
			return false;
		}
		
		
		
		var sortType = 'asc';
		if($(this).hasClass('sort-asc')){
			sortType = 'desc';
			$(this).removeClass('sort-asc');
			$(this).addClass('sort-desc');
		}else if($(this).hasClass('sort-desc')){
			sortType = 'asc';
			$(this).addClass('sort-asc');
			$(this).removeClass('sort-desc');
		}else{
			$('.table-main-row-th').removeClass('sort');
			$('.table-main-row-th').removeClass('sort-asc');
			$('.table-main-row-th').removeClass('sort-desc');
			sortType = 'asc';
			$(this).addClass('sort');
			$(this).addClass('sort-asc');
		}
		sortByGlobal = sortBy;
		sortTypeGlobal = sortType;
		$.ajax({
			//url:
			dataType: 'html',
			type: 'get',
			data: {
				sort_by: sortBy,
				sort_type: sortType,
				slice: slice
			},
			error: function(){
				
			},
			success: function(response) {
				$('.table-main-row.data-row').remove();
				$('.table-main-row.th-row').after(response);
			}
		});
	});
});

function mainTableClick(e){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		window.location.href = $(e).find('a').attr('href');
	}
}


function loadPrice(type){
	$('.currency-choose').fadeOut();
	$.ajax({
		//url:
		dataType: 'json',
		type: 'get',
		data: {
			type: type
		},
		error: function(){

		},
		success: function(response) {
			$('.info-block-content-info-label').html(type);
			$('#cp').html(response.price);
		}
	});
}