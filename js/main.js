var idx = 0;
$(function(){
	
	// --------- events -------
	$(window).resize(function() {
		resize_layout();
	});
	$('.login_input input').focus(function(){
		if($(this).val() == "USERNAME" || $(this).val() == "PASSWORD") {
			$(this).val('');
		}
	});
	$('#username').blur(function(){
		if($(this).val() == "") {
			$(this).val('USERNAME');
		}
	});
	$('#password').blur(function(){
		if($(this).val() == "") {
			$(this).val('PASSWORD');
		}
	});
	
	$('#bt_submit').click(function(){
		location.href = 'home.html';
	});
	$('#l_menu').click(function(){
		if($('.left_navmenu').css('display') == 'none') {
			$('.left_navmenu').fadeIn();
			$('.overlay').css('display', 'block');
		}
		else
			$('.left_navmenu').fadeOut();
	});
	
	$('#r_menu').click(function(){
		$('.right_navmenu').toggle();
		$('.overlay').css('display', 'block');
	});
	$('.overlay').click(function(){
		if($('.right_navmenu').css('display') != 'none') {
			$('.right_navmenu').toggle();
			$('.overlay').css('display', 'none');
		}
		if($('.left_navmenu').css('display') != 'none') {
			$('.left_navmenu').fadeOut();
			$('.overlay').css('display', 'none');
		}
	});
	/*
	$('.data_channels li').hover(function(){
		$('.data_channels li').find('div.r_arrow').css('display', 'none');
		$(this).find('div.r_arrow').css('display', 'block');
	}, function(){
		$('.data_channels li').find('div.r_arrow').css('display', 'none');
	});
	*/
	/*
	$('.down_arrow').click(function(){
		$('.data_channels li').removeClass('sel');
		$('.data_channels li').find('div.r_arrow').css('display', 'none');
		idx ++;
		if(idx > 12) idx = 1;
		$('.data_channels li:nth-child('+idx+')').addClass('sel');
		$('.data_channels li:nth-child('+idx+')').find('div.r_arrow').css('display', 'block');
	});
	$('.up_arrow').click(function(){
		$('.data_channels li').removeClass('sel');
		$('.data_channels li').find('div.r_arrow').css('display', 'none');
		idx --;
		if(idx < 1) idx = 12;
		$('.data_channels li:nth-child('+idx+')').addClass('sel');
		$('.data_channels li:nth-child('+idx+')').find('div.r_arrow').css('display', 'block');
	});
	
	$('.data_channels li').click(function(){
		idx = $(this).attr('idx');
		$('.data_channels li').removeClass('sel');
		$('.data_channels li').find('div.r_arrow').css('display', 'none');
		$('.data_channels li:nth-child('+idx+')').addClass('sel');
		$('.data_channels li:nth-child('+idx+')').find('div.r_arrow').css('display', 'block');
	});
	$('.data_channels li:nth-child(6)').click();
	*/
	$('.tab_cont li').hover(function(){
		$('.tab_cont li .top_arrow').css('display', 'none');
		$(this).find('.top_arrow').css('display', 'block');
	}, function(){
		$('.tab_cont li .top_arrow').css('display', 'none');
	});
	$('.tab div').click(function(){
		$('.tab div').removeClass('tab_sel');
		$(this).addClass('tab_sel');
		
		if($(this).attr('id') == 'go_tab_1') {
			$('#tab_2').css('display', 'none');
			$('#tab_1').css('display', 'block');
		} else {
			$('#tab_1').css('display', 'none');
			$('#tab_2').css('display', 'block');
		}
	});
	
	$('.view_bylist').click(function(){
		$('#view_cate').css('display', 'none');
		$('#view_list').css('display', 'block');
	});
	$('.view_bycate').click(function(){
		$('#view_cate').css('display', 'block');
		$('#view_list').css('display', 'none');
	});
	
	$('.more').click(function(){
		if($('#home_view_cate').css('display') == 'none') {
			$('#home_view_cate').css('display', 'block');
			$('#moreless').text('LESS -');
		} else {
			$('#home_view_cate').css('display', 'none');
			$('#moreless').text('MORE +');
		}
	});
	$('#home_view_cate .cate_item').hover(function(){
		$('#home_view_cate .cate_item').find('.cate_overlay').css('display', 'none');
		$(this).find('.cate_overlay').css('display', 'block');
	}, function(){
		$('#home_view_cate .cate_item').find('.cate_overlay').css('display', 'none');
		$('#home_view_cate .cate_item').find('.dashboard_title').css('display', 'none');
	});
	$('#home_view_cate .cate_item').click(function(){
		$('#home_view_cate .cate_item').find('.dashboard_title').html('');
		$('#home_view_cate .cate_item').find('.dashboard_title').css('display', 'none');
		
		$(this).find('.dashboard_title').html($('.dashboard_title_temp').html());
		$(this).find('.dashboard_title').css('display', 'block');
	});
	// ----------- init ----------
	resize_layout();
	
	// ----------------------
});

function resize_layout() {
	var h = $(window).height();
	//h = 1200;
	$('.bg_wrap').css('height', h+'px');
	$('.overlay').css('height', h+'px');
	$('.cont_wrap').css('height', (h-100)+'px');
}