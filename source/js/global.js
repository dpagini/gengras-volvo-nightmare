$(document).ready(function() {
	$("table").each(function() { 
		$(this).find("tr:even").addClass("even"); 
		$(this).find("tr:odd").addClass("odd"); 
	});
	$("ul").each(function() { 
		$(this).find("> li:even").addClass("even"); 
		$(this).find("> li:odd").addClass("odd");
	});

	$("#Gallery a").colorbox({
		maxWidth: "90%",
		maxHeight: "90%",
		title: function() { return $(this).find("img").attr("alt"); },
		onComplete: function(e) {
			ga("send","event","gallery","view",this.href);
		}
	});
	$("#Gallery a.youtube").colorbox({
		iframe: true,
		innerWidth:640,
		innerHeight:390
	});
	$("#Explanation a.image.reference").colorbox({
		maxWidth: "95%",
		maxHeight: "95%"
	});
	$("nav a").click(function(e) { ga("send","event","nav","click",e.currentTarget.href); });
	$("#Gallery a").click(function(e) { ga("send","event","gallery","open",e.currentTarget.href); });
	$("#Explanation a").click(function(e) { ga("send","event","story","click",e.currentTarget.href); });
	$("#Explanation a.pdf").click(function(e) { e.stopPropagation(); }); // allow the PDF to be clickable (and prevent snippet action)
	$("#Social a").click(function(e) { ga("send","event","social","click",e.currentTarget.href); });

	// set up each snippet for colorbox
	$("span.snippet").each(function(i,e) {
		$(this).data("index",i).colorbox({
			title: "The Cliffnotes",
			rel: "cliffnotes",
			inline: true,
			href: this,
			current: "{current} of {total}",
			width: "500px",
			height: "400px",
			maxWidth: "95%",
			maxHeight: "90%",
			onComplete: function(e) {
				ga("send","event","cliffnote","view","snippet-" + $(this).data("index"));
			}
		})
	});
	// trigger snippet colorbox
	$("#Cliffnotes a").unbind().click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		ga("send","event","cliffnotes","open");
		$("span.snippet").colorbox({ open: true });
	});

	// smooth scroll solution from http://css-tricks.com/snippets/jquery/smooth-scrolling/
	$(function() {
		$('a[href*=#]:not([href=#])').click(function(e) {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					e.preventDefault();
				}
			}
		});
	});

	// stop "index.htm#page" from showing in address bar
	$("a.scroll.top").click(function(e) { e.preventDefault(); });
	// scroll to top functionality
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$("a.scroll.top").fadeIn();
		} else {
			$("a.scroll.top").fadeOut();
		}
	});

	$("#Contact form").submit(function(e) {
		ga("send","event","contact","submit");
		var form = this;
		e.preventDefault();
		$.ajax({
			type: this.method,
			url: this.action,
			data: $(this).serialize(),
			success: function(data) {
				$(form).slideUp("slow",function() {
					$(form).replaceWith('<p class="result">' + data + '</p>');
				});
			}
		});
	});
});