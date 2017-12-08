namespace("fx.giantFormDesign")["sample"] = (function () {

	var observable = ko.observable;
	var formRecordApi = fx.DataContext.Application.formRecord;

	function viewModel(params) {

		var koFormId = params.formId;
		var koGetAllResponse = observable();
		var koGetResponse = observable();
		var koPostResponse = observable();
		var koPutResponse = observable();
		var koDeleteResponse = observable();


		function executeGetAll() {
			formRecordApi.getAll(koFormId(), {
				"query1": "This is query string 1",
				"query2": "Another query string again"
			}, {
				success: function (response) {
					responseString = JSON.stringify(response, null, 4);
					koGetAllResponse(responseString);
				}
			})
		}

		function executeGet() {
			formRecordApi.get(koFormId(), "12345678-1234-1234-1234-123456781234", {
				success: function (response) {
					responseString = JSON.stringify(response, null, 4);
					koGetResponse(responseString);
				}
			})
		}

		function executePost() {
			formRecordApi.post(koFormId(), {
				"name": "Giant Form Sandbox",
				"address": "http://fusionexgiant.com"
			}, {
				success: function () {
					koPostResponse("Post Success!");
				}
			})
		}

		function executePut() {
			formRecordApi.put(koFormId(), "12345678-1234-1234-1234-123456781234", {
				"name": "Giant Form Sandbox",
				"address": "http://fusionexgiant.com"
			}, {
				success: function () {
					koPutResponse("Put Success!");
				}
			})
		}

		function executeDelete() {
			formRecordApi.delete(koFormId(), "12345678-1234-1234-1234-123456781234", {
				success: function () {
					koDeleteResponse("Delete Success!");
				}
			})
		}


		var me = this;
		$.extend(me, {
			formId: koFormId,

			getAllResponse: koGetAllResponse,
			getResponse: koGetResponse,
			postResponse: koPostResponse,
			putResponse: koPutResponse,
			deleteResponse: koDeleteResponse,

			executeGetAll: executeGetAll,
			executeGet: executeGet,
			executePost: executePost,
			executePut: executePut,
			executeDelete: executeDelete,
		})
	}


	return {
		viewModel: viewModel
	}

})();