namespace("fx.giantFormDesign")["tutorialDetail"] = (function () {

	const listFormId = "57594819-8249-0000-0000-000000000001";
	const properties = [
		"firstName",
		"lastName",
		"gender",
		"position",
		"address1",
		"address2",
		"isActive",
		"phoneNumber",
	];

	const enumProperties = [
		"position",
	]

	const positionOptions = [{
		name: "Supervisor",
		value: "Supervisor",
	}, {
		name: "Officer",
		value: "Officer",
	}]







	var observable = ko.observable;
	var pureComputed = ko.pureComputed;
	var fxIconClass = fx.iconClass;
	var viewModelProperties = {};
	var unwrap = ko.unwrap;
	var notification = fx.notification;
	//this will be the API request sender to the API endpoint
	var formRecordApi = fx.DataContext.Application.formRecord;


	function viewModel(params) {
		var koAdhocActionConfigurations = params.adhocActionConfigurations;
		var koQueryString = params.queryString;
		var koCrumbs = params.crumbs;
		var breadCrumbWithDefaults = params.breadCrumbWithDefaults;
		var redirectToForm = params.redirectToForm;


		var koFormId = params.formId;
		var koData = observable({});
		var koDataId = observable();

		var koCanSave = pureComputed(function () {
			return true;
		})

		koDataId.subscribe(function (id) {
			reloadData();
		})

		koData.subscribe(function (data) {
			initData(data);
		})


		init();


		var me = this;
		return $.extend(true, {}, viewModelProperties, {
			positionOptions: positionOptions,
		});


		function init() {
			initActions();
			initBreadCrumbs();
			initObservableProperties(viewModelProperties, properties);
			initObservableProperties(viewModelProperties, enumProperties);
			if (koData())
				initData(koData());
			var queryString = koQueryString();
			if (queryString.id)
				koDataId(queryString.id);

		}

		function initActions() {
			koAdhocActionConfigurations([{
				label: "Save",
				iconClass: fxIconClass.save,
				action: save,
				isVisible: koCanSave,
			}])
		}

		function initBreadCrumbs() {
			koCrumbs(breadCrumbWithDefaults([{
				title: "Data List",
				click: function () {
					goToList();
				}
			}, {
				title: "Data Detail",
				click: function () {}
			}]));
		}

		function initData(data) {
			if (!data)
				return;
			initDataBindings(data);
		};

		function reloadData() {
			var id = koDataId();
			formRecordApi.get(koFormId(), id, {
				success: function (data) {
					koData(data);
				}
			})
		}

		function initTwoWayPropertyBindings(viewModelProperties, data) {
			for (var index in properties) {
				var key = properties[index];
				if (key in viewModelProperties)
					twoWayBinding(key, viewModelProperties, data);

			}
		}

		function initTwoWayEnumBindings(viewModelProperties, data) {
			twoWayEnumBinding("position", viewModelProperties, data, positionOptions, {});
		}

		function initDataBindings(data) {

			initTwoWayPropertyBindings(viewModelProperties, data);
			initTwoWayEnumBindings(viewModelProperties, data);
		}


		function twoWayBinding(key, viewModel, data, callback) {
			viewModel.subscriptions = viewModel.subscriptions || {};
			var subscriptions = viewModel.subscriptions;
			if (subscriptions[key] && subscriptions[key].dispose)
				subscriptions[key].dispose();

			callback = callback || function () {};
			var dataValue = unwrap(data[key]);
			viewModel[key](dataValue);
			subscriptions[key] = viewModel[key].subscribe(function (value) {
				data[key] = value;
				callback(key, value);
			});
		}

		function initObservableProperties(obj, properties) {
			for (var i in properties) {
				var property = properties[i];
				obj[property] = observable();
			}
		}

		function twoWayEnumBinding(key, viewModel, data, enums, options) {

			viewModel.subscriptions = viewModel.subscriptions || {};
			var subscriptions = viewModel.subscriptions;
			valueKey = options.valueKey || "value";
			callback = options.callback || function () {};
			var viewModelObservable = viewModel[key];
			var dataValue = data[key];


			subscriptions[key] = viewModelObservable.subscribe(function (option) {
				var value = null;
				if (option)
					value = option[valueKey]
				data[key] = value;
				callback(key, value);
			})
			if (dataValue !== undefined && dataValue !== null)
				for (var k in enums) {
					var option = enums[k];
					if (option[valueKey] == dataValue) {
						viewModelObservable(option);
						break;
					}
				}
			else {
				viewModelObservable(null);
			}
		}

		function save() {
			var id = koDataId();
			if (id)
				update();
			else
				create();
		}

		function create() {
			var data = koData();
			var id = fx.getUuid();
			data.id = id;
			formRecordApi.post(koFormId(), data, {
				success: function () {
					notification.success("Record created");
					koDataId(id);
				}
			})
		}

		function update() {
			var data = koData();
			var id = koDataId();
			formRecordApi.put(koFormId(), id, data, {
				success: function () {
					notification.success("Record updated");
					reloadData();
				}
			})
		}

		function goToList() {
			redirectToForm(listFormId);
		}
	}


	return {
		viewModel: viewModel
	}




})();