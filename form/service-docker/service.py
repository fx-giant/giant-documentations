from flask import Flask, request
import json

app = Flask(__name__)


@app.route("/", defaults={'path': ''})
@app.route("/<path:path>", methods=["GET", "POST", "PUT", "DELETE"])
def show_request(path):
    response = {

    }
    response["path"] = path
    print("URL: ", path)
    print("-------------------------------------------------")

    response["method"] = request.method
    print("METHOD: ", request.method)
    print("-------------------------------------------------")

    response["headers"] = dict(request.headers)
    print("HEADERS:\n", request.headers)
    print("-------------------------------------------------")

    query_string = request.query_string.decode("UTF-8")
    response["queryString"] = query_string
    print("QUERY STRING: ", query_string)

    data = request.data.decode("UTF-8")
    if data != "":
        json_data = json.loads(data)
        response["data"] = json_data
        print("-------------------------------------------------")
        print("here?")
        print("DATA: ", json_data)

    print("-------------------------------------------------")
    if path == "" and request.method == "GET":
        response = [response]
    formatted_response = json.dumps(response, indent=4)
    print(formatted_response)
    print("\n\n")
    return formatted_response


app.run(debug=True, host="0.0.0.0")
