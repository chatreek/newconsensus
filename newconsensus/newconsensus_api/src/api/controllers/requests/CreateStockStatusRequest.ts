/*
 * @license NewConsensus Platform v0.1
 * (c) 2020-2021 KaoGeek. http://kaogeek.dev
 * License: MIT. https://opensource.org/licenses/MIT
 * Author: chalucks <chaluck.s@absolute.co.th>, shiorin <junsuda.s@absolute.co.th>
 */

import 'reflect-metadata';
import {IsNotEmpty} from 'class-validator';

export class CreateStockStatus {

    @IsNotEmpty({
        message: 'name is required',
    })
    public name: string;

    @IsNotEmpty({
        message: 'status is required',
    })
    public status: number;
}
