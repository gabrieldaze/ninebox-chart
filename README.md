# ninebox-chart
A simple javascript library to create ninebox matrix<br>
Follow this <a href="#guide">guide</a> to learn how to use it.

<a href="http://imgur.com/a/2DSLC"><img src="http://i.imgur.com/SxSefhx.png"/></a><br>
<br>
<div id="guide">
<strong>To use the ninebox-chart, first you must create an instance of the class</strong><br><br>
<code>chart = new Chart('Potential', 'Performance')</code><br><br>
The first parameter is the text of the <b>vertical</b> rule of the chart<br>
The second parameter is the text of the <b>horizontal</b> rule of the chart<br>
<br>
<strong>After that, you must setup the canvas properties</strong><br><br>
<code>chart.setupCanvas(400, 400, 5, 40, 10)</code><br><br>
The parameters are the canvas width, height, rectangle margin, rule size and rule margin<br>
<br>
<strong>Then you'll want to change each rule's colour</strong><br><br>
<code>chart.setRuleColor('vertical', '#DDD', '#333')</code><br>
<code>chart.setRuleColor('horizontal', '#333', '#DDD')</code><br><br>
The first parameter stands for the <b>rule name</b> that you're changing<br>
The second parameter is the <b>background colour</b><br>
The third parameter is the <b>text colour</b><br>
<br>
<strong>After setting the colours you'll want to specify your nine box matrix values</strong><br><br>
<code>chart.setVerticalPeriod(0, 100, 3)</code><br>
<code>chart.setHorizontalPeriod(0, 100, 3)</code><br><br>
For both functions, the first parameter is the <b>start value</b> of your matrix<br>
The second parameter is the <b>limit value</b><br>
And the third parameter is the <b>number of rows</b> and columns of the chart respectively<br>
<br>
<strong>With all set, now you can ask for the library to draw your chart</strong><br><br>
<code>chart.drawRectList('#222', true)</code><br><br>
The first parameter is the <b>colour of the rectangles</b><br>
The second parameter is if the rectangles are <b>filled or not</b><br>
<br>
<strong>Now, you can set a persistent font for your chart. It's optional</strong><br><br>
<code>chart.setPersistentFont('Arial', 14, '#FFF', 15, 5)</code><br><br>
The first parameter is the <b>font face</b><br>
The second parameter is the <b>font size</b><br>
The third parameter is the <b>font colour</b><br>
The fourth parameter is the <b>font margin</b><br>
The fifth parameter is the <b>line height</b><br>
<br>
<strong>Now that you have a persistent font, you can draw in specific rectangles</strong><br><br>
<code>chart.drawTextOnRect(1, 'Hello[%]World!')</code><br>
<code>chart.drawTextOnRect(2, 'Another[%]text example')</code><br>
<code>chart.drawTextOnRect(9, 'This is[%]a new[%]rectangle')</code><br><br>
The first parameter is the <b>rectangle id</b>. To know the id, simply count from left to right and top to down<br>
The second parameter is the <b>text</b>. The <b>[%]</b> symbol represents a new line<br>
<br>
<strong>And finally, you'll want to place the circle marker on your chart</strong><br><br>
<code>circlePos = chart.getPeriodPosition(70, 25)</code><br><br>
First you get the position on the canvas by using the matrix values with the function <i>getPeriodPosition</i><br>
The first parameter is the <b>horizontal value of your matrix</b><br>
The second parameter is the <b>vertical value of your matrix</b><br><br>
<code>chart.drawCircle(circlePos.x, circlePos.y, 50, 'green', 0.5)</code><br><br>
Now with the position values you can use the function <i>drawCircle</i> to draw your marker<br>
The first parameter is the <b>X position</b><br>
The second parameter is the <b>Y position</b><br>
The third parameter is the <b>radius</b> of your marker<br>
The fourth parameter is the <b>colour</b> of your marker<br>
The fifth parameter is the <b>opacity</b> of your marker<br>
</div>
