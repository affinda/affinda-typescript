"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const node_core_library_1 = require("@rushstack/node-core-library");
class SourceFileLocationFormatter {
    /**
     * Returns a string such as this, based on the context information in the provided node:
     *   "[C:\Folder\File.ts#123]"
     */
    static formatDeclaration(node, workingPackageFolderPath) {
        const sourceFile = node.getSourceFile();
        const lineAndCharacter = sourceFile.getLineAndCharacterOfPosition(node.getStart());
        return SourceFileLocationFormatter.formatPath(sourceFile.fileName, {
            sourceFileLine: lineAndCharacter.line + 1,
            sourceFileColumn: lineAndCharacter.character + 1,
            workingPackageFolderPath
        });
    }
    static formatPath(sourceFilePath, options) {
        if (!options) {
            options = {};
        }
        let result = '';
        // Make the path relative to the workingPackageFolderPath
        let scrubbedPath = sourceFilePath;
        if (options.workingPackageFolderPath) {
            // If it's under the working folder, make it a relative path
            if (node_core_library_1.Path.isUnderOrEqual(sourceFilePath, options.workingPackageFolderPath)) {
                scrubbedPath = path.relative(options.workingPackageFolderPath, sourceFilePath);
            }
        }
        // Convert it to a Unix-style path
        scrubbedPath = node_core_library_1.Text.replaceAll(scrubbedPath, '\\', '/');
        result += scrubbedPath;
        if (options.sourceFileLine) {
            result += `:${options.sourceFileLine}`;
            if (options.sourceFileColumn) {
                result += `:${options.sourceFileColumn}`;
            }
        }
        return result;
    }
}
exports.SourceFileLocationFormatter = SourceFileLocationFormatter;
//# sourceMappingURL=SourceFileLocationFormatter.js.map