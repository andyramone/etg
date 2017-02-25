function showPosts(data){
	//console.log(data.items[0].title);
	var html = '<ul data-role="listview">';
	$.each(data.items,function(k,v){
		html += '<li>';
		html += '<a href="#" onclick="loadPost(' + v.id + ')">';
		html += '<h3>' + v.title + '</h3>';
		//html += '<h3>' + v.title + ' by ' + v.author.displayName + '</h3>';
		//html += '<p>' + v.content.slice(0,200) + '</p>';
		html += '<p>' + v.author.displayName + '</p>'
		html += '</a>' + '</li>';
	});
	html += '</ul>';
	$('#blog-wrapper').html(html);
}

function loadPost(id){
	$.getJSON('https://www.googleapis.com/blogger/v3/blogs/7135039523376541359/posts/' + id + '?fields=author%2FdisplayName%2Ccontent%2Ctitle&key=AIzaSyA3p3gG6UKLpE3r_rEhoB0Z4Hvzq6FpQi0&callback=?', function(data){
		//powyzsze data jest brane z funkcji nadrzednej, ale tam struktura data jest inna niz tu!
		//dodatkowo data jest out of scope dla loadPost, stąd wartości undefined dla title, content itp.
		//loadPost wywoływane bezpośrednio działa, ale wywoływane z showPosts już nie
		//console.log(data.title);
		html = '<h3>' + data.title + '</h3>';
		html += data.content;
		document.write(html);
		//$('#post-wrapper').html(html);
	});
}

// function loadPost(id) {
	// var rawobj = $.getJSON('https://www.googleapis.com/blogger/v3/blogs/7135039523376541359/posts/' + id + '?fields=author%2FdisplayName%2Ccontent%2Ctitle&key=AIzaSyA3p3gG6UKLpE3r_rEhoB0Z4Hvzq6FpQi0');
		// console.log(rawobj.content);
		// //var html = '';
		// //html += '<h3>' + data.title + '</h3>';
		// //html += '<h5> by ' + data.author.displayName + '</h5>';
		// //html += '<p>' + data.content.slice(0,200) + '</p>';
		// //$('#post-wrapper').html(html);
// }

function showVideos(data){
	//console.log(data.items[0].snippet.thumbnails.default.url);
	var html = '<ul data-role="listview">';
	$.each(data.items,function(k,v){
		//var onevideo = $.getJSON("https://www.googleapis.com/youtube/v3/videos?part=contentDetails%2Cstatistics&id=pcNqScmsnb4&key=AIzaSyA3p3gG6UKLpE3r_rEhoB0Z4Hvzq6FpQi0"));
		html += '<li>';
		html += '<a href="#player" onclick="loadVideo(\'' + v.id.videoId + '\',\'' + v.snippet.title + '\')">';
		//html += '<a href="#player" onclick="loadVideo(' + v.id.videoId + ')">';
		html += '<img src="' + v.snippet.thumbnails.default.url + '"/>';
		html += '<h3>' + v.snippet.title + '</h3>';
		//html += '<h3>[' + onevideo["statistics"].viewCount + '] ' +  v.snippet.title + ' by ' + v.snippet.channelTitle + '</h3>';
		//html += '<h3>' +  v.snippet.title + ' by ' + v.snippet.channelTitle + '</h3>';
		html += '<p>by ' + v.snippet.channelTitle + '</p>'
		html += '</a>' + '</li>';
	});
	//console.log(onevideo);
	html += '</ul>';
	$('#video-wrapper').html(html);
}

function loadVideo(id, title){
	var html = '';
	html += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '?showinfo=0" frameborder="0" allowfullscreen></iframe>';
	html += '<h3>' + title + '</h3>';
	$('#video').html(html);
}



// function getVideo(data){
	// var oneVideo = JSON.parse(data);
	// //var oneVideo = $.getJSON(data);
	// //console.log(oneVideo);
// }

// function getVideoLength(videoid) {
	// var videoObj = $.getJSON("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoid + "&key=AIzaSyA3p3gG6UKLpE3r_rEhoB0Z4Hvzq6FpQi0");
	// console.log(videoObj);
// }