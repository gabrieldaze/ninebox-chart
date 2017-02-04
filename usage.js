canvas = document.getElementById("canvas")
context = canvas.getContext('2d')

chart = new Chart(canvas, context)
chart.setRectMargin(5)
chart.setVerticalPeriod(0, 50, 3)
chart.setHorizontalPeriod(0, 100, 3)
chart.drawRectList('#333')

// chart.setRectColor(1, '#09F')
// chart.setRectContent(1, '#09F', 'ID 1', {'color':'#FFF', 'type':'Courier', 'size':'20px'})
// chart.setRectContent(2, '#09F', 'ID 2', {'color':'#FFF', 'type':'Courier', 'size':'20px'})
// chart.setRectContent(3, '#09F', Math.round(context.measureText('Gabriel').width) + 'px', {'color':'#FFF', 'type':'Courier', 'size':'20px'})

// chart.setPersistentFont('Arial', 22, '#DDD', 15, 5)
// chart.drawTextOnRect(1, 'Hello[%]World!')
// chart.drawTextOnRect(2, 'Another[%]text example')
// chart.drawTextOnRect(9, 'This is[%]a new[%]rectangle')

circlePos = chart.getPeriodPosition(50, 10)
chart.drawCircle(circlePos.x, circlePos.y, 50, 'green')