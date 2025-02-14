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

import {ExecType} from '../../base/private_enum';
import {Journal} from '../../cache/journal';
import {Context} from '../../query/context';
import {Relation} from '../relation';
import {PhysicalQueryPlanNode} from './physical_query_plan_node';

// A dummy execution step that performs no actual work.
export class NoOpStep extends PhysicalQueryPlanNode {
  constructor(private relations: Relation[]) {
    super(PhysicalQueryPlanNode.ANY, ExecType.NO_CHILD);
  }

  toString(): string {
    return `no_op_step(${this.relations[0].getTables().join(',')})`;
  }

  execInternal(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    relations: Relation[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    journal?: Journal,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context?: Context
  ): Relation[] {
    return this.relations;
  }
}
