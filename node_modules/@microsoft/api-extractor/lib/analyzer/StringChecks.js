"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
/**
 * Helpers for validating various text string formats.
 */
class StringChecks {
    /**
     * Tests whether the input string is safe to use as an ECMAScript identifier without quotes.
     *
     * @remarks
     * For example:
     *
     * ```ts
     * class X {
     *   public okay: number = 1;
     *   public "not okay!": number = 2;
     * }
     * ```
     *
     * A precise check is extremely complicated and highly dependent on the ECMAScript standard version
     * and how faithfully the interpreter implements it.  To keep things simple, `isSafeUnquotedMemberIdentifier()`
     * conservatively accepts any identifier that would be valid with ECMAScript 5, and returns false otherwise.
     */
    static isSafeUnquotedMemberIdentifier(identifier) {
        if (identifier.length === 0) {
            return false; // cannot be empty
        }
        if (!ts.isIdentifierStart(identifier.charCodeAt(0), ts.ScriptTarget.ES5)) {
            return false;
        }
        for (let i = 1; i < identifier.length; i++) {
            if (!ts.isIdentifierPart(identifier.charCodeAt(i), ts.ScriptTarget.ES5)) {
                return false;
            }
        }
        return true;
    }
}
exports.StringChecks = StringChecks;
//# sourceMappingURL=StringChecks.js.map