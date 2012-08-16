(function(container,map){
	var containerWidth = container.getSize().x,
		containerHeight = container.getSize().y,
		tileheight = 32,
		tileWidth = 64,
		tileheightF = 128,
		tile = document.createElement('img');

	//setting img src 
	tile.src = map.tilesets[0].image;
	tile.onload = initialize;
	function initialize(){
		for (var i = 0,len = map.layers.length; i < len; i++) {
			drawLayer(map.layers[i]);
		};
	};
	function drawLayer(layer){
		var i=0,
			left = containerWidth/2 - tileWidth/2,
			top = 0,
			data = layer.data,
			width = layer.width,
			row,
			len = data.length; //left class for properties on each layer
		for(;len>i;i++){
			left += tileWidth/2;
			top += tileheight/2;

			if(i%width == 0){
				row = Math.floor(i/width);
				top = row* tileheight/2;
				left = (container.getSize().x)/2 - row*tileWidth/2;
			}
			drawTile(left,top,data[i]);
		}

	};
	function drawTile(left,top,pos){
		if(pos!=0){
			--pos;
			var oImg = document.createElement('div'),
				width = parseInt(tile.width)/tileWidth;
				bleft = tileWidth * (pos%width);
				btop = Math.floor(pos/width) * tileheightF;

			oImg.className = 'tile';
			oImg.style.background = 'url('+tile.src+') -'+bleft+'px -'+btop+'px no-repeat';
			oImg.style.width = tileWidth+'px';
			oImg.style.height = tileheightF+'px';
			oImg.style.left = left+'px';
			oImg.style.top = top+'px';
			document.body.appendChild(oImg);
		}
	}

})($('map-canvas'),tmp);



