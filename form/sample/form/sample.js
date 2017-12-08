namespace("fx.giantFormDesign")["sample"] = (function () {

	var observable = ko.observable;
	//this will be the API request sender to the API endpoint
	var formRecordApi = fx.DataContext.Application.formRecord;

	function viewModel(params) {

		var koFormId = params.formId;
		var koGetAllResponse = observable();
		var koGetResponse = observable();
		var koPostResponse = observable();
		var koPutResponse = observable();
		var koDeleteResponse = observable();


		function executeGetAll() {
			//executing get api request to the form with id koFormId();
			//formRecordApi.getAll(formId, queryStrings,options)
			//we usually will use options.success and options.error
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
			//executing get api request to the form with id koFormId() and route param id;
			//formRecordApi.getAll(formId, id,options)
			//we usually will use options.success and options.error
			formRecordApi.get(koFormId(), "12345678-1234-1234-1234-123456781234", {
				success: function (response) {
					responseString = JSON.stringify(response, null, 4);
					koGetResponse(responseString);
				}
			})
		}

		function executePost() {
			//executing post api request to the form with id koFormId();
			//formRecordApi.post(formId, payload,options)
			//we usually will use options.success and options.error
			formRecordApi.post(koFormId(), {
				"name": "Giant Form Sandbox",
				"address": "http://fusionexgiant.com"
			}, {
				success: function () {
					koPostResponse("Post Success!");
				}
			})
		}

		//executing put api request to the form with id koFormId() and route param id and payload data;
		//formRecordApi.put(formId, id, payload,options)
		//we usually will use options.success and options.error
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

		//executing delete api request to the form with id koFormId() and route param id;
		//formRecordApi.delete(formId, id,options)
		//we usually will use options.success and options.error
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