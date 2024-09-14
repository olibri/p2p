// package: account
// file: account.proto

import * as account_pb from "./account_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AccounterVerifySignature = {
  readonly methodName: string;
  readonly service: typeof Accounter;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof account_pb.SignatureRequest;
  readonly responseType: typeof account_pb.SignatureResponse;
};

export class Accounter {
  static readonly serviceName: string;
  static readonly VerifySignature: AccounterVerifySignature;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AccounterClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  verifySignature(
    requestMessage: account_pb.SignatureRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: account_pb.SignatureResponse|null) => void
  ): UnaryResponse;
  verifySignature(
    requestMessage: account_pb.SignatureRequest,
    callback: (error: ServiceError|null, responseMessage: account_pb.SignatureResponse|null) => void
  ): UnaryResponse;
}

