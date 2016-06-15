window.onload = function() {
	for(var i = 0, max = document.images.length; i < max; i++) {
		var img = document.images[i];
		var rollover = img.getAttribute("data-rollover");
		if(!rollover) {
			continue;
		}
		
		(new Image()).src = rollover;
		img.setAttribute("data-rollout", img.src);
		
		img.onmouseover = function() {
			this.src = this.getAttribute("data-rollover");
		};
		
		img.onmouseout = function() {
			this.src = this.getAttribute("data-rollout");
		};
	}
};