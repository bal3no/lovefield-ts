/**
 * Copyright 2018 The Lovefield Project Authors. All Rights Reserved.
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

import { Row } from '../base/row';

import { Column } from './column';

// Public table interface.
// @export
export interface Table {
  getName(): string;
  as(alias: string): Table;
  createRow(value?: object): Row;

  // Individual accessor will return BaseColumn.
  // This conflicts to private members in TableImpl, therefore use a more
  // generic unknown type. Caller to dynamic cast public accessor to Column.
  [key: string]: unknown;

  // Given the indexed type is a big bummer in Typescript, add an additional
  // method to make life easier.
  col(name: string): Column;
}
