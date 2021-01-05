/*
 * NewConsensus API
 * version 1.0
 * Copyright (c) 2019 NewConsensus
 * Author NewConsensus <admin@newconsensus.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import { MainPageSlideLogs } from '../models/MainPageSlideLogs';

@EntityRepository(MainPageSlideLogs)
export class MainPageSlideLogsRepository extends Repository<MainPageSlideLogs> {

}
