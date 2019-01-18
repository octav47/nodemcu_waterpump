(function (document) {
	var isBusy = false
	var prevDirection = 's'
	var isKeyPressed = false

	var b = 'button'
	var c = 'click'

	function emptyFunction () {

	}

	function r (direction, cbBefore, cbComplete) {
		cbBefore = cbBefore || emptyFunction
		cbComplete = cbComplete || emptyFunction

		cbBefore()

		isBusy = true

		$.ajax({
			url: direction,
			complete: function () {
				isBusy = false
			}
		})
	}

	$(b).each(function (_, v) {
		v = $(v)

		v.on(c, function () {
			r(v.attr('d'))
		})

		v.mouseup(c, function () {
			
		})
	})
})(document)