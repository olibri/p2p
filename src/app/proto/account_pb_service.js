// package: account
// file: account.proto

var account_pb = require("./account_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Accounter = (function () {
  function Accounter() {}
  Accounter.serviceName = "account.Accounter";
  return Accounter;
}());

Accounter.VerifySignature = {
  methodName: "VerifySignature",
  service: Accounter,
  requestStream: false,
  responseStream: false,
  requestType: account_pb.SignatureRequest,
  responseType: account_pb.SignatureResponse
};

exports.Accounter = Accounter;

function AccounterClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AccounterClient.prototype.verifySignature = function verifySignature(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Accounter.VerifySignature, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AccounterClient = AccounterClient;

