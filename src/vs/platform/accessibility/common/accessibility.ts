/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createDecorator } from 'vs/platform/instantiation/common/instantiation';
import { Event } from 'vs/base/common/event';

export const IAccessibilityService = createDecorator<IAccessibilityService>('accessibilityService');

export interface IAccessibilityService {
	_serviceBrand: any;

	readonly onDidChangeAccessibilitySupport: Event<void>;

	alwaysUnderlineAccessKeys(): Promise<boolean>;
	getAccessibilitySupport(): AccessibilitySupport;
	setAccessibilitySupport(accessibilitySupport: AccessibilitySupport): void;
}

export const enum AccessibilitySupport {
	/**
	 * This should be the browser case where it is not known if a screen reader is attached or no.
	 */
	Unknown = 0,

	Disabled = 1,

	Enabled = 2
}