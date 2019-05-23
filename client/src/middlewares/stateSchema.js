export default {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "auth",
    "form",
    "streams"
  ],
  "properties": {
    "auth": {
      "$id": "#/properties/auth",
      "type": "object",
      "title": "The Auth Schema",
      "required": [
        "isSignedIn",
        "userId"
      ],
      "properties": {
        "isSignedIn": {
          "$id": "#/properties/auth/properties/isSignedIn",
          "type": "string",
          "title": "The Issignedin Schema",
          "default": "",
          "examples": [
            "true"
          ],
          "pattern": "^(.*)$"
        },
        "userId": {
          "$id": "#/properties/auth/properties/userId",
          "type": "string",
          "title": "The Userid Schema",
          "default": "",
          "examples": [
            "103383928769950265048"
          ],
          "pattern": "^(.*)$"
        }
      }
    },
    "form": {
      "$id": "#/properties/form",
      "type": "object",
      "title": "The Form Schema"
    },
    "streams": {
      "$id": "#/properties/streams",
      "type": "object",
      "title": "The Streams Schema",
      "required": [
        "11"
      ],
      "properties": {
        "11": {
          "$id": "#/properties/streams/properties/11",
          "type": "object",
          "title": "The 11 Schema",
          "required": [
            "id",
            "title",
            "description",
            "googleId",
            "createdAt",
            "updatedAt",
            "userId"
          ],
          "properties": {
            "id": {
              "$id": "#/properties/streams/properties/11/properties/id",
              "type": "string",
              "title": "The Id Schema",
              "default": "",
              "examples": [
                "11"
              ],
              "pattern": "^(.*)$"
            },
            "title": {
              "$id": "#/properties/streams/properties/11/properties/title",
              "type": "string",
              "title": "The Title Schema",
              "default": "",
              "examples": [
                "My Stream"
              ],
              "pattern": "^(.*)$"
            },
            "description": {
              "$id": "#/properties/streams/properties/11/properties/description",
              "type": "string",
              "title": "The Description Schema",
              "default": "",
              "examples": [
                "This is a test"
              ],
              "pattern": "^(.*)$"
            },
            "googleId": {
              "$id": "#/properties/streams/properties/11/properties/googleId",
              "type": "string",
              "title": "The Googleid Schema",
              "default": "",
              "examples": [
                "103383928769950265048"
              ],
              "pattern": "^(.*)$"
            },
            "createdAt": {
              "$id": "#/properties/streams/properties/11/properties/createdAt",
              "type": "string",
              "title": "The Createdat Schema",
              "default": "",
              "examples": [
                "2019-05-23T21:29:07.813Z"
              ],
              "pattern": "^(.*)$"
            },
            "updatedAt": {
              "$id": "#/properties/streams/properties/11/properties/updatedAt",
              "type": "string",
              "title": "The Updatedat Schema",
              "default": "",
              "examples": [
                "2019-05-23T21:29:07.813Z"
              ],
              "pattern": "^(.*)$"
            },
            "userId": {
              "$id": "#/properties/streams/properties/11/properties/userId",
              "type": "string",
              "title": "The Userid Schema",
              "default": "",
              "examples": [
                "null"
              ],
              "pattern": "^(.*)$"
            }
          }
        }
      }
    }
  }
}