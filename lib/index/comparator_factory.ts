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

import {IndexImpl} from '../schema/index_impl';
import {MultiKeyComparator} from './multi_key_comparator';
import {MultiKeyComparatorWithNull} from './multi_key_comparator_with_null';
import {SimpleComparator} from './simple_comparator';

export class ComparatorFactory {
  static create(
    indexSchema: IndexImpl
  ): SimpleComparator | MultiKeyComparator | MultiKeyComparatorWithNull {
    if (indexSchema.columns.length === 1) {
      return new SimpleComparator(indexSchema.columns[0].order);
    }

    const orders = indexSchema.columns.map(col => col.order);
    const nullable = indexSchema.columns.some(col => col.schema.isNullable());
    return nullable
      ? new MultiKeyComparatorWithNull(orders)
      : new MultiKeyComparator(orders);
  }
}
