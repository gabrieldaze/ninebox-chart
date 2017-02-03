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
	constructor(canvas, context) {
		this.canvas = canvas
		this.context = context
		this.rectCollection = []
		this.verticalPeriod = null
		this.horizontalPeriod = null
		this.rectMargin = 0
	}
	setRectMargin(margin) {
		this.rectMargin = margin
	}
	setVerticalPeriod(start, limit, count) {
		this.verticalPeriod = {
			'start':start,
			'limit':limit,
			'count':count
		}
	}
	setHorizontalPeriod(start, limit, count) {
		this.horizontalPeriod = {
			'start':start,
			'limit':limit,
			'count':count
		}
	}
	getRectSize() {
		return {
			'width':this.canvas.width / this.horizontalPeriod.count - this.rectMargin,
			'height':this.canvas.height / this.verticalPeriod.count - this.rectMargin
		}
	}
	drawRectList(color) {
		this.context.fillStyle = color
		var currentY = 0
		for(var i = 0; i < this.verticalPeriod.count; i++) {
			var currentX = 0
			for(var j = 0; j < this.horizontalPeriod.count; j++) {
				this.context.fillRect(currentX, currentY, this.getRectSize().width, this.getRectSize().height)
				currentX = currentX + this.getRectSize().width + this.rectMargin
			}
			console.log('fillRect: ' + currentX + ' - ' + currentY)
			currentY = currentY + this.getRectSize().height + this.rectMargin
		}
	}
}