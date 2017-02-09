class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}

class Rect {
	constructor(width, height) {
		this.width = width
		this.height = height
		this.static = false
		this.x = null
		this.y = null
	}
	drawOnPos(context, point, color) {
		context.fillStyle = color
		context.fillRect(point.x, point.y, this.width, this.height)
	}
	drawOnCenter(context, point, color) {
		context.fillStyle = color
		context.fillRect(point.x - this.width / 2, point.y - this.height / 2, this.width, this.height)
	}
	setStaticPosition(point) {
		this.static = true
		this.x = point.x
		this.y = point.y
	}
	getCenter() {
		return {
			'x':this.width / 2,
			'y':this.height / 2
		};
	}
}

class Chart {
	constructor(potentialString, performanceString) {

		// Create the canvas to attach to the parent element
		// The parent element is the @canvasArea
		var canvas = document.createElement('canvas')
		canvas.id = 'canvas'

		// Get the 2D context of the @canvas
		var context = canvas.getContext('2d')
		// document.body.appendChild(canvas)

		// Setup the main canvas attributes
		this.canvas = canvas
		this.context = context
		this.rectCount = 0
		this.rectCollection = []
		this.verticalPeriod = null
		this.horizontalPeriod = null
		this.rectMargin = 0
		this.persistentFont = null
		this.potentialString = potentialString
		this.performanceString = performanceString
	}

	buildCanvas() {
		var img = document.createElement('img')
		img.src = this.canvas.toDataURL("image/png")
		document.body.appendChild(img)
	}

	// Set the margin between the rectangles of the chart
	setRectMargin(margin) {
		this.rectMargin = margin
	}

	// Set the number of rows of the chart
	setVerticalPeriod(start, limit, count) {
		this.verticalPeriod = {
			'start':start,
			'limit':limit,
			'count':count
		}
	}

	// Set the number of columns of the chart
	setHorizontalPeriod(start, limit, count) {
		this.horizontalPeriod = {
			'start':start,
			'limit':limit,
			'count':count
		}
	}

	// Get the dynamic rectangle size of the chart
	getRectSize() {
		return {
			'width':this.rectArea.width / this.horizontalPeriod.count - this.rectMargin / 2,
			'height':this.rectArea.height / this.verticalPeriod.count - this.rectMargin / 2
		}
	}

	// Draw all the rectangles in the chart
	// The rectangles will be drawn from left to right and top to down
	drawRectList(color, fill = true) {
		this.context.font = '20px Arial'
		var currentY = 0
		for(var i = 0; i < this.verticalPeriod.count; i++) {
			var currentX = this.rulerSize + this.rectMargin / 2
			for(var j = 0; j < this.horizontalPeriod.count; j++) {
				if(fill) {
					this.context.fillStyle = color
					this.context.fillRect(currentX, currentY, this.getRectSize().width, this.getRectSize().height)
				} else {
					this.context.strokeStyle = color
					this.context.strokeRect(currentX, currentY, this.getRectSize().width, this.getRectSize().height)
				}
				// this.context.fillStyle = fontColor
				// this.context.fillText('ID: ' + (this.rectCount + 1), currentX + 20, currentY + this.getRectSize().height / 2)
				this.rectCollection.push({
					'id':(this.rectCount).toString(),
					'x':currentX,
					'y':currentY
				});
				currentX = currentX + this.getRectSize().width + this.rectMargin
				this.rectCount = this.rectCount + 1
			// console.log('fillRect: ' + (this.rectCount-1) + ' - ' + currentX + ' - ' + currentY)
			}
			currentY = currentY + this.getRectSize().height + this.rectMargin
		}
	}

	// Set a persistent font for the chart
	setPersistentFont(type, size, color, margin = 10, lineheight = 5) {
		this.persistentFont = {
			'type':type,
			'size':size,
			'color':color,
			'margin':margin,
			'lineheight':lineheight
		};
	}

	// Set the color of a specific retangle
	setRectColour(id, color) {
		var context = this.context
		var size = this.getRectSize()
		this.rectCollection.forEach(function(rect) {
			if(rect.id == (id - 1).toString()) {
				context.fillStyle = color
				context.fillRect(rect.x, rect.y, size.width, size.height)
			}
		});
	}

	// Draw a text on a specific position of the canvas
	drawTextOnPos(point, text) {
		var context = this.context
		var rectsize = this.getRectSize()
		var color = this.persistentFont.color
		var size = this.persistentFont.size
		var type = this.persistentFont.type
		var lineheight = this.persistentFont.lineheight
		// var margin = this.persistentFont.margin
		var newLineCount = text.split("[%]").length - 1
		context.fillStyle = color
		context.font = size + 'px ' + type
		if(newLineCount > 0) {
			var y = point.y
			var textSlices = text.split("[%]")
			for(var i = 0; i <= newLineCount; i++) {
				context.fillText(textSlices[i], point.x, y)
				y = y + size + lineheight
			}
		} else {
			context.fillText(text, point.x, point.y)
		}
	}

	// Draw a text on a specific rectangle
	drawTextOnRect(id, text) {
		var context = this.context
		var rectsize = this.getRectSize()
		var color = this.persistentFont.color
		var size = this.persistentFont.size
		var type = this.persistentFont.type
		var lineheight = this.persistentFont.lineheight
		var margin = this.persistentFont.margin
		var newLineCount = text.split("[%]").length - 1
		context.fillStyle = color
		context.font = size + 'px ' + type
		this.context.textAlign = 'left'
		var textSpacing = 0
		this.rectCollection.forEach(function(rect) {
			if(rect.id == (id - 1).toString()) {
				var currentX = rect.x + margin + textSpacing
				var currentY = rect.y + margin + size
				if(newLineCount > 0) {	
					var textSlices = text.split("[%]")
					for(var i = 0; i <= newLineCount; i++) {
						context.fillText(textSlices[i], currentX, currentY)
						currentY += size + lineheight
					}
				} else {
					context.fillText(text, currentX, currentY)
				}
			}
		});

	}

	// Set the content of a specific rectangle
	// The content is its color, font style and text
	setRectContent(id, color, text, font = {'color':'#FFF', 'type':'Courier', 'size':'20px'}) {
		var context = this.context
		var size = this.getRectSize()
		this.rectCollection.forEach(function(rect) {
			if(rect.id == (id - 1).toString()) {
				context.fillStyle = color
				context.fillRect(rect.x, rect.y, size.width, size.height)
				context.font = font.size + ' ' + font.type
				context.fillStyle = font.color
				context.fillText(text, rect.x + 10, rect.y + 10 + parseFloat(font.size.replace('px','')))
			}
		});
	}

	// Get the position of the period in the canvas
	getPeriodPosition(horizontal, vertical) {
		return {
			'x':this.rectArea.width / this.horizontalPeriod.limit * horizontal,
			'y':this.rectArea.height / this.verticalPeriod.limit * vertical
		};
	}

	// Draw a circle on the canvas
	drawCircle(x, y, radius, color, opacity = 0.3) {
		this.context.fillStyle = color
		this.context.globalAlpha = opacity
		this.context.arc(x + this.rulerSize, y, radius, 0, 2 * Math.PI)
		this.context.fill();
		this.context.globalAlpha = 1
	}

	// Set the canvas width, height, rectangle margn, rule size in pixels and the rule margin in pixels
	setupCanvas(width, height, rectMargin, rulerSize) {
		this.canvas.width = width
		this.canvas.height = height
		this.rectMargin = rectMargin
		this.rulerSize = rulerSize
		this.rectArea = {
			'width':this.canvas.width - rulerSize - rectMargin,
			'height':this.canvas.height - rulerSize - rectMargin
		}
	}

	// Setup the rulers
	setupRuler(ruler, string, stringsize, background, textcolour) {
		if(ruler == 'vertical' || ruler == 'potential') {
			this.context.save()
			this.context.textAlign = 'center'
			this.context.font = stringsize + 'px Courier'
			this.context.fillStyle = background
			this.context.translate(this.canvas.width - 1, 0)
			this.context.rotate(3 * (Math.PI / 2))
			this.context.fillRect(-this.canvas.height + this.rulerSize, -this.canvas.width, this.canvas.width, this.rulerSize)
			this.context.fillStyle = textcolour
			this.context.fillText(string, -this.canvas.height / 2 + this.rulerSize / 2, -this.canvas.width + stringsize + stringsize / 2)
			this.context.restore()
		} else if (ruler == 'horizontal' || ruler == 'performance') {
			this.context.textAlign = 'center'
			this.context.font = stringsize + 'px Courier'
			this.context.fillStyle = background
			this.context.fillRect(this.rulerSize, this.canvas.height - this.rulerSize, this.canvas.width, this.rulerSize)
			this.context.fillStyle = textcolour
			this.context.fillText(string, this.canvas.width / 2 + this.rulerSize / 2, this.canvas.height - stringsize)
		}
	}

	// Set the color of each ruler
	setRulerColor(rule, background, textcolor) {
		if(rule == 'vertical' || rule == 'potential') {
			var rule = document.getElementById("rulerVertical")
			rule.style.background = background
			rule.style.color = textcolor
		} else if(rule == 'horizontal' || rule == 'performance') {
			var rule = document.getElementById("rulerHorizontal")
			rule.style.background = background
			rule.style.color = textcolor
		}
	}
}