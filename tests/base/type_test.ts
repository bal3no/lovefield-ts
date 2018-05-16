/**
 * Copyright 2016 The Lovefield Project Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as chai from 'chai';
import {DEFAULT_VALUES} from '../../lib/base/enum';

const assert = chai.assert;

describe('Type', () => {
  // This test is used to test that default values set in the code will
  // not cause browser crash due to standards non-compliance.
  it('hasValidDefaultValues', () => {
    const clone: any[] = [];
    DEFAULT_VALUES.forEach((value: any) => {
      clone.push(value);
    });
    assert.equal(DEFAULT_VALUES.size, clone.length);
  });
});
