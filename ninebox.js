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
	constructor(context) {
		this.context = context
		this.rectCollection = []
		this.verticalPeriod = null
		this.horizontalPeriod = null
	}
	setVerticalPeriod(start, limit, divided) {
		this.verticalPeriod = {
			'start':start,
			'limit':limit,
			'divided':divided
		}
	}
	setHorizontalPeriod(start, limit, divided) {
		this.horizontalPeriod = {
			'start':start,
			'limit':limit,
			'divided':divided
		}
	}
	getCountRect() {
		return horizontalPeriod.divided * verticalPeriod.divided
	}
	addRect(rectInstance) {
		this.rectCollection.push(rectInstance)
	}
	drawStaticRect() {
		this.rectCollection.forEach(function(rect) {
			rect.drawOnPos(rect.x, rect.y, rect.width, rect.height)
		});
	}
	drawRect() {
		
	}
}