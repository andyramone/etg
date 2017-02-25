function showPosts(data){
	//console.log(data.items[0].title);
	var html = '<ul data-role="listview">';
	$.each(data.items,function(k,v){
		html += '<li>';
		html += '<h href="#post" onclick="loadPost(' + v.id + ')">';
		html += '<h3>' + v.title + '</h3>';
		//html += '<h3>' + v.title + ' by ' + v.author.displayName + '</h3>';
		//html += '<p>' + v.content.slice(0,200) + '</p>';
		html += '<p>' + v.author.displayName + '</p>'
		html += '</a>' + '</li>';
	});
	html += '</ul>';
	$('#blog-wrapper').html(html);
}

function loadPost(id) {
	$.getJSON('https://www.googleapis.com/blogger/v3/blogs/7135039523376541359/posts/' + id + '?fields=author%2FdisplayName%2Ccontent%2Ctitle&key=AIzaSyA3p3gG6UKLpE3r_rEhoB0Z4Hvzq6FpQi0&callback=?', function(data) {
		console.log(data.content);
		//var html = '';
		//html += '<h3>' + data.title + '</h3>';
		//html += '<h5> by ' + data.author.displayName + '</h5>';
		//html += '<p>' + data.content.slice(0,200) + '</p>';
		//$('#post-wrapper').html(html);
	});
}