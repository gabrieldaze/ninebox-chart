// canvas = document.getElementById("canvas")
// context = canvas.getContext('2d')

window.onload = function() {

	// Create an instance of the chart class
	chart = new Chart('Potencial', 'Performance')

	// Setup the canvas width, height, rectangle margin, rule size and rule margin
	chart.setupCanvas(400, 400, 5, 40, 10)

	// Set the color of each rule
	chart.setRuleColor('vertical', '#DDD', '#333')
	chart.setRuleColor('horizontal', '#333', '#DDD')
	// chart.setRulesColor('#DDD', '#A00')

	// Set the vertical period
	chart.setVerticalPeriod(0, 100, 3)

	// Set the horizontal period
	chart.setHorizontalPeriod(0, 100, 3)

	// Draw the rectangles with a specific color
	// The second parameter is if the rectangle is filled or not
	chart.drawRectList('#222', true)

	// Set a persistent font for the chart
	chart.setPersistentFont('Arial', 14, '#FFF', 15, 5)

	// Draw some texts inside specific rectangles
	chart.drawTextOnRect(1, 'Hello[%]World!')
	chart.drawTextOnRect(2, 'Another[%]text example')
	chart.drawTextOnRect(9, 'This is[%]a new[%]rectangle')

	// Draw a circle on a specific value of position
	circlePos = chart.getPeriodPosition(70, 25)
	chart.drawCircle(circlePos.x, circlePos.y, 50, 'green', 0.5)
	
}
