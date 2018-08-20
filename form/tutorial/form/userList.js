namespace("fx.giantFormDesign")["userList"] = (function () {
	const detailFormId = "caf86aef-b850-4541-969f-000000000002";
	const pageSize = 20;
	const fields = [{
		name: "firstName",
		displayName: "First Name",
	}, {
		name: "lastName",
		displayName: "Last Name",
	}, {
		name: "position",
		displayName: "Position",
	}, {
		name: "isActive",
		displayName: "Is Active",

	}];

	var observable = ko.observable;
	var observableArray = ko.observableArray;
	var pureComputed = ko.pureComputed;
	var fxIconClass = fx.iconClass;
	var notification = fx.notification;
	//this will be the API request sender to the API endpoint
	var formRecordApi = fx.DataContext.Application.formRecord;

	function viewModel(params) {

		var koFormId = params.formId;
		var redirectToForm = params.redirectToForm;
		var koCrumbs = params.crumbs;
		var breadCrumbWithDefaults = params.breadCrumbWithDefaults;
		var koRecords = observableArray([]);
		var koTotalRecords = observable();
		var koAdhocActionConfigurations = params.adhocActionConfigurations;


		var koCanCreate = pureComputed(function () {
			return true;
		});

		var koFields = pureComputed(function () {
			return fields;
		})

		init();


		var me = this;
		$.extend(me, {
			formId: koFormId,
			records: koRecords,
			fields: koFields,
		});

		function init() {
			reloadRecords();
			initBreadCrumbs();
			initActions();
		}


		function initActions() {
			koAdhocActionConfigurations([{
				label: "Create",
				iconClass: fxIconClass.add,
				action: goToCreateForm,
				isVisible: koCanCreate,
			}])
		}

		function reloadRecords(records) {

			formRecordApi.getAll(koFormId(), {}, {
				success: function (records) {

					for (var i in records)
						extendRecord(records[i]);
					koRecords(records);
				}
			});
		}

		function extendRecord(record) {
			record.displayData = pureComputed(function () {
				return getRecordDisplayData(record);
			})
			record.edit = function () {
				editRecord(record);
			}
			record.remove = function () {
				deleteRecord(record);
			}
		}

		function initBreadCrumbs() {
			koCrumbs(breadCrumbWithDefaults([{
				title: "User List",
				click: function () {}
			}]));
		}

		function editRecord(record) {
			redirectToForm(detailFormId, {
				id: record.id,
			})
		}

		function deleteRecord(record) {
			formRecordApi.delete(koFormId(), record.id, {
				success: function () {
					notification.success("Record Deleted");
					reloadRecords();
				}
			})
		}

		function getRecordDisplayData(record) {
			var data = [];
			for (var i in fields) {
				var field = fields[i];
				var fieldName = field.name;
				var value = "";
				if (fieldName in record)
					value = record[fieldName];
				var newData = {
					fieldName: field.name,
					value: value,
				}
				data.push(newData)
			}
			return data;
		}

		function goToCreateForm() {
			redirectToForm(detailFormId);
		}
	}


	return {
		viewModel: viewModel
	}

})();