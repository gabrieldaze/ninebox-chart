# ninebox-chart
A simple javascript library to create ninebox matrix<br>
Follow this <a href="#guide">guide</a> to learn how to use it.

<a href="http://imgur.com/a/cSJJf"><img src="http://i.imgur.com/iUnbcFi.png"/></a><br>
<br>
<div id="guide">
<p>To use the ninebox-chart first you must create an instance of the class</p>
<code>chart = new Chart('Potential', 'Performance')</code><br>
<p>The first parameter is the text of the <b>vertical</b> rule of the chart<br></p>
<p>The second parameter is the text of the <b>horizontal</b> rule of the chart</p>
<br>
<p>After that, you must setup the canvas properties</p>
<code>chart.setupCanvas(400, 400, 5, 40, 10)</code><br>
<p>The parameters are the canvas width, height, rectangle margin, rule size and rule margin</p>
<br>
<p>Then you'll want to change each rule's colour</p>
<code>chart.setRuleColor('vertical', '#DDD', '#333')</code><br>
<code>chart.setRuleColor('horizontal', '#333', '#DDD')</code><br>
<p>The first parameter stands for the <b>rule name</b> that you're changing.</p>
<p>The second parameter is the <b>background colour</b></p>
<p>The third parameter is the <b>text colour</b></p>
<br>
<p>After setting the colours you'll want to specify your nine box matrix values</p>
<code>chart.setVerticalPeriod(0, 100, 3)</code><br>
<code>chart.setHorizontalPeriod(0, 100, 3)</code><br>
<p>For both functions, the first parameter is the <b>start value</b> of your matrix</p>
<p>The second parameter is the <b>limit value</b></p>
<p>And the third parameter is the <b>number of rows</b> and columns of the chart respectively</p>
<br>
<p>With all set, now you can ask for the library to draw your chart</p>
<code>chart.drawRectList('#222', true)</code><br>
<p>The first parameter is the <b>colour of the rectangles</b></p>
<p>The second parameter is if the rectangles are <b>filled or not</b></p>
</div>
