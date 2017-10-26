(function() {



	function TinderApp()
	{

		let _weatherServices,
			_weatherElement,
			_weatherItems;


		function init()
		{
			console.log('1. Initialize Application');
			_tinderServices = new TinderService();
			_tinderElement = document.querySelector('.application');
			_tinderElementLogin = document.querySelector('.application-login');

			_tinderElementCheckBoxesMale = document.querySelector('#gender1');
			_tinderElementCheckBoxesFemale = document.querySelector('#gender2');
			loadTinderData();

		}

		function loadTinderData()
		{
			_tinderServices.loadTinder()
			.then(function(data) {
				_tinderItems = data;
				updateTinderUI();
				console.log('Updating Tinder UI');
			})
			.catch(function(reject) {
				console.log('Fail Updating Tinder UI')
				console.log(reject);
			})
		}

		function updateTinderUI()
		{
			document.querySelector('#btn-submit').addEventListener('click', function(ev) {
				ev.preventDefault();

				let tempStr = "";


				if( _tinderElementCheckBoxesMale.checked )
				{
					if ( _tinderItems.results.gender == "female" )
					{
						tempStr += `
						<img src="${ _tinderItems.results.picture.medium }" class="mate-pic"/>
						<p class="mate-name">${ _tinderItems.results.name.first }</p>
						<p class="mate-age">${ _tinderItems.results.dob }</p>
						`;
					}
					return false;
				}
				else if( _tinderElementCheckBoxesFemale.checked )
				{
					if ( _tinderItems.results.gender == "male" )
					{
						tempStr += `
						<img src="${ _tinderItems.results.picture.medium }" class="mate-pic"/>
						<p class="mate-name">${ _tinderItems.results.name.first }</p>
						<p class="mate-age">${ _tinderItems.results.dob }</p>
						`;
					}
					return false;
				}
				else
				{
					tempStr = "PLZ LOGIN";
				}


				_tinderElement.innerHTML = tempStr;
			});
		}

		return {
			init: init
		}
	}

	window.addEventListener('load', function(ev)
	{
		const app = new TinderApp();
		app.init();
	});


})();