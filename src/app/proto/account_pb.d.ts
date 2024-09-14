// package: account
// file: account.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";

export class RegisterClientRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterClientRequest): RegisterClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterClientRequest;
  static deserializeBinaryFromReader(message: RegisterClientRequest, reader: jspb.BinaryReader): RegisterClientRequest;
}

export namespace RegisterClientRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class AuthenticationResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): void;

  getRefreshToken(): string;
  setRefreshToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationResponse): AuthenticationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthenticationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationResponse;
  static deserializeBinaryFromReader(message: AuthenticationResponse, reader: jspb.BinaryReader): AuthenticationResponse;
}

export namespace AuthenticationResponse {
  export type AsObject = {
    accessToken: string,
    refreshToken: string,
  }
}

export class SignatureRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getAccount(): string;
  setAccount(value: string): void;

  getSignature(): string;
  setSignature(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureRequest): SignatureRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureRequest;
  static deserializeBinaryFromReader(message: SignatureRequest, reader: jspb.BinaryReader): SignatureRequest;
}

export namespace SignatureRequest {
  export type AsObject = {
    message: string,
    account: string,
    signature: string,
  }
}

export class SignatureResponse extends jspb.Message {
  getAuthorized(): boolean;
  setAuthorized(value: boolean): void;

  getToken(): string;
  setToken(value: string): void;

  getError(): string;
  setError(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureResponse): SignatureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureResponse;
  static deserializeBinaryFromReader(message: SignatureResponse, reader: jspb.BinaryReader): SignatureResponse;
}

export namespace SignatureResponse {
  export type AsObject = {
    authorized: boolean,
    token: string,
    error: string,
  }
}

